import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableNonOccupeeItemComponent } from '../table-non-occupee-item/table-non-occupee-item.component';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-tables-non-occupees',
  imports: [CommonModule, TableNonOccupeeItemComponent],
  templateUrl: './liste-tables-non-occupees.component.html',
  styleUrl: './liste-tables-non-occupees.component.css'
})
export class ListeTablesNonOccupeesComponent {
  tablesNonOccupees: TableNonOccupees[] = [];

    constructor(
      private tablesNonOccupeesService: TableNonOccuppesService,
    ){
      const idRestaurant = 2;
      tablesNonOccupeesService.get_tables_non_occupees(idRestaurant).subscribe(response => {
      this.tablesNonOccupees = response;
      });
    }
}
