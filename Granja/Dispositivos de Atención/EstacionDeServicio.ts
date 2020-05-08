import { Dispositivo } from "./Dispositivo";
import { Animal } from "../Animales/Animal";

export class EstacionDeServicio{

    dispositivos: Dispositivo[];

    constructor(primerDis, segundoDis, tercerDis){
        this.dispositivos.push(primerDis);
        this.dispositivos.push(segundoDis);
        this.dispositivos.push(tercerDis);
    }

    atender(animal):void {
        Object.keys(this.dispositivos).forEach(dispositivo => this.dispositivos[dispositivo].ofrecerServicio(animal) )
    }

    atenders(animal): void{
        Object.keys(this.dispositivos).forEach(dispositivo => this.dispositivos[dispositivo].ofrecerServicio(animal) )
    }
}