import { Vaca } from "./Animales/Vaca";
import { Cerdo } from "./Animales/Cerdo";
import { Comedero } from "./Dispositivos de Atención/Comedero";
import { EstacionDeServicio } from "./Dispositivos de Atención/EstacionDeServicio";
import { Bebedero } from "./Dispositivos de Atención/Bebedero";
import { Vacunatorio } from "./Dispositivos de Atención/Vacunatorio";

var vaquita = new Vaca(205000);
var bebedero = new Bebedero();
var vacunatorio = new Vacunatorio(100);
var comederoNormal = new Comedero(15000, 300000, 5000);

var estacionServicio = new EstacionDeServicio(comederoNormal, bebedero, vacunatorio);

estacionServicio.atender(vaquita);
estacionServicio.atender(vaquita);
estacionServicio.atender(vaquita);

comederoNormal.recargar();

var cerdito = new Cerdo(120000);
cerdito.comer(5000);
cerdito.comer(5000);
cerdito.comer(5000);
console.log(cerdito.cuantoComi());
