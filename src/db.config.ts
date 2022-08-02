const { Client } = require('pg')

export const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	password: 'password',
	database: 'menu_draft'
})