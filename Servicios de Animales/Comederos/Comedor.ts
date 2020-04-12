import { Animal } from "../Animales/Animal";

export class Comedor{
    animales: Array<object>;
    capacidad: number = 0;
    racionComida: number = 0;
    cantidadComida: number = 0;

    constructor(capacidad: number, racionComida: number){
        this.capacidad = capacidad
        this.racionComida = racionComida;
    }
 
    agregarAnimal(animal: object): void{}

    darDeComer(animal: Animal): void{}

    darDeBeber(animal: Animal): void{}

    cargar(): void{}
}