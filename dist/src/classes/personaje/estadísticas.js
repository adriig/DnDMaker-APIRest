"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = exports.Estadisticas = void 0;
class Estadisticas {
    constructor(MainStats, Saving, Skills) {
        this._MainStats = MainStats;
        this._Saving = Saving;
        this._Skills = Skills;
    }
}
exports.Estadisticas = Estadisticas;
class Stats {
    constructor(id, type, value) {
        this.id = id,
            this.type = type,
            this.value = value;
    }
}
exports.Stats = Stats;
