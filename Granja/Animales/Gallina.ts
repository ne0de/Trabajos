import { Animal } from "./Animal";

export class Gallina extends Animal{

    vecesComiendo: number = 0;

    constructor(){
        super(4000, true);
        this.sed = false;
    }

    comer(gramos: number = 0): void{
        this.vecesComiendo++;
    }

    beber(): void{}

    vacunar(){
        console.error("No conviene vacunarlo");
    }
    
    cuantasVecesComi(){
        return this.vecesComiendo;
    }
}