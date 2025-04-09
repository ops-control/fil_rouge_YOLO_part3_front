import { Component } from '@angular/core';
import { Plat } from '../../../../../interfaces/plat';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plat',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './plat.component.html',
  styleUrl: './plat.component.css'
})
export class PlatComponent {
  plat?: Plat;


  
  ajouterPlat(plat: Plat): void {

  }

  retirerPlat(plat: Plat): void {

  }

  

}
