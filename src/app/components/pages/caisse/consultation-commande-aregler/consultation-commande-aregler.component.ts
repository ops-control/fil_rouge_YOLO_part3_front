import { Component } from '@angular/core';
import { CaisseService } from '../../../../services/caisse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../../../../interfaces/commande';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-consultation-commande-aregler',
  imports: [],
  templateUrl: './consultation-commande-aregler.component.html',
  styleUrl: './consultation-commande-aregler.component.css'
})
export class ConsultationCommandeAReglerComponent {

  idCommande?: number;
  commande?:Commande;
  private toastEl: any;

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
