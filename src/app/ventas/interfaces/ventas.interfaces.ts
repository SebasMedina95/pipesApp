
export enum Color{
    rojo, negro, azul, verde, gris
}


export interface Heroe {
    nombre : string;
    vuela  : boolean;
    color  : Color;
}