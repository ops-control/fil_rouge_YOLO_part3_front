import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-connexion',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

}
