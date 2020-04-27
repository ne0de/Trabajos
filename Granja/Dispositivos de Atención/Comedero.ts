import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class Comedero extends Dispositivo{
    peso: number = 0;
    raciones: number = 0;

    constructor(cantidadAlimento, peso, raciones){
        super(cantidadAlimento);
        this.peso = peso;
        this.raciones = raciones;
    }

    puedeAtender(animal: Animal): boolean{
        return (this.peso < animal.peso && animal.hambre);
    }

    puedeRecargar(): boolean{
        return this.cantidadElemento < 10000;
    }
    
    ofrecerServicio(animal: Animal): void{
        if(this.puedeAtender(animal))
            animal.comer(this.raciones);
    }

    recargar(): void{
        if(this.puedeRecargar())
            super.recargar(30000)
    }
}

