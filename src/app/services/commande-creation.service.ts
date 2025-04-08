import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeCreationService {
  private BASE_URL = "http://localhost:8080/commandes/";

  constructor(private client : HttpClient) { }

  creationReservation(idReservation: number, idTableRestaurant ?: number){
    const reservationData = 	{
	    "idReservation": idReservation,
	    "idTableRestaurant": idTableRestaurant,
	    "lignes": []
	};
    return this.client.post(`${this.BASE_URL}`, reservationData);
  }
}
