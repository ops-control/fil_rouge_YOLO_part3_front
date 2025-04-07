import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableNonOccupees } from '../interfaces/table-non-occupees';

@Injectable({
  providedIn: 'root'
})
export class TableNonOccuppesService {

  constructor(private client : HttpClient) { }

  get_tables_non_occupees(idRestaurant: number) {
    return this.client.get<TableNonOccupees[]>(`http://localhost:8080/tables/${idRestaurant}`);
  }

}
