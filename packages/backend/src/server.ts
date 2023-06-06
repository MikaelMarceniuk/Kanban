import "dotenv/config"
import express, { Application } from "express"
import morgan from "morgan"
import { MongoConn } from "./database"
import router from "./router"

class Server {
  app: Application

  async initialize() {
    this.app = express()
    this.loadMiddlewares()
    await this.loadRoutes()
    await this.loadConnections()
  }

  loadMiddlewares() {
    this.app.use(morgan("dev"))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  async loadRoutes() {
    this.app.get("/api", (req, res) => res.send({ message: "Hello World!" }))
    await router(this.app)
  }

  async loadConnections() {
    await MongoConn.pingDatabase()
  }
}

export default new Server()
