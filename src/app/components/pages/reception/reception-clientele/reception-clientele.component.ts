import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TableNonOccupees } from '../../../../interfaces/table-non-occupees';
import { TableNonOccuppesService } from '../../../../services/tableNonOccupees.service';

@Component({
  selector: 'app-reception-clientele',
  imports: [CommonModule, RouterModule],
  templateUrl: './reception-clientele.component.html',
  styleUrl: './reception-clientele.component.css'
})
export class ReceptionClienteleComponent {
  tables_non_occupees ?: TableNonOccupees[];

  constructor(private service : TableNonOccuppesService, private route : ActivatedRoute) {
    const idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    service.get_tables_non_occupees(idRestaurant).subscribe(resultat => {
      this.tables_non_occupees = resultat ;
    });
  }
}
