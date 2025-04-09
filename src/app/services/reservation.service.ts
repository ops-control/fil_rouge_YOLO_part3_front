import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private BASE_URL = "http://localhost:8080/reservations";
  idresto = 1;

  constructor(private client: HttpClient) { }

  getReservations() {
    return this.client.get<Reservation[]>(this.BASE_URL + "/" + this.idresto);
  }

  getReservationByIdTableRestaurant(idTable: number) {
    return this.client.get<Reservation>(this.BASE_URL + "/table/" + idTable);
  }  

  addReservation(reservation : Reservation) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.client.post<Reservation>(this.BASE_URL, reservation, {headers});
  }
}