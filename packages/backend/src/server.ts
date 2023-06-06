import "dotenv/config"
import express, { Application } from "express"
import morgan from "morgan"
import { MongoConn } from "./database"

class Server {
  app: Application

  async initialize() {
    this.app = express()
    this.loadMiddlewares()
    this.loadRoutes()
    await this.loadConnections()
  }

  loadMiddlewares() {
    this.app.use(morgan("dev"))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  loadRoutes() {
    this.app.get("/api", (req, res) => res.send({ message: "Hello World!" }))
  }

  async loadConnections() {
    await MongoConn.pingDatabase()
  }
}

export default new Server()
