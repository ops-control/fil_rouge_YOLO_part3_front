import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CaisseService } from '../../../../services/caisse.service';
import { Commande } from '../../../../interfaces/commande';
import { LigneCommande } from '../../../../interfaces/ligneCommande';

@Component({
  selector: 'app-liste-commandes-passees',
  imports: [CommonModule,RouterModule],
  templateUrl: './liste-commandes-passees.component.html',
  styleUrl: './liste-commandes-passees.component.css'
})
export class ListeCommandesPasseesComponent {
    commandes : Commande[]=[];
    constructor(private service: CaisseService,  private router: Router,
    ){
  
      service.getCommandePassees().subscribe(response => {
        this.commandes = response});
    }
    getCategorie(commande:Commande): string[] {
      let categories: string[]= []; 
      if (!commande|| !commande.lignes) {
        return [];
      }
      for (const ligne of commande?.lignes ?? []) {
        if (!categories.includes(ligne.plat.categorie.libelle)) {
          categories.push(ligne.plat.categorie.libelle);
        }    
        console.log(ligne.plat.categorie.libelle);

      }
      return categories;
    }

      getPlatsByCategorie(commande:Commande,libelle: string): LigneCommande[] {
          if (!commande || !commande.lignes) {
            return [];
          }
      
           return commande.lignes.filter(ligne => ligne.plat.categorie.libelle === libelle);
        }
}
