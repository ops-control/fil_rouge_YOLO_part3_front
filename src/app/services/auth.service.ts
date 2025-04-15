import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  connexion(login: string, password: string) {
    return this.http.post<any>('http://localhost:8080/auth', { login, password });
  }

  logout() {
    localStorage.removeItem('Jwt');
    localStorage.clear;
    sessionStorage.removeItem('utilisateur');
    sessionStorage.removeItem('restaurant');
    this.router.navigate(['/accueil']);
  }


}
