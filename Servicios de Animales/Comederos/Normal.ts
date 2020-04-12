import {Comedor} from "./Comedor";
import {Animal} from "../Animales/Animal";

class Normal extends Comedor{

    maximoSoporte: number = 200;

    constructor(capacidad: number, racionesPorAnimal: number){
        super(capacidad, racionesPorAnimal);
    }


    recargar(): void{
        this.cantidadComida < 10000? this.cantidadComida += 3000 : console.error("No necesito recargar"); 
    }

    agregarAnimal(animal: Animal): void{
        animal.hambre > 0 && animal.peso < this.maximoSoporte? 
        this.animales.push(animal) : console.error("No puede ingresar");
    }

    darDeComer(animal: Animal): void{
        if(this.animales.includes(animal))
            if(this.cantidadComida - this.racionComida >= 0){
                animal.comer(this.racionComida);
                this.cantidadComida -= this.racionComida;
            }else
                console.error("No se puede dar más raciones");
        else
            console.error("El animal no se encuentra en el comedero")
    }


}