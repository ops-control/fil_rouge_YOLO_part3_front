import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Utilisateur } from '../../../interfaces/utilisateur';

@Component({
  selector: 'app-connexion',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  form : FormGroup;
  errorMessage: string | null = null;
  utilisateur : Utilisateur = {'prenom': "Maud", 'nom' : "Gauthier" };

  constructor(private fb : FormBuilder,
              private router : Router,
              private authService : AuthService) {

              this.form = this.fb.group({
                  login: ['',Validators.required],
                  password: ['',Validators.required]
              });
  }

  connecter() {
  const val = this.form.value;
  if (val.login && val.password) {
    this.authService.connexion(val.login, val.password)
      .subscribe({
        next: response => {
          localStorage.setItem('Jwt', response.token);
          sessionStorage.setItem("utilisateur", this.utilisateur.prenom);
          this.router.navigate(['/accueil']);
        },
        error: () => {
          this.errorMessage = "Identifiant ou mot de passe incorrect.";
        }
      });
    }
  }
}
