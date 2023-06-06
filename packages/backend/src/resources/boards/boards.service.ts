import boardsDAO from "../../database/dao/boardsDAO"
import { Board } from "../../database/collections"
import { ApiResult } from "../../utils"
import { IReqInsertBoard } from "./DTOs"
import { UpdateFilter } from "mongodb"

export default {
  async getAllBoards() {
    const result = await boardsDAO.getAllBoards()

    return new ApiResult(true, result)
  },

  async getOneBoard(boardId: string) {
    const result = await boardsDAO.getOneBoard(boardId)

    return new ApiResult(true, result)
  },

  async insertBoard({ name }: IReqInsertBoard) {
    const board = new Board(name)
    const result = await boardsDAO.insertBoard(board)

    return new ApiResult(true, result)
  },

  async updateBoard(board: Board) {
    const updateBoard: UpdateFilter<Document> = {
      $set: {
        name: board.name,
      },
    }

    const result = await boardsDAO.updateBoard(board.id, updateBoard)

    return new ApiResult(true, result)
  },

  async deleteBoard(boardId: string) {
    const result = await boardsDAO.deleteBoard(boardId)

    return new ApiResult(true, result)
  },
}
