import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserLogged } from '../../../interfaces/user-logged';
import { UserLoggedService } from '../../../services/user-logged.service';

@Component({
  selector: 'app-connexion',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  form : FormGroup;
  errorMessage: string | null = null;
  userLogged?: UserLogged;

  constructor(private fb : FormBuilder,
              private router : Router,
              private authService : AuthService,
              private userLoggedService: UserLoggedService) {

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
          sessionStorage.setItem('utilisateur', response.user.prenom);
          sessionStorage.setItem('restaurant', JSON.stringify(response.user.idRestaurant));
          this.router.navigate(['/accueil']);
        },
        error: () => {
          this.errorMessage = "Identifiant ou mot de passe incorrect.";
        }
      });
    }
  }
}
