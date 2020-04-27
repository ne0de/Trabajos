export class Animal{
    sed: boolean = false;
    peso: number = 0;
    hambre: boolean = false;
    vacunado: boolean = false;
    convieneVacunar: boolean = false;

    constructor(peso: number, convieneVacunar: boolean){
        this.peso = peso;
        this.convieneVacunar = convieneVacunar;
    }

    comer(gramos: number): void{
        this.aumentarPeso(gramos);
    }

    beber(): void{
        this.sed = false;
    }

    aumentarPeso(gramos: number): void{
        this.peso += gramos;
    }

    bajarPeso(gramos: number): void{
        this.peso -= gramos;
    }

    vacunar(): void{
        if(!this.vacunado)
            this.vacunado = true;
    }
}