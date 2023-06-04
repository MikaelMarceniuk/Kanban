import server from "./server"
;(async () => {
  await server.initialize()

  server.app.listen(process.env.PORT, () =>
    console.log(`Backend is running at port ${process.env.PORT}`)
  )
})()
