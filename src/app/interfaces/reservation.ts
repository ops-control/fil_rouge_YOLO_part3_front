import { Utilisateur } from "./utilisateur";

export interface Reservation {
    idReservation : number;
    nbPersonne : number;
    statut : string;
    horaireReservation : Date;
    utilisateur ?: Utilisateur;
}