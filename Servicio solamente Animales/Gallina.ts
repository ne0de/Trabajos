import { Animal } from "./Animal";

export class Gallina extends Animal{

    vecesComiendo: number = 0;

    constructor(){
        super(4);
        this.hambre = true;
        this.sed = false;
    }

    comer(): void{
        this.vecesComiendo++;
    }

    cuantoComi(): number{
        return this.vecesComiendo;
    }

    vacunar(): void{
        return console.error("No conviene vacunarla");
    }
}
