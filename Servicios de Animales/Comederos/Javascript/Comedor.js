"use strict";
exports.__esModule = true;
var Comedor = /** @class */ (function () {
    function Comedor(capacidad, racionComida) {
        this.capacidad = 0;
        this.racionComida = 0;
        this.cantidadComida = 0;
        this.capacidad = capacidad;
        this.racionComida = racionComida;
    }
    Comedor.prototype.recargar = function () { };
    Comedor.prototype.agregarAnimal = function (animal) { };
    Comedor.prototype.darDeComer = function (animal) { };
    Comedor.prototype.darDeBeber = function (animal) { };
    return Comedor;
}());
exports.Comedor = Comedor;
