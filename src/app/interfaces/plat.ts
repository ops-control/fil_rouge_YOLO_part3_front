import { Categorie } from "./categorie";

export interface Plat {
    idPlat: number;
    nom: string;
    prix: number;
    description: string;
    categorie: Categorie;
    quantite: number;
}
