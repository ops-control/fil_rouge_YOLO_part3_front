import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';

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

  confirmer() {
    console.log("confirmation")
    // doit transmettre les informations de la réservation au composant réception-clientele (n° Table + nbPersonnes).
    this.closeModal.emit();
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
