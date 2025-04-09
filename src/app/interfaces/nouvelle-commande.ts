import { LigneCommande } from "./ligneCommande";
import { Reservation } from "./reservation";

export interface NouvelleCommande {
    idCommande?: number;
    statut?: string;
    reservationDto?: Reservation;
    idTableRestaurant?: number;
    nomClient?: string;
    nbPersonnes?: number;
    numeroTable?: number;
    lignes?: LigneCommande[];
}
