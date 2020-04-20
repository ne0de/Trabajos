import { Animal } from "./Animal";

export class Cerdo extends Animal{
    vecesComiendo: number = 0;
    maxGramosConsumidos: number = 0;

    constructor(peso: number){
        super(peso);
    }

    comer(gramos: number = 0){
        if(gramos > 200)
            this.aumentarPeso(gramos - 200)

        this.hambre = gramos > 1000;

        if(gramos > this.maxGramosConsumidos)
            this.maxGramosConsumidos = gramos;

        this.maxGramosConsumidos = this.maxGramosConsumidos < gramos? gramos : this.maxGramosConsumidos; 

        this.vecesComiendo++;
        this.sed = this.vecesComiendo > 3;
    }

    beber(): void{
        this.sed = false;
        this.hambre = true;
    }
}