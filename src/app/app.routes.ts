import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';

import { ReservationComponent } from './components/pages/reservation/liste-reservations/listeReservations.component';
import { CreerReservationComponent } from './components/pages/reservation/creer-reservation/creer-reservation.component';
import { ListeTablesOccupeesComponent } from './components/pages/serviceEnSalle/liste-tables-occupees/liste-tables-occupees.component';
import { CarteComponent } from './components/pages/serviceEnSalle/carte/carte.component';
import { ReceptionClienteleComponent } from './components/pages/reception/reception-clientele/reception-clientele.component';
import { ListeCommandesServiesComponent } from './components/pages/caisse/liste-commandes-servies/liste-commandes-servies.component';
import { ConsultationCommandeAReglerComponent } from './components/pages/caisse/consultation-commande-aregler/consultation-commande-aregler.component';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';

export const routes: Routes = [
    { path: "accueil", component: AccueilComponent},
    { path: "service", component: ListeTablesOccupeesComponent},
    { path: "reservations", component: ReservationComponent},
    { path: "reservations/creer-resa", component: CreerReservationComponent},
    { path: "carte", component: CarteComponent},
    { path: "reception-clientele/:id", component: ReceptionClienteleComponent},
    { path: "commandes", component: ListeCommandesServiesComponent},
    { path: "payer/:idCommande", component: ConsultationCommandeAReglerComponent},
    { path: "connexion", component: ConnexionComponent},
    { path: "**", redirectTo : "/accueil"}
];
