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
var ws_service_1 = require("./../services/ws.service");
var core_1 = require("@angular/core");
var log_service_1 = require("./log.service");
var LogListComponent = (function () {
    function LogListComponent(_logService, _webSocket) {
        var _this = this;
        this._logService = _logService;
        this._webSocket = _webSocket;
        this.pageTitle = 'Log List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this._webSocket.run().subscribe(function (data) { console.log(data); }, function (error) { return _this.errorMessage = error; });
    }
    LogListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    LogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._logService.getLogs()
            .subscribe(function (logs) { return _this.logs = logs; }, function (error) { return _this.errorMessage = error; });
    };
    LogListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Log List: ' + message;
    };
    return LogListComponent;
}());
LogListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/templates/log-list.component.html',
        styleUrls: ['app/templates/css/log-list.component.css']
    }),
    __metadata("design:paramtypes", [log_service_1.LogService, ws_service_1.WsService])
], LogListComponent);
exports.LogListComponent = LogListComponent;
//# sourceMappingURL=log-list.component.js.map