import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-modal-modification-statut-commande-en-prete',
  imports: [],
  templateUrl: './modal-modification-statut-commande-en-prete.component.html',
  styleUrl: './modal-modification-statut-commande-en-prete.component.css'
})
export class ModalModificationStatutCommandeEnPreteComponent implements AfterViewInit{

  @Input() titre: string = 'Titre';
  @Output() onConfirm = new EventEmitter<void>();

  @ViewChild('modalEl') modalElement!: ElementRef;
  modalInstance: any;

  ngAfterViewInit(): void {
    this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
  }

  open(): void {
    this.modalInstance.show();
  }

  close(): void {
    this.modalInstance.hide();
  }

  confirmer(): void {
    this.onConfirm.emit(); 
    this.close();
  }
}
