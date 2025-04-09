import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router : Router) { }

  estConnecte(): boolean {
    return sessionStorage.getItem('utilisateur') != null;
  }

  get_prenom() {
    return sessionStorage.getItem("utilisateur");
  }

  // deconnecter(): void {
  //   sessionStorage.removeItem('utilisateur');
  //   this.router.navigate(['/accueil']);
  // }

}
