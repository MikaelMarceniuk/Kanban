import { Db, MongoClient } from "mongodb"

class MongoConn {
  static instance: Db

  getInstance() {
    if (MongoConn.instance) {
      return MongoConn.instance
    }

    const client = new MongoClient(this.getConnString())
    MongoConn.instance = client.db(process.env.MONGO_DATABASE)
    return MongoConn.instance
  }

  getConnString() {
    const host = process.env.MONGO_HOST
    const port = process.env.MONGO_PORT

    return `mongodb://${host}:${port}`
  }

  async pingDatabase() {
    const mongoDb = process.env.MONGO_DATABASE
    const client = new MongoClient(this.getConnString())

    try {
      console.log(`Trying to ping '${mongoDb}' database`)

      await client.connect()
      await client.db(mongoDb).command({ ping: 1 })

      console.log(`Succefully pinged '${mongoDb}' database`)
    } catch (e) {
      throw new Error(`Error in pinging to MongoDb: ${e.message}`)
    } finally {
      await client.close()
    }
  }
}

export default new MongoConn()
