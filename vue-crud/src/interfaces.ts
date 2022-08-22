export interface Dish {
	id: number,
	name: string,
	image: string,
	category: number,
	ingredients: number[],
}
export interface Category {
	c_id: number,
	c_name: string,
}
export interface Ingredient {
	i_id: number,
	i_name: string,
}