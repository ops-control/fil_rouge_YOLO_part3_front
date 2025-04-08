import { Component } from '@angular/core';
import { CommandeServie } from '../../../../interfaces/commandeServie';
import { CommonModule } from '@angular/common';
import { CaisseService } from '../../../../services/caisse.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-commandes-servies',
  imports: [CommonModule,RouterModule],
  templateUrl: './liste-commandes-servies.component.html',
  styleUrl: './liste-commandes-servies.component.css'
})
export class ListeCommandesServiesComponent {
  commandes : CommandeServie[]=[];
  constructor(private service: CaisseService,  private router: Router,
  ){
    setInterval(() => {
      service.getCommande().subscribe(response => {
        this.commandes = response;
      });
    }, 800);
  }

 
  

}
