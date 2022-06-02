import exp from "constants";
import { Schema, model } from "mongoose";

const gameRequestSchema = new Schema({
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
})

export type iGameRequest = {
  _id: string | null,
  requester: string | null,
  gameId: string | null,
  createdAt: Date | null
}

export const GameRequestDB = model('gameRequests', gameRequestSchema)