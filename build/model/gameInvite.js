"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameInviteDB = void 0;
const mongoose_1 = require("mongoose");
const gameInviteSchema = new mongoose_1.Schema({
    _id: {
        type: String
    },
    gameId: {
        type: String
    },
    host: {
        type: String
    },
    invited: {
        type: String
    },
    createdAt: {
        type: Date
    }
});
exports.GameInviteDB = (0, mongoose_1.model)('gamesInvites', gameInviteSchema);
