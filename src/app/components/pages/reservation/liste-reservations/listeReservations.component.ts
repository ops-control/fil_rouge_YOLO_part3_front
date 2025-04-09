import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../../interfaces/reservation';
import { ReservationService } from '../../../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ItemReservationComponent } from '../item-reservation/item-reservation.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule, ItemReservationComponent, RouterModule],
  templateUrl: './listeReservations.component.html',
  styleUrl: './listeReservations.component.css'
})
export class ReservationComponent {
  reservations : Reservation[] = [];
  tablesNonOccupees : TableNonOccupees[] = [];
  todayReservations: Reservation[] = [];
  upcomingReservations: Reservation[] = [];
  idRestaurant : number = 0;

  constructor(
    private serviceReservation: ReservationService,
    private serviceTableNonOccupee: TableNonOccuppesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    this.serviceReservation.getReservations(this.idRestaurant).subscribe(response => {
      this.reservations = response;
      this.filterReservations();
    });
    this.serviceTableNonOccupee.get_tables_non_occupees(this.idRestaurant).subscribe(response => {
      this.tablesNonOccupees = response;
    });
  }

  getTableNumberByReservation(reservation: Reservation): number | undefined {
    const tableNonOccupee = this.tablesNonOccupees.find(table => table.idTableRestaurant === reservation.idTableRestaurant);
    console.log(tableNonOccupee);
    return tableNonOccupee ? tableNonOccupee.numeroTable : undefined;
  }

  filterReservations() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // réinitialiser la partie horaire pour comparer uniquement les dates
    
    this.todayReservations = this.reservations.filter(resa => {
      const reservationDate = new Date(resa.horaireReservation);
      return reservationDate.toDateString() === today.toDateString();
    });

    this.upcomingReservations = this.reservations.filter(resa => {
      const reservationDate = new Date(resa.horaireReservation);
      return reservationDate > today && reservationDate.toDateString() !== today.toDateString();
    });
  }

}