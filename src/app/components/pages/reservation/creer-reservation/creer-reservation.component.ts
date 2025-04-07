import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-reservation',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './creer-reservation.component.html',
  styleUrl: './creer-reservation.component.css'
})
export class CreerReservationComponent {
  formNewReservation: FormGroup

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {
    this.formNewReservation = new FormGroup({
      nbPersonne: new FormControl("", Validators.required),
      horaireReservation: new FormControl("", Validators.required)
      
    });
  }

  saveReservation() {
    if (this.formNewReservation.valid) {
      this.reservationService.addReservation(this.formNewReservation.value).subscribe(response => {
        this.router.navigate(["/reservations"]);
      });
    }
  }

  display_error(field : string, error : string) {
    return this.formNewReservation?.get(field)?.dirty
        && this.formNewReservation?.get(field)?.errors?.[error];
  }

}