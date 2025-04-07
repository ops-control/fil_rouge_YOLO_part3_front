import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ListeTablesOccupeesComponent } from './components/pages/serviceEnSalle/liste-tables-occupees/liste-tables-occupees.component';

export const routes: Routes = [
    { path: "", component: AccueilComponent},
    { path: "tables/occupees", component: ListeTablesOccupeesComponent},
];
