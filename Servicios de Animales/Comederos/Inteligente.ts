import {Comedor} from "./Comedor";
import {Animal} from "../Animales/Animal";

class Inteligente extends Comedor{

    vacunas: number = 0;
    usoBebedero: number = 0;

    constructor(capacidad: number, racionComida: number, vacunas: number){
        super(capacidad, racionComida);
        this.vacunas = vacunas;
    }

    recargarVacunas(): void{
        if(this.vacunas == 0)
            this.vacunas += 50;
    }

    recargarComida(): void{
        if(this.cantidadComida < 15000)
            this.cantidadComida = this.capacidad
    }

    agregarAnimal(animal: Animal): void{
        if(!this.animales.includes(animal))
            this.animales.push(animal);
    }

    darDeComer(animal: Animal): void{
        if(this.animales.includes(animal) && (this.cantidadComida - this.racionComida <= 0))
            animal.comer(animal.peso/100);
    }

    vacunar(animal: Animal): void{
        if(animal.convieneVacunar){
            animal.vacunar();
            this.vacunas--;
        }
    }

    recargarBebedero(): void{ this.usoBebedero = 0; }

    darDeBeber(animal: Animal): void{
        if(this.usoBebedero < 20 && animal.sed){
            animal.beber();
            this.usoBebedero++;
        }
    }

}