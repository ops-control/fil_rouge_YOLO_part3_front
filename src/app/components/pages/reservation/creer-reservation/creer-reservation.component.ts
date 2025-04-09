import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { Reservation } from '../../../../interfaces/reservation';
import { CommonModule } from '@angular/common';
import { UtilisateurService } from '../../../../services/utilisateur.service';
import { Utilisateur } from '../../../../interfaces/utilisateur';


@Component({
  selector: 'app-creer-reservation',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './creer-reservation.component.html',
  styleUrls: ['./creer-reservation.component.css']
})
export class CreerReservationComponent {
  formNewReservation: FormGroup;
  tablesNonOccupees: TableNonOccupees[] = [];

  constructor(
    private reservationService: ReservationService,
    private tableNonOccupeeService: TableNonOccuppesService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialisation du formulaire avec FormBuilder
    this.formNewReservation = this.fb.group({
      nbPersonnes: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      idTableRestaurant: ['', Validators.required]
    });

    // Récupération des tables non occupées
    this.tableNonOccupeeService.get_tables_non_occupees(1).subscribe((response) => {
      this.tablesNonOccupees = response;
    });
  }

  saveReservation() {
    if (this.formNewReservation.valid) {
      const horaireReservation = new Date(`${this.formNewReservation.value.date}T${this.formNewReservation.value.heure}`);
      
    // Construire l'utilisateur à ajouter
    const utilisateur: Utilisateur = {
      nom: this.formNewReservation.value.nom,
      prenom: this.formNewReservation.value.prenom,
      login: '', 
      password: '',
      idRestaurant: 1
    };
    
    // Étape 1 : Ajouter l'utilisateur
    this.utilisateurService.addUtilisateur(utilisateur).subscribe(
      (utilisateurCree: Utilisateur) => {
        console.log('Utilisateur créé avec succès', utilisateurCree);
    
        // Étape 2 : Utiliser l'utilisateur créé pour créer la réservation
        const reservation: Reservation = {
          nbPersonne: this.formNewReservation.value.nbPersonnes,
          statut: 'confirmée',
          horaireReservation: horaireReservation,
          utilisateur: utilisateurCree, // Utilisateur retourné par l'API
          idRestaurant: 1, // Id du restaurant associé
          idTableRestaurant: this.formNewReservation.value.idTableRestaurant
        };
    
        // Envoi de la réservation au backend
        this.reservationService.addReservation(reservation).subscribe(
          (response) => {
            console.log('Réservation créée avec succès', response);
            this.router.navigate(['/reservations']); // Redirection après succès
          },
          (error) => {
            console.error('Erreur lors de la création de la réservation', error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la création de l\'utilisateur', error);
      }
    );
  } else {
    console.error('Formulaire invalide');
  }
}

  display_error(field: string, error: string) {
    return this.formNewReservation?.get(field)?.dirty
        && this.formNewReservation?.get(field)?.errors?.[error];
  }
}