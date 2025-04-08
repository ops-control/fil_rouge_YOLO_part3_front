import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-occupee-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './table-occupee-item.component.html',
  styleUrl: './table-occupee-item.component.css'
})
export class TableOccupeeItemComponent {
  @Input()
  tableOccupee?: TableOccupee;

}
