import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { ListeTablesNonOccupeesComponent } from '../liste-tables-non-occupees/liste-tables-non-occupees.component';

@Component({
  selector: 'app-creer-reservation',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ListeTablesNonOccupeesComponent],
  templateUrl: './creer-reservation.component.html',
  styleUrl: './creer-reservation.component.css'
})
export class CreerReservationComponent {
  formNewReservation: FormGroup
   tablesNonOccupees : TableNonOccupees[] = [];

  constructor(
    private reservationService: ReservationService,
    private tableNonOccupeeService: TableNonOccuppesService,
    private router: Router
  ) {
    this.formNewReservation = new FormGroup({
      nbPersonnes: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      heure: new FormControl("", Validators.required)
    });
    this.tableNonOccupeeService.get_tables_non_occupees(1).subscribe(response => {
      this.tablesNonOccupees = response;
    });
  }

  saveReservation() {
    if (this.formNewReservation.valid) {
      this.reservationService.addReservation(this.formNewReservation.value).subscribe(response => {
        this.router.navigate(["/reservations"]);
      });
      console.log(this.formNewReservation);
    }
  }

  display_error(field : string, error : string) {
    return this.formNewReservation?.get(field)?.dirty
        && this.formNewReservation?.get(field)?.errors?.[error];
  }

}