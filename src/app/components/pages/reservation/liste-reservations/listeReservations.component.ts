import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../../interfaces/reservation';
import { ReservationService } from '../../../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ItemReservationComponent } from '../item-reservation/item-reservation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  imports: [CommonModule, ItemReservationComponent],
  templateUrl: './listeReservations.component.html',
  styleUrl: './listeReservations.component.css'
})
export class ReservationComponent implements OnInit {
  reservations : Reservation[] = [];
  todayReservations: Reservation[] = [];
  upcomingReservations: Reservation[] = [];

  constructor(
    private service: ReservationService, 
    private router: Router
  ) {}

  ngOnInit(){
    this.service.getReservations().subscribe(response => {
      this.reservations = response;
      this.filterReservations();
    });
  }

  filterReservations() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // réinitialiser la partie horaire pour comparer uniquement les dates
    console.log(today);
    
    this.todayReservations = this.reservations.filter(resa => {
      const reservationDate = new Date(resa.horaireReservation);
      console.log(reservationDate);
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