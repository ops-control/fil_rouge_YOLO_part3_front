import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../../../services/carte.service';
import { Carte } from '../../../../interfaces/carte';
import { Plat } from '../../../../interfaces/plat';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carte',
  imports: [CommonModule, RouterModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  carte: Carte | undefined;
  
  categories = [
    { title: 'Entrées', libelle: 'Entrées' },
    { title: 'Pizzas base tomate', libelle: 'Pizzas base tomate' },
    { title: 'Pizzas base crème', libelle: 'Pizzas base crème' },
    { title: 'Desserts', libelle: 'Desserts' },
    { title: 'Boissons', libelle: 'Boissons' }
  ];

  constructor(private carteService: CarteService) {}

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