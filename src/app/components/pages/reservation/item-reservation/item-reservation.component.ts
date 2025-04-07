import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Reservation } from '../../../../interfaces/reservation';

@Component({
  selector: 'app-item-reservation',
  imports: [CommonModule],
  templateUrl: './item-reservation.component.html',
  styleUrl: './item-reservation.component.css'
})
export class ItemReservationComponent {
  @Input()
  reservation ?: Reservation;
}

