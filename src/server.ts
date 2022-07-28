import express, { Application, Request, Response } from 'express'
import PostgresController from './controllers/controller'
import { PrismaClient } from '@prisma/client'
import { client } from './db.config'

const db = new PostgresController()
const app = express()
const cors = require('cors')
const PORT = 5000 // TODO process.env.PORT
const prisma = new PrismaClient()
const corsOptions = { origin: "http://localhost:4000" }

app.use(cors(corsOptions))
app.use(express.json())

app.listen(PORT, () => console.log(`Server is live on  http://localhost:${PORT}`))

app.route('/categories')
	.get(async (req: Request, res: Response) => res.send(await db.getCategories()))
	.post(async (req: Request, res: Response) => {res.send(await db.addCategory(req.body))
	console.log(req.body)})

app.route('/categories/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getCategory(req.params.id)))
	.delete(async (req: Request, res: Response) => res.send(await db.deleteCategory(req.params.id)))

app.route('/ingredients')
	.get(async (req: Request, res: Response) => res.send(await db.getIngredients()))
	.post()
	.delete()

app.route('/ingredients/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getIngredient(req.params.id)))
	.post()
	.delete()

app.route('/dishes')
	.get(async (req: Request, res: Response) => res.send(await db.getDishes()))
	.post()
	.delete()

app.route('/dishes/:id')
	.get(async (req: Request, res: Response) => res.send(await db.getDish(req.params.id)))
	.post()
	.delete()

client.connect()