import { Application } from "express"
import boardsController from "./boards.controller"

export default (app: Application) => {
  app.get("/boards", boardsController.getAllBoards)
  app.get("/boards/:id", boardsController.getOneBoard)
  app.post("/boards", boardsController.insertBoard)
  app.put("/boards", boardsController.updateBoard)
  app.delete("/boards/:id", boardsController.deleteBoard)
}
