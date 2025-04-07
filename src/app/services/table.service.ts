import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableNonOccupees } from '../interfaces/table-non-occupees';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private client : HttpClient) { }

  get_tables_non_occupees() {
    return this.client.get<TableNonOccupees[]>("http://localhost:8080/tables/1")
  }

}
