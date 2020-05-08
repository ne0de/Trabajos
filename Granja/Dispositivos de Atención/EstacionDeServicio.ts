import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class EstacionDeServicio{

    primerDis: Dispositivo;
    segundoDis: Dispositivo;
    tercerDis: Dispositivo;

    constructor(primerDis, segundoDis, tercerDis){
        this.primerDis = primerDis;
        this.segundoDis = segundoDis;
        this.tercerDis = tercerDis;
    }

    atender(animal): void{
        this.primerDis.ofrecerServicio(animal);
        this.segundoDis.ofrecerServicio(animal);
        this.tercerDis.ofrecerServicio(animal);
    }
}