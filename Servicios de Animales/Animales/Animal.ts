export class Animal{
    sed: boolean;
    peso: number = 0;
    hambre: number = 0;
    tieneVacuna: boolean = undefined;

    constructor(peso: number, vacunada: boolean){ 
        this.peso = peso; 
        this.tieneVacuna = vacunada;
    }

    comer(gramos: number = 0): void{}

    beber(): void{}

    caminar(): void{}
}
