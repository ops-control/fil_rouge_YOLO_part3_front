export interface Categorie {
    includes(categories: string[]): unknown;
    push(categories: string[]): unknown;
    idCategorie: number;
    libelle: string;
}
