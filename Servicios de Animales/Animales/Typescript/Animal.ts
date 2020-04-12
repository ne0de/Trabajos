export class Animal{
    sed: boolean;
    peso: number = 0;
    hambre: number = 0;
    tieneVacuna: boolean = undefined;
    convieneVacunar: boolean = undefined;

    constructor(peso: number, vacunada: boolean){ 
        this.peso = peso; 
        this.tieneVacuna = vacunada;
    }

    comer(gramos: number = 0): void{}

    beber(): void{}

    caminar(): void{}

    vacunar(): void{ 
        if(!this.tieneVacuna)
            this.tieneVacuna = true;
    }
}
