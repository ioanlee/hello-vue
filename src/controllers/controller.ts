import { client } from '../db.config'

export default class PostgresController {

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
		// TODO checks for incorrect inputs
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
		// TODO checks for incorrect inputs
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
		// SELECT d_id, d_name, c_name FROM dishes JOIN categories ON dishes.d_id = categories.c_id
		// SELECT * FROM ingredients WHERE i_id IN (1, 6, 7)
		const query = `Select d_id as id, d_name as name, d_image as image, c_name as category, array_agg(i_name) as ingredients FROM dishes, categories, ( select dish_id, i_name FROM dish_to_ingredient LEFT JOIN ingredients ON ingredient_id=i_id ) as ing WHERE d_id = dish_id AND c_id = d_id GROUP BY d_id, d_name, d_image, c_name;`
		const { rows } = await client.query(query)
		return rows
	}
	
	async getDish(id: String) {
		const query = `SELECT * FROM ingredients WHERE i_id=${id}`
		const { rows } = await client.query(query)
		return rows[0]
	}
}

