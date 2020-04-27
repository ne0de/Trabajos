import { Animal } from "./Animal";

export class Vaca extends Animal{
    constructor(peso: number){
        super(peso, true);
    }

    comer(gramos: number): void{
        super.comer(gramos/3);
        this.sed = true;
        this.hambre = this.peso < 200;
    }

    beber(): void{
        super.beber();
        this.bajarPeso(500);
    }

    caminar(): void{
        this.bajarPeso(3000);
    }
}