import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableOccupee } from '../interfaces/table-occupee';

@Injectable({
  providedIn: 'root'
})
export class TablesOccupeesService {
  private BASE_URL = "http://localhost:8080/tables";
  private idresto = 1;

  constructor(private client: HttpClient) { }

  getTablesOccupees() {
    return this.client.get<TableOccupee[]>(this.BASE_URL + "/" + this.idresto + "/occupees");
  }

}
