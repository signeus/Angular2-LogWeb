"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_service_1 = require("./ws.service");
var core_1 = require("@angular/core");
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [ws_service_1.WsService]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=service.module.js.map