"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wfFinanceToolbox = void 0;
var wfFinanceToolbox = /** @class */ (function () {
    function wfFinanceToolbox() {
    }
    /**
    * wfFinanceToolbox: Calculates the Present Value (PV)
    * Interest rates and periods must be set at same level
    * In case of Monthly rates, the periods must be expressed in Months
    * In case of Yearly rates, the periods must be expressed in Years
    *
    * @param fv   Future value
    * @param i    Interest rate at period level
    * @param n    Number of periods
    */
    wfFinanceToolbox.prototype.calculatePV = function (fv, i, n) {
        return (fv) / (Math.pow((1 + (i / 100)), n));
    };
    return wfFinanceToolbox;
}());
exports.wfFinanceToolbox = wfFinanceToolbox;
