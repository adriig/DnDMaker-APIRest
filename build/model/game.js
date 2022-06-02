"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDB = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    _id: {
        type: String
    },
    owner: {
        type: String
    },
    name: {
        type: String
    },
    maxPlayers: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    participants: {
        type: Array
    }
});
exports.GameDB = (0, mongoose_1.model)('games', gameSchema);
