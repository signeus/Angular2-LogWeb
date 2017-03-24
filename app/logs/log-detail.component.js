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
var router_1 = require("@angular/router");
var log_service_1 = require("./log.service");
var LogDetailComponent = (function () {
    function LogDetailComponent(_route, _router, _logService) {
        this._route = _route;
        this._router = _router;
        this._logService = _logService;
        this.pageTitle = 'Log Detail';
    }
    LogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getLog(id);
        });
    };
    LogDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LogDetailComponent.prototype.getLog = function (id) {
        var _this = this;
        this._logService.getLog(id).subscribe(function (log) { return _this.log = log; }, function (error) { return _this.errorMessage = error; });
    };
    LogDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/logs']);
    };
    LogDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Log Detail: ' + message;
    };
    return LogDetailComponent;
}());
LogDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/templates/log-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        log_service_1.LogService])
], LogDetailComponent);
exports.LogDetailComponent = LogDetailComponent;
//# sourceMappingURL=log-detail.component.js.map