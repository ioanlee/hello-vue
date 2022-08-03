import express, { Application, Request, Response } from 'express'
import PostgresController from './controllers/DBOController'
import { PrismaClient } from '@prisma/client'
import { client } from './db.config'

const db = new PostgresController()
const app = express()
const cors = require('cors')
const PORT = 5000
const prisma = new PrismaClient()
const corsOptions = { origin: "http://localhost:4000" }

const multer = require('multer')
const storage = multer.diskStorage({
	destination: 	function(req: any, file: any, cb: any) { cb(null, './uploads/') },
	filename: 		function(req: any, file: any, cb: any) { cb(null, new Date().getTime() + file.originalname) },
})
const upload = multer({ storage })

app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT, () => console.log(`Server is live on  http://localhost:${PORT}`))

app.route('/categories')
	.get(async (req: Request, res: Response) => res.send(await db.getCategories()))
	.post(async (req: Request, res: Response) => res.send(await db.addCategory(req.body)))

app.route('/categories/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getCategory(req.params.id)))
	.delete(async (req: Request, res: Response) => res.send(await db.deleteCategory(req.params.id)))

app.route('/ingredients')
	.get(async (req: Request, res: Response) => res.send(await db.getIngredients()))
	.post(async (req: Request, res: Response) => res.send(await db.addIngredient(req.body)))

app.route('/ingredients/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getIngredient(req.params.id)))
	.delete(async (req: Request, res: Response) => res.send(await db.deleteIngredient(req.params.id)))
	
// TODO cleanup
app.route('/dishes')
	.get(async (req: Request, res: Response) => res.send(await db.getDishes()))
	.post(upload.single('imageFile'), async (req: any, res: Response) => res.send(await db.addDish({...req.body, image: req.file.filename})))

app.route('/dishes/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getDish(req.params.id)))
	.delete(async (req: Request, res: Response) => res.send(await db.deleteDish(req.params.id)))

client.connect()