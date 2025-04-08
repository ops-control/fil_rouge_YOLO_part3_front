import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { Reservation } from '../../../../interfaces/reservation';

@Component({
  selector: 'app-modal-reception-client-table-libre',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-reception-client-table-libre.component.html',
  styleUrl: './modal-reception-client-table-libre.component.css'
})
export class ModalReceptionClientTableLibreComponent {
  nbPers = 0;

  @Input()
  table ?: TableNonOccupees;

  @Output()
  closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  reservationCreee: EventEmitter<Reservation> = new EventEmitter<Reservation>();

  confirmer() {
    if (!this.table || this.nbPers <= 0) return;

    const nouvelleReservation: Reservation = {
      idReservation: 8,
      nbPersonne: this.nbPers,
      statut: 'confirmée',
      horaireReservation: new Date(),
      utilisateur: {
        idUtilisateur: 1,
        nom: 'Temp',
        prenom: 'User',
        login : '',
        password : ''
      },
      idRestaurant : this.table.idRestaurant,
    };
  
    this.reservationCreee.emit(nouvelleReservation); // 🔥 On envoie au parent
    this.closeModal.emit(); 
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
