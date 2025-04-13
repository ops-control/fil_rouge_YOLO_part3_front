import { Injectable } from '@angular/core';
import { UserLogged } from '../interfaces/user-logged';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {
  public utilisateur?: UserLogged;

  constructor() {

  }
}
