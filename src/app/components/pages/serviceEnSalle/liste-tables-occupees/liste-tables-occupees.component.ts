import { Component } from '@angular/core';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { TablesOccupeesService } from '../../../../services/tables-occupees.service';
import { TableOccupeeItemComponent } from "../table-occupee-item/table-occupee-item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModificationStatutCommandeEnServieComponent } from "../modal-modification-statut-commande-en-servie/modal-modification-statut-commande-en-servie.component";
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { CommandeCreationService } from '../../../../services/commande-creation.service';
import { Observer } from '../../../../interfaces/observer';

@Component({
  selector: 'app-liste-tables-occupees',
  imports: [TableOccupeeItemComponent, CommonModule, FormsModule, ModalModificationStatutCommandeEnServieComponent],
  templateUrl: './liste-tables-occupees.component.html',
  styleUrl: './liste-tables-occupees.component.css'
})
export class ListeTablesOccupeesComponent implements Observer {
  tablesOccupees: TableOccupee[] = [];
  tableOccupeeSelectionnee?: TableOccupee | null = null;

  constructor(private tablesOccupeesService: TablesOccupeesService,
    private commandeCreationService : CommandeCreationService
  ){
    tablesOccupeesService.getTablesOccupees().subscribe(response => {
      this.tablesOccupees = response;
    });
    this.commandeCreationService.subscribe(this);
  }

  selectionnerTable(table : TableOccupee) {
    this.tableOccupeeSelectionnee = table;
  }

  fermerModal() {
    this.tableOccupeeSelectionnee = null;
  }

  notify(){
    this.tablesOccupeesService.getTablesOccupees().subscribe(response => {
      this.tablesOccupees = response;
    });
  }

  

}
