import exp from "constants";
import { Schema, model } from "mongoose";

const gameSchema = new Schema({
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
})

export type iGame = {
  _id: string | null,
  owner: string | null,
  name: string | null,
  maxPlayers: number | null,
  createdAt: Date | null,
  participants: Array<string> | null
}

export const GameDB = model('games', gameSchema)