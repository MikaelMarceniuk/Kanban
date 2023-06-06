import { Application } from "express"
import { readdirSync } from "fs"
import { resolve } from "path"

const resourcesPath = resolve(__dirname, "resources")

const getResource = (resourceName: string) =>
  resolve(__dirname, "resources", resourceName)

const getResourceRouter = (resourceName: string, routerName: string) =>
  resolve(__dirname, "resources", resourceName, routerName)

const createRoutes = async (app: Application) => {
  const resources = await readdirSync(resourcesPath)
  for (const resName of resources) {
    const resource = await readdirSync(getResource(resName))

    const resRouterIndex = resource.findIndex((r) => r.includes("router"))

    if (resRouterIndex != -1) {
      const routerPath = getResourceRouter(resName, resource[resRouterIndex])
      require(routerPath).default(app)
    }
  }
}

export default createRoutes
