import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommandeCreationService } from '../../../../services/commande-creation.service';
import { ReservationService } from '../../../../services/reservation.service';
import { Reservation } from '../../../../interfaces/reservation';
import { Commande } from '../../../../interfaces/commande';
import { NouvelleCommande } from '../../../../interfaces/nouvelle-commande';

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

  private reservation?: Reservation;
  private commande?: NouvelleCommande;

  constructor(
    private commandeCreationService: CommandeCreationService,
    private reservationService: ReservationService,
    private router: Router
  ){
    this.reservationService = reservationService;
  }
  
  selectionnerTable(tableOccupee : TableOccupee) {
    this.emitTable.emit(tableOccupee);
  }
  
  creerCommande(tableOccupee: TableOccupee) {
    console.log(tableOccupee.idCommande);
    this.reservationService.getReservationByIdTableRestaurant(tableOccupee.idTableRestaurant)
      .subscribe({
        next: (response) => {
          this.reservation = response;
  
          if (this.reservation?.idReservation !== undefined) {
            this.commandeCreationService.creationCommande(this.reservation, tableOccupee)
              .subscribe({
                next: (commandeResponse) => {
                  this.commande = commandeResponse;
                  tableOccupee.idCommande = this.commande.idCommande;
                  console.log(tableOccupee.idCommande);
                  this.router.navigate(['/carte'], {
                    state: {
                      table: tableOccupee,
                      commande: this.commande
                    }
                  });
                }
              });
          }
        }
      });
  }

}