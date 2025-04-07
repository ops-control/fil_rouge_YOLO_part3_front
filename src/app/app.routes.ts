import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ReceptionClienteleComponent } from './components/pages/reception/reception-clientele/reception-clientele.component';

export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "reception-clientele/:id", component: ReceptionClienteleComponent}
];
