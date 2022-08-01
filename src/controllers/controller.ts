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
		const query = `SELECT d_id AS id, d_name AS name, d_image AS image, c_name AS category, array_agg(i_name) AS ingredients FROM dishes LEFT JOIN categories ON d_category = c_id LEFT JOIN (SELECT dish_id, i_name FROM dish_to_ingredient LEFT JOIN ingredients ON ingredient_id=i_id ) AS ing ON d_id = dish_id GROUP BY d_id, d_name, d_image, c_name;`
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
		// TODO checks for incorrect inputs
		const { name, image, category, ingredients } = body
		const query = `INSERT INTO dishes(d_name, d_category, d_image, d_ingredients) VALUES('${name}', ${category}, '${image}', ${ingredients});`
		const { rows } = await client.query(query)
		return { result: `successfully added new dish ${name}`}
	}

	async deleteDish(id: String) {
		const query = `DELETE FROM dishes WHERE d_id=${id}`
		await client.query(query)
		return { result: `successfully deleted a dish with id ${id}`}
	}
}

