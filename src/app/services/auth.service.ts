import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  connexion(login: string, password: string) {
    return this.http.post<any>('http://localhost:8080/auth', { login, password });
  }
}
