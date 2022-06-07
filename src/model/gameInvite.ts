import exp from "constants";
import { Schema, model } from "mongoose";

const gameInviteSchema = new Schema({
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
})

export type iGameInvite = {
  _id: string | null,
  gameId: string | null,
  host: string | null,
  invited: string | null,
  createdAt: Date | null
}

export const GameInviteDB = model('gamesInvites', gameInviteSchema)