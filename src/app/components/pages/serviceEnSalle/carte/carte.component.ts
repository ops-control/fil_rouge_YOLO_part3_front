import { Component, OnInit } from '@angular/core';
import { CarteService } from '../../../../services/carte.service';
import { Carte } from '../../../../interfaces/carte';
import { Plat } from '../../../../interfaces/plat';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { TableOccupee } from '../../../../interfaces/table-occupee';
import { NouvelleCommande } from '../../../../interfaces/nouvelle-commande';
import { FormsModule } from '@angular/forms';
import { CommandeCreationService } from '../../../../services/commande-creation.service';

@Component({
  selector: 'app-carte',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  carte: Carte | undefined;
  idTableRestaurant?: number;
  table?: TableOccupee;
  commande?: NouvelleCommande;
  plats?: Plat[] = [];
  
  categories = [
    { title: 'Entrées', libelle: 'Entrées' },
    { title: 'Pizzas base tomate', libelle: 'Pizzas base tomate' },
    { title: 'Pizzas base crème', libelle: 'Pizzas base crème' },
    { title: 'Desserts', libelle: 'Desserts' },
    { title: 'Boissons', libelle: 'Boissons' }
  ];

  constructor(private carteService: CarteService, private route: ActivatedRoute, private router: Router, private commandeCreaService: CommandeCreationService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.table = navigation.extras.state['table'] as TableOccupee;
      this.commande = navigation.extras.state['commande'] as NouvelleCommande;
    }
  }

  ngOnInit(): void {
    this.carteService.getCarte().subscribe({
      next: (response) => {
        this.carte = response;
        if (this.carte?.plats) {
          this.plats = [...this.carte.plats];
        }
        console.log(this.plats)
      }
    });
  }

  getPlatsByCategorie(libelle: string): Plat[] {
    if (!this.carte || !this.carte.plats) {
      return [];
    }
    return this.carte.plats.filter(plat => plat.categorie.libelle === libelle);
  }

  ajouterPlat(plat: Plat): void {
    if(plat.quantite){
      plat.quantite += 1;
    } else {
      plat.quantite = 1;
    }
    if(this.commande && this.commande.idCommande){
      this.commandeCreaService.ajouterPlat(this.commande?.idCommande, plat.idPlat).subscribe(response => {
        plat.quantite = response;
      });
    }
  }

  retirerPlat(plat: Plat): void {
    if(plat.quantite && plat.quantite > 1){
      plat.quantite -= 1;
    } else {
      plat.quantite = 0;
    }
    if(this.commande && this.commande.idCommande){
      this.commandeCreaService.retirerPlat(this.commande?.idCommande, plat.idPlat).subscribe(response => {
        plat.quantite = response;
      });
    }
  }

  passerCommande() {
    this.commandeCreaService.updateCommandeToPassee(this.table?.idCommande).subscribe(() =>{
      this.router.navigate(['/service']);
    })
  }




}