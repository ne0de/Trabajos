import { Animal } from "./Animal";

export class Cerdo extends Animal{

    maxGramosConsumidos: number = 0;
    vecesComiendo: number = 0;

    constructor(peso: number){
        super(peso, true);
    }

    comer(gramos: number): void{
        if(gramos > 200)
            super.comer(gramos - 200);
        this.hambre = gramos < 1000;
        this.maxGramosConsumidos = this.maxGramosConsumidos < gramos? gramos : this.maxGramosConsumidos; 
        this.vecesComiendo > 3? this.sed = true : this.vecesComiendo++;
    }

    cuantoComi(): number{
        return this.vecesComiendo;
    }
    
    vacunar(): void{
        this.vacunado = true;
    }
    
    beber(): void{
        super.beber();
        this.vecesComiendo = 0;
        this.hambre = true;
    }
}