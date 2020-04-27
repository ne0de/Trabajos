import { Animal } from "../Animales/Animal";

export class Dispositivo{
    cantidadElemento: number = 0;

    constructor(cantidadElemento){
        this.cantidadElemento = cantidadElemento;
    }

    puedeAtender(animal: Animal): void {}
    
    puedeRecargar(): boolean{ return false }
    
    ofrecerServicio(animal: Animal): void{}

    recargar(cantidad): void{ 
        this.cantidadElemento += cantidad;
    }
}