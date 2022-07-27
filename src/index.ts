import express from 'express'
const app = express()
const PORT = 5000 // TODO process.env.PORT
// const cors = require('cors')
// const client = require('./db.config')
const pool = require('./db.ts')

// middleware

app.use(express.json())
// app.use(cors())




// // create ingredient
// app.post('/ingredients', async (req, res) => {
// 	try {
// 		console.log(req.body)
// 	} catch (err) { console.log(err) }
// })

// create category

// create item

app.get('/', (req, res) => res.send({ data: '🔥🔥🔥🔥' }))
app.listen(PORT, () => console.log(`server is live on http:localhost:${PORT}`))