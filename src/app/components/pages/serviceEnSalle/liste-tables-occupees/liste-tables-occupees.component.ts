import { Component } from '@angular/core';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { TablesOccupeesService } from '../../../../services/tables-occupees.service';
import { TableOccupeeItemComponent } from "../table-occupee-item/table-occupee-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-tables-occupees',
  imports: [TableOccupeeItemComponent, CommonModule],
  templateUrl: './liste-tables-occupees.component.html',
  styleUrl: './liste-tables-occupees.component.css'
})
export class ListeTablesOccupeesComponent {
  tablesOccupees: TableOccupee[] = [];

  constructor(private tablesOccupeesService: TablesOccupeesService){
    tablesOccupeesService.getTablesOccupees().subscribe(response => {
      this.tablesOccupees = response;
    });
  }

}
