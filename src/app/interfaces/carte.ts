import { Plat } from "./plat";

export interface Carte {
    idCarte: number;
    nom: string;
    description: string;
    plats: Plat[];
}
