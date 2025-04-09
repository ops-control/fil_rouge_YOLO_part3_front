import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandeServie } from '../interfaces/commandeServie';
import { Commande } from '../interfaces/commande';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  private BASE_URL="http://localhost:8080/commandes/2/statut/servie";
  private BASE_URL1="http://localhost:8080/commandes";
  private BASE_URL2="http://localhost:8080/commandes/1/statut/passee";





  constructor(private client : HttpClient ) { }
  getCommandePassees(){
    return this.client.get<Commande[]>(this.BASE_URL2);


  }

  getCommande( ){
      return this.client.get<CommandeServie[]>(this.BASE_URL);
    }
    getCommandeById(idCommande?:number) {
      return this.client.get<CommandeServie>(`${this.BASE_URL1}/${idCommande}`);
    }

    putCommande(idCommande : Number) {
      const headers = new HttpHeaders({'Content-Type' : 'application/json'});
      return this.client.put<Commande>(`${this.BASE_URL1}/${idCommande}/payer`, idCommande, {headers});
    }


  
  }

