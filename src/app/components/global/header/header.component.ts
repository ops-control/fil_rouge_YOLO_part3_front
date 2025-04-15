import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly tokenStorageKey = 'Jwt';
  public username: String = '';
  
  constructor(private router : Router, private authService: AuthService) {
    this.updateUsername();
  }

  ngOnInit(): void {

    this.updateUsername();

    window.addEventListener('storage', () => this.updateUsername());
  }

  private updateUsername(): void {
    let username_session = sessionStorage.getItem("utilisateur");
    if (username_session !== null) {
        this.username = username_session;
    }
    if (username_session == null) {
      this.username = "";
    }
  }

  getUsername(): string | null {
    return sessionStorage.getItem("utilisateur");
  }

  estConnecte(): boolean {
    return sessionStorage.getItem('utilisateur') != null;
  }

  logout(){
    this.authService.logout();
  }
}
