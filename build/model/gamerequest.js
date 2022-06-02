"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRequestDB = void 0;
const mongoose_1 = require("mongoose");
const gameRequestSchema = new mongoose_1.Schema({
    _id: {
        type: String
    },
    requester: {
        type: String
    },
    gameId: {
        type: String
    },
    createdAt: {
        type: Date
    }
});
exports.GameRequestDB = (0, mongoose_1.model)('gameRequests', gameRequestSchema);
