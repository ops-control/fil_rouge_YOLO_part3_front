import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableNonOccupees } from '../interfaces/table-non-occupees';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class TableNonOccuppesService {
  private BASE_URL = "http://localhost:8080/tables/";

  constructor(private client : HttpClient) { }

  get_tables_non_occupees(idRestaurant: number) {
    return this.client.get<TableNonOccupees[]>(`${this.BASE_URL}${idRestaurant}`);
  }

  creationReservation(nbPersonnes: number, statut : string, horaireReservation: Date, idReservation ?: number, utilisateur ?: Utilisateur){
    const reservationData = {
      "nbPersonne": nbPersonnes,
      "horaireReservation": new Date,
      "statut": "confirmée"
    };
    return this.client.post(`${this.BASE_URL}${idReservation}/reservations`, reservationData);
  }
}
