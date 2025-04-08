import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableNonOccupeeItemComponent } from '../table-non-occupee-item/table-non-occupee-item.component';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';

@Component({
  selector: 'app-liste-tables-non-occupees',
  imports: [CommonModule, TableNonOccupeeItemComponent],
  templateUrl: './liste-tables-non-occupees.component.html',
  styleUrl: './liste-tables-non-occupees.component.css'
})
export class ListeTablesNonOccupeesComponent {
  tablesNonOccupees: TableNonOccupees[] = [];

    constructor(private tablesNonOccupeesService: TableNonOccuppesService){
      tablesNonOccupeesService.get_tables_non_occupees(1).subscribe(response => {
        this.tablesNonOccupees = response;
      });
    }
}
