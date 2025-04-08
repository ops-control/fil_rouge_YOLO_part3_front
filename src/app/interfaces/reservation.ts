import { TableNonOccupees } from "./table-non-occupees";
import { Utilisateur } from "./utilisateur";

export interface Reservation {
    idReservation: number;
    nbPersonne: number;
    statut: string;
    horaireReservation: Date;
    utilisateur: Utilisateur;
    idRestaurant: number;
}