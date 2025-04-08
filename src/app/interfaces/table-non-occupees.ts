import { Reservation } from "./reservation";

export interface TableNonOccupees {
    idTableRestaurant : number;
    nbPlaces : number;
    numeroTable : number;
    idRestaurant : number;
    reservations ?: Reservation[];
}