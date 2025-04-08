import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';
import { ModalReceptionClientTableLibreComponent } from '../modal-reception-client-table-libre/modal-reception-client-table-libre.component';
import { ModalReceptionClientTableReserveeComponent } from '../modal-reception-client-table-reservee/modal-reception-client-table-reservee.component';
import { Reservation } from '../../../../interfaces/reservation';

@Component({
  selector: 'app-reception-clientele',
  imports: [CommonModule, FormsModule, RouterModule, ModalReceptionClientTableLibreComponent, ModalReceptionClientTableReserveeComponent],
  templateUrl: './reception-clientele.component.html',
  styleUrl: './reception-clientele.component.css'
})
export class ReceptionClienteleComponent {
  tables_non_occupees ?: TableNonOccupees[];
  tableSelectionnee : TableNonOccupees | null = null;
  
  constructor(private service : TableNonOccuppesService, private route : ActivatedRoute) {
    const idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    service.get_tables_non_occupees(idRestaurant).subscribe(resultat => {
      this.tables_non_occupees = resultat;
    });
  }

  selectionnerTable(table : TableNonOccupees) {
    this.tableSelectionnee = table;
  }

  fermerModal() {
    this.tableSelectionnee = null;
  }

  creationReservation(reservation : Reservation) {
    this.service.creation_reservation(reservation).subscribe();
  }

  modificationStatutReservation(donnees: { id: number, statut: string }) {
    this.service.modification_statut_reservation(donnees.id, donnees.statut).subscribe(() => {
    });
  }
}
