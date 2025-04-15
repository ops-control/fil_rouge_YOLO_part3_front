import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Reservation } from '../../../../interfaces/reservation';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReservationService } from '../../../../services/reservation.service';

@Component({
  selector: 'app-item-reservation',
  imports: [CommonModule, RouterModule],
  templateUrl: './item-reservation.component.html',
  styleUrl: './item-reservation.component.css'
})
export class ItemReservationComponent {
  @Input()
  reservation ?: Reservation;

  @Input() 
  tableNumber ?: number;
  
  reservations : Reservation[] = [];
  idReservation : number = 0;

  constructor(
    private serviceReservation: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de réservation à partir de l'URL (si nécessaire)
    this.idReservation = Number(this.route.snapshot.paramMap.get('idresa'));

    // Charger les réservations via le service
    this.serviceReservation.getReservations(this.idReservation).subscribe(response => {
      this.reservations = response;
    });
  }

  displayTableNumber(): boolean {
    return this.tableNumber !== undefined;
  }

}

