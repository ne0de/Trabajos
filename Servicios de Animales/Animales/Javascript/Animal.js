"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(peso, vacunada) {
        this.peso = 0;
        this.hambre = 0;
        this.tieneVacuna = undefined;
        this.convieneVacunar = undefined;
        this.peso = peso;
        this.tieneVacuna = vacunada;
    }
    Animal.prototype.comer = function (gramos) {
        if (gramos === void 0) { gramos = 0; }
    };
    Animal.prototype.beber = function () { };
    Animal.prototype.caminar = function () { };
    Animal.prototype.vacunar = function () {
        if (!this.tieneVacuna)
            this.tieneVacuna = true;
    };
    return Animal;
}());
exports.Animal = Animal;
