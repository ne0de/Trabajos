export class Animal{
    peso: number = 0;
    sed: boolean = false;
    hambre: boolean = false;
    vacunado: boolean = false;

    constructor(peso: number){
        this.peso = peso;
    }

    beber(): void{ 
        this.sed = false;
    }

    vacunar(): void{
        this.vacunado? console.log("Ya está vacunado") : this.vacunado = true;
    }

    comer(gramos: number = 0): void{
        this.aumentarPeso(gramos);
    }
    
    caminar(): void{}

    aumentarPeso(gramos: number = 0): void{
        this.peso += gramos;
    }
    
    bajarPeso(gramos: number = 0): void{
        this.peso -= gramos;
    }
}
