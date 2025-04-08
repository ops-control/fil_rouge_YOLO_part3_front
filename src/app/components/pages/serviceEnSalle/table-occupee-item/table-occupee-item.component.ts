import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-occupee-item',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './table-occupee-item.component.html',
  styleUrl: './table-occupee-item.component.css'
})
export class TableOccupeeItemComponent {
  @Input()
  tableOccupee?: TableOccupee;
  @Output()
  emitTable : EventEmitter<TableOccupee> = new EventEmitter<TableOccupee>();

  selectionnerTable(tableOccupee : TableOccupee) {
    this.emitTable.emit(tableOccupee);
  }

}
