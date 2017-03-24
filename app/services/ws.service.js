"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var WsService = (function () {
    function WsService() {
        var _this = this;
        this.websocket = new WebSocket("ws://0.0.0.0:9000/");
        this.websocket.onopen = function (evt) {
            console.log("This is a socket");
            _this.websocket.send("Hello");
        };
    }
    WsService.prototype.sendMessage = function (text) {
        this.websocket.send(text);
    };
    WsService.prototype.run = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            _this.websocket.onmessage = function (evt) {
                observer.next(evt);
            };
        }).map(function (res) { return res.data; }).share();
    };
    return WsService;
}());
WsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], WsService);
exports.WsService = WsService;
//# sourceMappingURL=ws.service.js.map