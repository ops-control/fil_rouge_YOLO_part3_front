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
  nbPers = 0;

  @Input()
  table ?: TableNonOccupees;

  @Output()
  closeModal: EventEmitter<void> = new EventEmitter<void>();

  confirmer() {
    console.log("confirmation");
    this.closeModal.emit();
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
