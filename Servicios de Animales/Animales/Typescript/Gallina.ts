import {Animal} from "./Animal";

class Gallina extends Animal{
    
    vecesComiendo: number = 0;

    constructor(vacuna: boolean){ 
        super(4, vacuna);
        this.sed = false;
        this.hambre = 10;
        this.convieneVacunar = false;
    }

    cuantoComi(): number{
        return this.vecesComiendo;
    }

    comer(gramos: number = 0): void{
        this.vecesComiendo++;
    }

}
