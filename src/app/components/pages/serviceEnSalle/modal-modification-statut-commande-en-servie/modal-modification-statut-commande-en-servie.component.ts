import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { CommandeCreationService } from '../../../../services/commande-creation.service';

@Component({
  selector: 'app-modal-modification-statut-commande-en-servie',
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-modification-statut-commande-en-servie.component.html',
  styleUrl: './modal-modification-statut-commande-en-servie.component.css'
})
export class ModalModificationStatutCommandeEnServieComponent {
  commandeCreationService: CommandeCreationService;

  @Input()
  table?: TableOccupee

  @Output()
  closeModal: EventEmitter<TableOccupee> = new EventEmitter<TableOccupee>();

  constructor(commandeCreationService : CommandeCreationService){
    this.commandeCreationService = commandeCreationService;
  }

  confirmer() {
    console.log(this.table?.numeroTable)
    // ici je dois appeler Commandes service qui doit passer la commande en servie
    this.commandeCreationService.updateCommandeToServie(this.table?.idCommande).subscribe(() =>{
      this.commandeCreationService.notify();
    })
    this.closeModal.emit(this.table);
  }

  fermerModal() {
    this.closeModal.emit();
  }

}
