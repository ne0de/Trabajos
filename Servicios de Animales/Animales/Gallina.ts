import {Animal} from "./Animal";

class Gallina extends Animal{
    
    vecesComiendo: number = 0;

    constructor(vacuna: boolean){ 
        super(4, vacuna);
        this.sed = false;
        this.hambre = 10;
    }

    cuantoComi(): number{
        return this.vecesComiendo;
    }

    comer(): void{
        this.vecesComiendo++;
    }

}