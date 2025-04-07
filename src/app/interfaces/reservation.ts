export interface Reservation {
    idReservation: number;
    nbPersonne: number;
    statut: string;
    horaireReservation: Date;
    utilisateur: {
        idUtilisateur: number,
        nom: string,
        prenom: string,
        telephone: string,
        email: string,
        idRestaurant: number,
        nomRestaurant: string
    };
    idTableRestaurant: number;
}