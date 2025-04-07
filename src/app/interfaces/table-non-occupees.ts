export interface TableNonOccupees {
    idTableRestaurant : number;
    nbPlaces : number;
    idRestaurant : number;
    reservations : Reservation;
}

export interface Reservation {
    idReservation : number;
    nbPersonne : number;
    statut : string;
    horaireReservation : Date;
    utilisateur : Utilisateur;
}

export interface Utilisateur {
    idUtilisateur : number;
    nom : string;
    prenom : string;
    telephone : string;
    email : string;
    role : Role;
}

export interface Role {
    idRole : number;
    libelle : string;
}