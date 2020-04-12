import {Comedor} from "./Comedor";
import {Animal} from "../Animales/Animal";

class Normal extends Comedor{

    constructor(capacidad: number, racionesPorAnimal: number){
        super(capacidad, racionesPorAnimal);
    }

    agregarAnimal(animal: Animal): void{
        !this.animales.includes(animal)? this.animales.push(animal) : console.error("Ya está en el comedero");
    }

    darDeComer(animal: Animal): void{
        if(this.animales.includes(animal))
            this.cantidadAlimento - this.cantidadDada >= 0? 
            animal.comer(animal.peso/100) : console.error("No se puede dar más raciones");
        else
            console.error("El animal no se encuentra en el comedero")
    }

    darDeBeber(animal: Animal): void{
        animal.sed? 
    }
    recargar(): void{
        this.cantidadComida < 15000? this.cantidadComida = this.capacidad : console.error("No necesito recargar"); 
    }
}