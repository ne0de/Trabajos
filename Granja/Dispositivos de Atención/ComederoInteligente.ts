import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class ComederoInteligente extends Dispositivo{
    capacidadMaxima: number = 0;

    constructor(cantidadAlimento, capacidadMaxima){
        super(cantidadAlimento);
        this.capacidadMaxima = capacidadMaxima;
    }

    puedeAtender(animal: Animal): boolean{
        return animal.hambre;
    }

    puedeRecargar(): boolean{
        return this.cantidadElemento < 15000;
    }
    
    ofrecerServicio(animal: Animal): void{
        if(this.puedeAtender(animal))
            animal.comer(animal.peso/100);
    }

    recargar(): void{
        if(this.puedeRecargar())
            super.recargar(this.capacidadMaxima);
    }
}

