import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListeTablesOccupeesComponent } from '../components/pages/serviceEnSalle/liste-tables-occupees/liste-tables-occupees.component';
import { Observer } from '../interfaces/observer';

@Injectable({
  providedIn: 'root'
})
export class CommandeCreationService {
  private BASE_URL = "http://localhost:8080/commandes/";
  private observers : Observer[] = [];

  constructor(private client : HttpClient) { }

  creationCommande(idReservation: number, idTableRestaurant ?: number){
    const data = 	{
	    "idReservation": idReservation,
	    "idTableRestaurant": idTableRestaurant,
	    "lignes": []
	};
    return this.client.post(`${this.BASE_URL}`, data);
  }

  updateCommandeToServie(idCommande?: number): any {
    if (!idCommande) {
      throw new Error('idCommande est vide');
    }
    const body = {};
    return this.client.put(`${this.BASE_URL}${idCommande}/servie`, body);
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
