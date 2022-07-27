const { Client } = require('pg')
const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	password: 'password',
	database: 'menu'
})

client.connect()

client.query(`SELECT * FROM users`, async (err, res) => {
	if(err) console.log(err.message)
	else console.log(res.rows)
})
client.end

// export { pool }