import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ItemReservationComponent } from '../item-reservation/item-reservation.component';
import { ReservationService } from '../../../../services/reservation.service';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { Reservation } from '../../../../interfaces/reservation';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';

@Component({
  selector: 'app-gerer-reservation',
  imports: [CommonModule, RouterModule, ItemReservationComponent],
  templateUrl: './gerer-reservation.component.html',
  styleUrl: './gerer-reservation.component.css'
})
export class GererReservationComponent {
  reservation?: Reservation; // Réservation spécifique
  tablesNonOccupees : TableNonOccupees[] = [];
  idReservation : number = 0;
  idRestaurant : number = 0;

  constructor(
    private serviceReservation: ReservationService,
    private serviceTableNonOccupee: TableNonOccuppesService,
    private route: ActivatedRoute
  ) {
    // Récupérer l'ID de réservation à partir de l'URL
    this.idReservation = Number(this.route.snapshot.paramMap.get('id'));

    // Charger la réservation spécifique
    this.serviceReservation.getReservationById(this.idReservation).subscribe(response => {
      this.reservation = response;
    });

    // Charger les tables non occupées si nécessaire
    this.serviceTableNonOccupee.get_tables_non_occupees(this.idRestaurant).subscribe(response => {
      this.tablesNonOccupees = response;
    });
  }

  getTableNumberByReservation(reservation: Reservation): number | undefined {
    const tableNonOccupee = this.tablesNonOccupees.find(table => table.idTableRestaurant === reservation.idTableRestaurant);
    return tableNonOccupee ? tableNonOccupee.numeroTable : undefined;
  }
}
