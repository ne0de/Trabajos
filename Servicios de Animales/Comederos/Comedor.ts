export class Comedor{
    animales: Array<object>;
    capacidad: number = 0;
    cantidadDada: number = 0;
    cantidadAlimento: number = 0;

    constructor(capacidad: number, racionesPorAnimal: number){
        this.capacidad = capacidad
        this.cantidadDada = racionesPorAnimal;
    }
 
    agregarAnimal(animal: object): void{}

    alimentarAnimales(): void{}

    cargar(): void{
        //this.raciones < 10? this.raciones += 30 : console.error("No necesito recargar"); 
    }
}