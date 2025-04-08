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
    let now = new Date();
    now.setHours(now.getHours()+2);

    const nouvelleReservation: Reservation = {
      idReservation : 0,
      nbPersonne: this.nbPers,
      statut: 'confirmée',
      horaireReservation: now,
      utilisateur: {
        idUtilisateur: 1,
        nom: 'Temp',
        prenom: 'User',
        login : '',
        password : ''
      },
      idRestaurant: this.table.idRestaurant,
      idTableRestaurant : this.table.idTableRestaurant
    };
    console.log(nouvelleReservation)
    this.reservationCreee.emit(nouvelleReservation);
    this.closeModal.emit(); 
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
