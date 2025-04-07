import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ReservationComponent } from './components/pages/reservation/liste-reservations/listeReservations.component';
import { CreerReservationComponent } from './components/pages/reservation/creer-reservation/creer-reservation.component';

export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "reservations", component: ReservationComponent},
    { path: "reservations/creer-resa", component: CreerReservationComponent},
];
