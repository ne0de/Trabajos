import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class Bebedero extends Dispositivo{
    animalesAtendidos: number = 0;

    constructor(){
        super(0);
        this.animalesAtendidos = 0;
    }

    puedeAtender(animal: Animal): boolean{
        return animal.sed;
    }

    puedeRecargar(): boolean{
        return this.animalesAtendidos >= 20;
    }

    ofrecerServicio(animal: Animal): void{
        if(this.puedeAtender(animal)){
            animal.beber();
            this.animalesAtendidos++;
        }
        if(this.puedeRecargar())
            this.recargar();
    }

    recargar(): void{
        this.animalesAtendidos = 0;
    }
}

