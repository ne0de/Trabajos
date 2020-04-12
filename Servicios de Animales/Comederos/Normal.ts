import {Comedor} from "./Comedor";
import {Animal} from "../Animales/Animal";

class Normal extends Comedor{

    maximoSoporte: number = 200;

    constructor(capacidad: number, racionesPorAnimal: number){
        super(capacidad, racionesPorAnimal);
    }

    agregarAnimal(animal: Animal): void{
        animal.hambre > 0 && animal.peso < this.maximoSoporte? 
        this.animales.push(animal) : console.error("No puede ingresar");

    }

    alimentar(animal: Animal): void{

        if(this.animales.includes(animal))
            this.cantidadAlimento - this.cantidadDada >= 0? animal.comer(this.cantidadDada) : console.error("No se puede dar más raciones");
        else
            console.error("El animal no se encuentra en el comedero")
    }

    recargar(): void{
        this.cantidadAlimento < 10? this.cantidadAlimento += 3000 : console.error("No necesito recargar"); 
    }
}