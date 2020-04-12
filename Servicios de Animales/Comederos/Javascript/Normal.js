"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Comedor_1 = require("./Comedor");
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal(capacidad, racionComida) {
        var _this = _super.call(this, capacidad, racionComida) || this;
        _this.maximoSoporte = 200;
        return _this;
    }
    Normal.prototype.recargar = function () {
        this.cantidadComida < 10000 ? this.cantidadComida += 3000 : console.error("No necesito recargar");
    };
    Normal.prototype.agregarAnimal = function (animal) {
        animal.hambre > 0 && animal.peso < this.maximoSoporte ?
            this.animales.push(animal) : console.error("No puede ingresar");
    };
    Normal.prototype.darDeComer = function (animal) {
        if (this.animales.includes(animal) && (this.cantidadComida - this.racionComida >= 0))
            animal.comer(this.racionComida);
        this.cantidadComida -= this.racionComida;
    };
    return Normal;
}(Comedor_1.Comedor));
