import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ListeCommandesServiesComponent } from './components/pages/caisse/liste-commandes-servies/liste-commandes-servies.component';
import { ConsultationCommandeAReglerComponent } from './components/pages/caisse/consultation-commande-aregler/consultation-commande-aregler.component';

export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "commandes", component: ListeCommandesServiesComponent},
    { path: "payer/:idCommande", component: ConsultationCommandeAReglerComponent },];
