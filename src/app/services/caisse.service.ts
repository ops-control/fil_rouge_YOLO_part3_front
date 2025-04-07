import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  constructor(private client : HttpClient ) { 

    get_table(){
      return this.client.get();
    }
  }
}
