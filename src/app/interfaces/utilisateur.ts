import { Role } from "./role";

export interface Utilisateur {
    idUtilisateur ?: number;
    nom : string;
    prenom : string;
    telephone ?: string;
    idRestaurant ?: number;
    nomRestaurant ?: string;
    email ?: string;
    role ?: Role;
}