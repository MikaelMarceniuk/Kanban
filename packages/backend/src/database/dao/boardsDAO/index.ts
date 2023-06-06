import { Board } from "../../collections"
import { MongoConn } from "../.."
import { ObjectId, UpdateFilter } from "mongodb"

const dbInstance = MongoConn.getInstance()
const collection = dbInstance.collection("boards")

export default {
  async getAllBoards() {
    return await collection.find({}).toArray()
  },

  async getOneBoard(boardId: string) {
    return await collection.findOne({ _id: new ObjectId(boardId) })
  },

  async insertBoard(newBoard: Board) {
    return await collection.insertOne(newBoard)
  },

  async updateBoard(boardId: string, updateDocument: UpdateFilter<Document>) {
    return await collection.updateOne(
      { _id: new ObjectId(boardId) },
      updateDocument
    )
  },

  async deleteBoard(boardId: string) {
    return await collection.deleteOne({ _id: new ObjectId(boardId) })
  },
}
