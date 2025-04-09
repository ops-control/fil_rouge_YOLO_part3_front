import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../../../services/carte.service';
import { Carte } from '../../../../interfaces/carte';
import { Plat } from '../../../../interfaces/plat';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TableOccupee } from '../../../../interfaces/table-occupee';

@Component({
  selector: 'app-carte',
  imports: [CommonModule, RouterModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  carte: Carte | undefined;
  idTableRestaurant?: number;
  table?: TableOccupee;
  
  categories = [
    { title: 'Entrées', libelle: 'Entrées' },
    { title: 'Pizzas base tomate', libelle: 'Pizzas base tomate' },
    { title: 'Pizzas base crème', libelle: 'Pizzas base crème' },
    { title: 'Desserts', libelle: 'Desserts' },
    { title: 'Boissons', libelle: 'Boissons' }
  ];

  constructor(private carteService: CarteService, private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.table = navigation.extras.state['table'] as TableOccupee;
    }
  }

  ngOnInit(): void {
    this.carteService.getCarte().subscribe(response => {
      this.carte = response;
    });
  }

  getPlatsByCategorie(libelle: string): Plat[] {
    if (!this.carte || !this.carte.plats) {
      return [];
    }
    return this.carte.plats.filter(plat => plat.categorie.libelle === libelle);
  }

}