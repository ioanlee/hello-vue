const cors = require('cors')
const client = require('./db.config.js')
// import { client } from './db.config.js'
const express = require('express')

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const app = express()
const PORT = 5000 // TODO process.env.PORT
const corsOptions = { origin: "http://localhost:3000" }

app.use(cors(corsOptions))
app.use(express.json())


// app.post('/ingredients', async (req, res) => {
// 	try {
// 		console.log(req.body)
// 	} catch (err) { console.log(err) }
// })

app.get('/', async (req, res) => {
	// client.connect()

	// const data = await client.query(`SELECT * FROM categories`, async (err, res))

	// client.end

	res.send({ client })
})
app.listen(PORT, () => console.log(`Server is live on http://localhost:${PORT}`))