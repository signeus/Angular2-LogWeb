"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = (function () {
    function Service(core, parameters) {
        this.core = core;
        this.parameters = parameters;
    }
    Service.prototype.core_run = function (name, parameters) {
        return this.core.service(name, parameters);
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=service.js.map