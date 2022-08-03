import { client } from '../db.config'

export default class PostgresController 
{
	async getCategories() {
		const query = `SELECT * FROM categories`
		const { rows } = await client.query(query)
		return rows
	}
	
	async getCategory(id: String) {
		const query = `SELECT * FROM categories WHERE c_id=${id}`
		const { rows } = await client.query(query)
		return rows[0]
	}

	async addCategory(body: {name: string}) {
		// TODO checks for incorrect inputs or already existing input
		const query = `INSERT INTO categories(c_name) VALUES('${body.name}')`
		await client.query(query)
		return { result: `successfully added new category ${body.name}`}
	}

	async deleteCategory(id: String) {
		const query = `DELETE FROM categories WHERE c_id=${id}`
		await client.query(query)
		return { result: `successfully deleted a category with id ${id}`}
	}
	
	async getIngredients() { 
		const query = `SELECT * FROM ingredients`
		const { rows } = await client.query(query)
		return rows
	}
	
	async getIngredient(id: String) {
		const query = `SELECT * FROM ingredients WHERE i_id=${id}`
		const { rows } = await client.query(query)
		return rows[0]
	}
	
	async addIngredient(body: {name: string}) {
		// TODO checks for incorrect inputs or already existing input
		const query = `INSERT INTO ingredients(i_name) VALUES('${body.name}')`
		await client.query(query)
		return { result: `successfully added new ingredient ${body.name}`}
	}
	
	async deleteIngredient(id: String) {
		const query = `DELETE FROM ingredients WHERE i_id=${id}`
		await client.query(query)
		return { result: `successfully deleted a ingredient with id ${id}`}
	}
	
	async getDishes() {
		const query = `Select d_id as id, d_name as name, d_image as image, c_name as category FROM dishes LEFT JOIN categories	ON d_category = c_id;`
		const { rows } = await client.query(query)
		return rows
	}
	
	async getDish(id: String) {
		const query = `SELECT * FROM dishes WHERE d_id=${id}`
		const { rows } = await client.query(query)
		return rows[0]
	}

	async addDish(body: any) {
		// { name: string, image: string, category: number, ingredients: number[] }
		// TODO checks for incorrect inputs or already existing input
		const { name, image, category, ingredients } = body
		const query = `INSERT INTO dishes(d_name, d_category, d_image) VALUES('${name}', ${category}, '${image}');`
		const { rows } = await client.query(query)
		return { result: `successfully added new dish ${name}`}
	}

	async deleteDish(id: String) {
		const query = `DELETE FROM dishes WHERE d_id=${id}`
		await client.query(query)
		return { result: `successfully deleted a dish with id ${id}`}
	}
}

