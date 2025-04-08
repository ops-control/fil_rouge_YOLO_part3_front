import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carte } from '../interfaces/carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private BASE_URL = "http://localhost:8080/carte";
  private idresto = 1;

  constructor(private client: HttpClient) { }

  getCarte() {
    return this.client.get<Carte>(this.BASE_URL + "/" + this.idresto);
  }
}
