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
var Inteligente = /** @class */ (function (_super) {
    __extends(Inteligente, _super);
    function Inteligente(capacidad, racionComida, vacunas) {
        var _this = _super.call(this, capacidad, racionComida) || this;
        _this.vacunas = 0;
        _this.usoBebedero = 0;
        _this.vacunas = vacunas;
        return _this;
    }
    Inteligente.prototype.recargarVacunas = function () {
        if (this.vacunas == 0)
            this.vacunas += 50;
    };
    Inteligente.prototype.recargarComida = function () {
        if (this.cantidadComida < 15000)
            this.cantidadComida = this.capacidad;
    };
    Inteligente.prototype.agregarAnimal = function (animal) {
        if (!this.animales.includes(animal))
            this.animales.push(animal);
    };
    Inteligente.prototype.darDeComer = function (animal) {
        if (this.animales.includes(animal) && (this.cantidadComida - this.racionComida <= 0))
            animal.comer(animal.peso / 100);
    };
    Inteligente.prototype.vacunar = function (animal) {
        if (animal.convieneVacunar) {
            animal.vacunar();
            this.vacunas--;
        }
    };
    Inteligente.prototype.recargarBebedero = function () { this.usoBebedero = 0; };
    Inteligente.prototype.darDeBeber = function (animal) {
        if (this.usoBebedero < 20 && animal.sed) {
            animal.beber();
            this.usoBebedero++;
        }
    };
    return Inteligente;
}(Comedor_1.Comedor));
