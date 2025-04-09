import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../../../interfaces/reservation';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';

@Component({
  selector: 'app-modal-reception-client-table-reservee',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-reception-client-table-reservee.component.html',
  styleUrl: './modal-reception-client-table-reservee.component.css'
})
export class ModalReceptionClientTableReserveeComponent {
  nbPers = this.table?.reservations?.[0]?.nbPersonne;

  @Input()
  table ?: TableNonOccupees;

  @Output()
  closeModal: EventEmitter<void> = new EventEmitter<void>();

  @Output()  // <-- Ajoute cette ligne
  modifierReservation: EventEmitter<{ id: number, statut: string }> = new EventEmitter();

  confirmer() {
    const idReservation = this.table?.reservations?.[0]?.idReservation;
    if (!idReservation) 
      return ;

    this.modifierReservation.emit({ id: idReservation, statut: 'arrivee' });
    this.closeModal.emit();
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
