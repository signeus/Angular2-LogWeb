"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_service_1 = require("./../services/ws.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var log_list_component_1 = require("./log-list.component");
var log_detail_component_1 = require("./log-detail.component");
var log_guard_service_1 = require("./log-guard.service");
var log_filter_pipe_1 = require("./log-filter.pipe");
var shared_module_1 = require("../shared/shared.module");
var LogModule = (function () {
    function LogModule() {
    }
    return LogModule;
}());
LogModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'logs', component: log_list_component_1.LogListComponent },
                { path: 'log/:id',
                    canActivate: [log_guard_service_1.LogDetailGuard],
                    component: log_detail_component_1.LogDetailComponent
                },
            ])
        ],
        declarations: [
            log_list_component_1.LogListComponent,
            log_detail_component_1.LogDetailComponent,
            log_filter_pipe_1.LogFilterPipe
        ],
        providers: [
            log_list_component_1.LogListComponent,
            log_guard_service_1.LogDetailGuard,
            ws_service_1.WsService
        ]
    })
], LogModule);
exports.LogModule = LogModule;
//# sourceMappingURL=log.module.js.map