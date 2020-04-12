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
var Animal_1 = require("./Animal");
var Vaca = /** @class */ (function (_super) {
    __extends(Vaca, _super);
    function Vaca(peso, vacuna) {
        var _this = _super.call(this, peso, vacuna) || this;
        _this.convieneVacunar = true || false;
        return _this;
    }
    Vaca.prototype.comer = function (gramos) {
        if (gramos === void 0) { gramos = 0; }
        this.peso += gramos / 3;
        this.sed = true;
        if (this.peso < 200)
            this.hambre += 2;
    };
    Vaca.prototype.beber = function () {
        this.sed = true;
        this.peso -= 0.5;
    };
    Vaca.prototype.caminar = function () {
        this.peso -= 3;
    };
    return Vaca;
}(Animal_1.Animal));
var vaquita = new Vaca(100, true);
vaquita.vacunar();
