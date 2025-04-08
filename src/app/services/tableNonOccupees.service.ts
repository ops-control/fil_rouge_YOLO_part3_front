import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableNonOccupees } from '../interfaces/table-non-occupees';
import { Utilisateur } from '../interfaces/utilisateur';
import { Reservation } from '../interfaces/reservation';

@Injectable({
  providedIn: 'root'
})
export class TableNonOccuppesService {
  private BASE_URL = "http://localhost:8080/tables/";

  constructor(private client : HttpClient) { }

  get_tables_non_occupees(idRestaurant: number) {
    return this.client.get<TableNonOccupees[]>(`${this.BASE_URL}${idRestaurant}`);
  }

  creation_reservation(reservation : Reservation){
    const reservationData = {
      nbPersonne: reservation.nbPersonne,
      horaireReservation: reservation.horaireReservation,
      statut: reservation.statut,
      utilisateur: {
        idUtilisateur: reservation.utilisateur.idUtilisateur
      },
      idTableRestaurant: reservation.idTableRestaurant,
      idRestaurant: reservation.idRestaurant
    };
    console.log("dans le service :" + reservationData.nbPersonne, reservationData.horaireReservation, reservationData.statut, reservationData.utilisateur, reservationData.idRestaurant, reservationData.idTableRestaurant,)
    return this.client.post<Reservation>(`http://localhost:8080/reservations`, reservationData);
  }

}
