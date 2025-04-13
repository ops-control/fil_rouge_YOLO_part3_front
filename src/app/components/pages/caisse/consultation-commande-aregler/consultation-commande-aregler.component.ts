import { Component } from '@angular/core';
import { CaisseService } from '../../../../services/caisse.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Commande } from '../../../../interfaces/commande';
import * as bootstrap from 'bootstrap';
import { CommonModule } from '@angular/common';
import { LigneCommande } from '../../../../interfaces/ligneCommande';

@Component({
  selector: 'app-consultation-commande-aregler',
  imports: [CommonModule,RouterModule,],
  templateUrl: './consultation-commande-aregler.component.html',
  styleUrl: './consultation-commande-aregler.component.css'
})
export class ConsultationCommandeAReglerComponent {

  idCommande?: number;
  commande?:Commande;
  private toastEl: any;
  categories: string[]= [];

  constructor(
    private route: ActivatedRoute,
    private caisseService: CaisseService
  ){
  }
  ngOnInit(): void {
    this.idCommande = Number(this.route.snapshot.paramMap.get('idCommande'));
    
    if (this.idCommande) {
      this.caisseService.getCommandeById(this.idCommande).subscribe({
        next: (response) => {
          this.commande = response as Commande;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de la commande :', err);
        }
      });
    }
  }


  getCategorie(): string[] {
    if (!this.commande || !this.commande.lignes) {
      console.log
      return [];
    }
    for (const ligne of this.commande?.lignes ?? []) {
      if (!this.categories.includes(ligne.plat.categorie.libelle)) {
        this.categories.push(ligne.plat.categorie.libelle);
      }    
    }
    return this.categories;
  }

  getPlatsByCategorie(libelle: string): LigneCommande[] {
      if (!this.commande || !this.commande.lignes) {
        return [];
      }
  
       return this.commande.lignes.filter(ligne => ligne.plat.categorie.libelle === libelle);
    }

  getTotalCommande(){
      let somme: number = 0;
      for (const ligne of this.commande?.lignes ?? []) {
        somme=ligne.quantite*ligne.plat.prix+somme;
      }
      return somme;
    }

   ngAfterViewInit(): void {
     const toastElement = document.getElementById('liveToast');
     if (toastElement) {
       this.toastEl = new bootstrap.Toast(toastElement);
     }
   }

  putCommande(idCommande: number){
    if (!idCommande || idCommande <= 0) {
      console.warn('ID de commande invalide :', idCommande);
      return; }
      this.caisseService.putCommande(idCommande).subscribe(response => {
        console.log('Commande mise à jour avec succès :', response);
        this.showToast();
      });
  }
  showToast(): void {
    if (this.toastEl) {
      this.toastEl.show();
    }
  }

}
