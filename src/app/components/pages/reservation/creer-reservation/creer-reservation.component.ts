import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { Reservation } from '../../../../interfaces/reservation';
import { CommonModule } from '@angular/common';


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
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialisation du formulaire avec FormBuilder
    this.formNewReservation = this.fb.group({
      nbPersonnes: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      idTableRestaurant: ['', Validators.required] // Champ pour sélectionner une table
    });

    // Récupération des tables non occupées
    this.tableNonOccupeeService.get_tables_non_occupees(1).subscribe((response) => {
      this.tablesNonOccupees = response;
    });
  }

  saveReservation() {
    if (this.formNewReservation.valid) {
      const horaireReservation = new Date(`${this.formNewReservation.value.date}T${this.formNewReservation.value.heure}`);
      const reservation: Reservation = {
        nbPersonne: this.formNewReservation.value.nbPersonnes,
        statut: 'confirmée',
        horaireReservation: horaireReservation,
        utilisateur: {
          idUtilisateur: 1, // Utilisateur temporaire pour l'exemple
          nom: this.formNewReservation.value.nom,
          prenom: '',
          login: '',
          password: ''
        },
        idRestaurant: 1, // Id du restaurant associé
        idTableRestaurant: this.formNewReservation.value.idTableRestaurant
      };

      // Envoi de la réservation au backend
      this.reservationService.addReservation(reservation).subscribe(
        response => {
          console.log('Réservation créée avec succès', response);
          this.router.navigate(['/reservations']); // Redirection après succès
        },
        error => {
          console.error('Erreur lors de la création de la réservation', error);
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