import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../../interfaces/reservation';
import { ReservationService } from '../../../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ItemReservationComponent } from '../item-reservation/item-reservation.component';
import { Router } from '@angular/router';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule, ItemReservationComponent],
  templateUrl: './listeReservations.component.html',
  styleUrl: './listeReservations.component.css'
})
export class ReservationComponent implements OnInit {
  reservations : Reservation[] = [];
  tablesNonOccupees : TableNonOccupees[] = [];
  todayReservations: Reservation[] = [];
  upcomingReservations: Reservation[] = [];

  constructor(
    private serviceReservation: ReservationService,
    private serviceTableNonOccupee: TableNonOccuppesService,
    private router: Router
  ) {
    this.serviceReservation.getReservations().subscribe(response => {
      this.reservations = response;
      this.filterReservations();
    });
  }

  ngOnInit(){
    this.serviceTableNonOccupee.get_tables_non_occupees(1).subscribe(response => {
      this.tablesNonOccupees = response;
    });
  }

  getTableNumberByReservation(reservation: Reservation): number | undefined {
    const tableNonOccupee = this.tablesNonOccupees.find(table => table.idTableRestaurant === reservation.idTableRestaurant);
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

  createReservation() {
    this.router.navigate(["/reservations/creer-resa"]);
  }  
}