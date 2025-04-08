import { LigneCommande } from "./ligneCommande";

export interface Commande {
    idCommande:number;
    nomClient:string;
    nbPersonnes:number;
    numeroTable:number;
    lignes:LigneCommande[];

}