import { Vaca } from "./Animales/Vaca";
import { Cerdo } from "./Animales/Cerdo";
import { Comedero } from "./Dispositivos de Atención/Comedero";
import { EstacionDeServicio } from "./Dispositivos de Atención/EstacionDeServicio";

var vaquita = new Vaca(205000);
var estacionServicio = new EstacionDeServicio();
var comederoNormal = new Comedero(15000, 300000, 5000);

estacionServicio.agregarDispositivo(comederoNormal);

estacionServicio.atender(comederoNormal, vaquita);
estacionServicio.atender(comederoNormal, vaquita);

comederoNormal.recargar();

var cerdito = new Cerdo(120000);
cerdito.comer(5000);
cerdito.comer(5000);
cerdito.comer(5000);
console.log(cerdito.cuantoComi());
