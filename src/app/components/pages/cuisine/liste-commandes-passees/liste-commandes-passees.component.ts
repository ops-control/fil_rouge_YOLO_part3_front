import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CaisseService } from '../../../../services/caisse.service';
import { Commande } from '../../../../interfaces/commande';
import { LigneCommande } from '../../../../interfaces/ligneCommande';
import { ModalModificationStatutCommandeEnPreteComponent } from '../modal-modification-statut-commande-en-prete/modal-modification-statut-commande-en-prete.component';

@Component({
  selector: 'app-liste-commandes-passees',
  imports: [CommonModule,RouterModule,ModalModificationStatutCommandeEnPreteComponent],
  templateUrl: './liste-commandes-passees.component.html',
  styleUrl: './liste-commandes-passees.component.css'
})
export class ListeCommandesPasseesComponent {
    commandes : Commande[]=[];
    commandeAModifier?: number;

    @ViewChild('modaleCommandePrete') modale!: ModalModificationStatutCommandeEnPreteComponent;
    constructor(private service: CaisseService,  private router: Router,
    ){
      this.actualiserCommandes();
 
    }

    ouvrirModale(idCommande: number): void {
      this.commandeAModifier = idCommande;
      this.modale.open();
    }

    modifierCommandeConfirmee(): void {
      if (!this.commandeAModifier) return;
  
      this.service.putCommandePrete(this.commandeAModifier).subscribe(() => {
        //this.commandeAModifier = undefined;
        this.actualiserCommandes();
      });
    }

    actualiserCommandes(): void {
      this.service.getCommandePassees().subscribe(response => {
        this.commandes = response;
      });
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
