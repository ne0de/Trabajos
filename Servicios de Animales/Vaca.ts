import {Animal} from "./Animal";

class Vaca extends Animal{

    constructor(peso: number, vacuna: boolean){
        super(peso, vacuna);
    }

    comer(gramos: number = 0): void{
        this.peso += gramos/3;
        this.sed = true;

        if(this.peso < 200)
            this.hambre += 2;
    }

    beber(): void{
        this.sed = true;
        this.peso -= 0.5;
    }

    caminar(): void{ 
        this.peso -= 3; 
    }

    vacunar(): void{ 
        this.tieneVacuna? console.error("La vaca estoy vacunado") : this.tieneVacuna = true;
    }
}

var vaquita = new Vaca(100, true);
vaquita.vacunar();