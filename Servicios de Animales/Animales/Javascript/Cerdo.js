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
var Cerdo = /** @class */ (function (_super) {
    __extends(Cerdo, _super);
    function Cerdo(peso, vacuna) {
        var _this = _super.call(this, peso, vacuna) || this;
        _this.maxGramosConsumidos = 0;
        _this.vecesComiendo = 0;
        _this.convieneVacunar = true;
        return _this;
    }
    Cerdo.prototype.comer = function (gramos) {
        if (gramos === void 0) { gramos = 0; }
        if (gramos > 200)
            this.peso += this.peso += gramos - 200;
        if (gramos > 1000)
            this.hambre = 0;
        if (gramos > this.maxGramosConsumidos)
            this.maxGramosConsumidos = gramos;
        this.vecesComiendo > 3 ? this.sed = true : this.vecesComiendo++;
    };
    Cerdo.prototype.beber = function () {
        this.sed = false;
        this.hambre += 3;
        this.vecesComiendo = 0;
    };
    return Cerdo;
}(Animal_1.Animal));
