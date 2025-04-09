import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from '../interfaces/observer';
import { Reservation } from '../interfaces/reservation';
import { TableOccupee } from '../interfaces/table-occupee';

@Injectable({
  providedIn: 'root'
})
export class CommandeCreationService {
  private BASE_URL = "http://localhost:8080/commandes";
  private observers : Observer[] = [];

  constructor(private client : HttpClient) { }

  creationCommande(reservation: Reservation, table?: TableOccupee){
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const body: any = 	{
      "statut": "brouillon",
      "reservationDto": reservation,
      "idTableRestaurant": table?.idTableRestaurant,
      "numeroTable": table?.numeroTable,
      "nomClient": "Jean Dupont",
      "nbPersonnes": reservation.nbPersonne,
      "lignes": []
    };
    console.log(body)
    return this.client.post(`${this.BASE_URL}`, body, {headers});
  }

  ajouterPlat(idCommande: number, idPlat: number) {
    return this.client.put<number>(`${this.BASE_URL}/${idCommande}/ajouterplat?plat=${idPlat}`, {});
  }

  retirerPlat(idCommande: number, idPlat: number) {
    return this.client.put<number>(`${this.BASE_URL}/${idCommande}/retirerplat?plat=${idPlat}`, {});
  }

  updateCommandeToPassee(idCommande?: number): any {
    if (!idCommande) {
      throw new Error('idCommande est vide');
    }
    const body = {};
    return this.client.put(`${this.BASE_URL}/${idCommande}/fermer`, body);
  }

  updateCommandeToServie(idCommande?: number): any {
    if (!idCommande) {
      throw new Error('idCommande est vide');
    }
    const body = {};
    return this.client.put(`${this.BASE_URL}/${idCommande}/servie`, body);
  }

  subscribe(observer: Observer){
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(o => {
      o.notify();
    })
  }

}
