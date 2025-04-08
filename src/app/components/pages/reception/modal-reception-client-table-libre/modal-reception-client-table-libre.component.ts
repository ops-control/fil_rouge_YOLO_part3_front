import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-reception-client-table-libre',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-reception-client-table-libre.component.html',
  styleUrl: './modal-reception-client-table-libre.component.css'
})
export class ModalReceptionClientTableLibreComponent {
  nbPers = 0;

  @Input()
  table ?: { numeroTable: number };

  @Output()
  closeModal: EventEmitter<void> = new EventEmitter<void>();

  confirmer() {
    console.log("confirmation")
    this.closeModal.emit();
  }

  fermerModal() {
    this.closeModal.emit();
  }
}
