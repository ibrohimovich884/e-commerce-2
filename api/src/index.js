import express from "express"
import cors from "cors"

import products from "./routes/productes.js"
import categories from "./routes/categories.js"

const server = express()
server.use( cors() )
server.use( express.json() )
server.use( "/categories", categories )
server.use( "/products", products )


server.listen( 4000, () => console.info( ":4000" ) )
