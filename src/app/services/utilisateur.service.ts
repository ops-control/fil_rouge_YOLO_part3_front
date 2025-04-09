import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private BASE_URL = "http://localhost:8080/utilisateurs";

  constructor(private client: HttpClient) { }

  getUtilisateurs() {
    return this.client.get<Utilisateur[]>(this.BASE_URL);
  }

  addUtilisateur(utilisateur : Utilisateur) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const utilisateurData = {
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      login: utilisateur.login,
      password: utilisateur.password,
      idRestaurant: utilisateur.idRestaurant
    };
    return this.client.post<Utilisateur>(this.BASE_URL, utilisateurData, {headers});
  }
}
