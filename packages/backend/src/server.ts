import "dotenv/config"
import express, { Application } from "express"
import morgan from "morgan"

class Server {
  app: Application

  initialize() {
    this.app = express()
    this.loadMiddlewares()
    this.loadRoutes()
  }

  loadMiddlewares() {
    this.app.use(morgan("dev"))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  loadRoutes() {
    this.app.get("/api", (req, res) => res.send({ message: "Hello World!" }))
  }
}

export default new Server()
