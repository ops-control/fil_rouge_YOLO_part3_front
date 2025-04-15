import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';

import { ReservationComponent } from './components/pages/reservation/liste-reservations/listeReservations.component';
import { CreerReservationComponent } from './components/pages/reservation/creer-reservation/creer-reservation.component';
import { ListeTablesOccupeesComponent } from './components/pages/serviceEnSalle/liste-tables-occupees/liste-tables-occupees.component';
import { CarteComponent } from './components/pages/serviceEnSalle/carte/carte.component';
import { ReceptionClienteleComponent } from './components/pages/reception/reception-clientele/reception-clientele.component';
import { ListeCommandesServiesComponent } from './components/pages/caisse/liste-commandes-servies/liste-commandes-servies.component';
import { ConsultationCommandeAReglerComponent } from './components/pages/caisse/consultation-commande-aregler/consultation-commande-aregler.component';
import { ListeCommandesPasseesComponent } from './components/pages/cuisine/liste-commandes-passees/liste-commandes-passees.component';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { GererReservationComponent } from './components/pages/reservation/gerer-reservation/gerer-reservation.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "accueil", component: AccueilComponent},
    { path: "connexion", component: ConnexionComponent},
    { path: "service", component: ListeTablesOccupeesComponent, canActivate: [authGuard]},
    { path: "reservations/:id", component: ReservationComponent, canActivate: [authGuard]},
    { path: "creer-resa/:id", component: CreerReservationComponent, canActivate: [authGuard]},
    { path: "gerer-resa/:id", component: GererReservationComponent, canActivate: [authGuard]},
    { path: "carte", component: CarteComponent, canActivate: [authGuard]},
    { path: "reception-clientele/:id", component: ReceptionClienteleComponent, canActivate: [authGuard]},
    { path: "commandes", component: ListeCommandesServiesComponent, canActivate: [authGuard]},
    { path: "payer/:idCommande", component: ConsultationCommandeAReglerComponent, canActivate: [authGuard]},
    { path: "caisse", component: ListeCommandesServiesComponent, canActivate: [authGuard]},
    { path: "payer/:idCommande", component: ConsultationCommandeAReglerComponent, canActivate: [authGuard]},
    { path: "cuisine", component: ListeCommandesPasseesComponent, canActivate: [authGuard]},
    { path: "**", redirectTo : "/accueil"}
];
