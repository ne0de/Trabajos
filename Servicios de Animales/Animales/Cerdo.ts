import {Animal} from "./Animal";

class Cerdo extends Animal{
    maxGramosConsumidos: number = 0;
    vecesComiendo: number = 0;

    constructor(peso: number, vacuna: boolean){ 
        super(peso, vacuna); 
        this.convieneVacunar = true;
    }

    comer(gramos: number = 0): void{
        if(gramos > 200)
            this.peso += this.peso += gramos - 200;

        if(gramos > 1000)
            this.hambre = 0;

        if(gramos > this.maxGramosConsumidos)
            this.maxGramosConsumidos = gramos;

        this.vecesComiendo > 3? this.sed = true : this.vecesComiendo++;
    }

    beber(): void{
        this.sed = false;
        this.hambre += 3;
        this.vecesComiendo = 0;
    }
}