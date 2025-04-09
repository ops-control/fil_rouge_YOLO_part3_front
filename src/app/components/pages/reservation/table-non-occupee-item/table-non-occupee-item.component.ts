import { Component, Input } from '@angular/core';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-non-occupee-item',
  imports: [CommonModule],
  templateUrl: './table-non-occupee-item.component.html',
  styleUrl: './table-non-occupee-item.component.css'
})
export class TableNonOccupeeItemComponent {
@Input()
tableNonOccupee ?: TableNonOccupees;

}
