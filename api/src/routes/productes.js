import { Router } from "express"
import { executeQuery } from "../utils/db.js"

const router = new Router()

router.get( "/products/:cid", async ( req, res ) => {

	const categoryID = parseInt( req.params.cid )
	const page = req.query.page || 1

	const offset = ( page - 1 ) * ITEMS_PER_PAGE

	res.send( await executeQuery( `

		SELECT * from products
		offset $1
		limit $2
	`, offset, ITEMS_PER_PAGE ) )
} )

export default router