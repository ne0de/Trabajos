import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class Vacunatorio extends Dispositivo{
    capacidadMaxima: number = 0;

    constructor(vacunas){
        super(vacunas);
    }

    puedeAtender(animal: Animal): boolean{
        return animal.convieneVacunar;
    }

    puedeRecargar(): boolean{
        return this.cantidadElemento == 0;
    }

    ofrecerServicio(animal: Animal): void{
        if(this.puedeAtender(animal))
            animal.vacunar();
        if(this.puedeRecargar())
            this.recargar();
    }

    recargar(): void{
        super.recargar(50);
    }
}

