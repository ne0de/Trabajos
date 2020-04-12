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
var Gallina = /** @class */ (function (_super) {
    __extends(Gallina, _super);
    function Gallina(vacuna) {
        var _this = _super.call(this, 4, vacuna) || this;
        _this.vecesComiendo = 0;
        _this.sed = false;
        _this.hambre = 10;
        _this.convieneVacunar = false;
        return _this;
    }
    Gallina.prototype.cuantoComi = function () {
        return this.vecesComiendo;
    };
    Gallina.prototype.comer = function () {
        this.vecesComiendo++;
    };
    return Gallina;
}(Animal_1.Animal));
