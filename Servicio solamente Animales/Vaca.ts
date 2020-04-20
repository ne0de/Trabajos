import { Animal } from "./Animal";

export class Vaca extends Animal{

    constructor(peso: number){
        super(peso);
    }

    comer(gramos: number = 0){
        this.aumentarPeso(gramos/3)
        this.sed = true;
        this.tendreHambre();
    }

    beber(): void{
        super.beber();
        this.bajarPeso(500);
    }

    caminar(): void{
        this.bajarPeso(3000);
    }

    tendreHambre(): void{
        this.hambre = this.peso < 200000;
    }
}