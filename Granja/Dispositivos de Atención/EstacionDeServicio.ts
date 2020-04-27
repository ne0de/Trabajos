import { Dispositivo } from "./Dispositivo";

export class EstacionDeServicio{
    dispositivos: Dispositivo[];

    agregarDispositivo(dispositivo: Dispositivo){
        if(this.dispositivos.length < 3)
            this.dispositivos.push(dispositivo);
    }

    atender(dispositivo, animal): void{
        if(this.tieneDispositivo(dispositivo) != -1)
            dispositivo.ofrecerServicio(dispositivo, animal);
    }

    tieneDispositivo(dispositivo: Dispositivo): number{
        return this.dispositivos.indexOf(dispositivo);
    }
}