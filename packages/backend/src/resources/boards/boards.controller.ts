import boardsService from "./boards.service"

export default {
  async getAllBoards(req, res) {
    const result = await boardsService.getAllBoards()

    res.send(result)
  },

  async getOneBoard(req, res) {
    const boardId = req.params.id
    const result = await boardsService.getOneBoard(boardId)

    res.send(result)
  },

  async insertBoard(req, res) {
    const body = req.body
    const result = await boardsService.insertBoard(body)

    res.send(result)
  },

  async updateBoard(req, res) {
    const board = req.body
    const result = await boardsService.updateBoard(board)

    res.send(result)
  },

  async deleteBoard(req, res) {
    const boardId = req.params.id
    const result = await boardsService.deleteBoard(boardId)

    res.send(result)
  },
}
