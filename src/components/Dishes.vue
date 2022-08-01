<!-- // TODO починить this -->
<!-- // TODO вставить axios -->
<!-- // TODO удаление категории -->
<!-- // TODO create table dishes with relations -->
<!-- // TODO categories table input -->
<!-- // TODO create ingredients table + input -->
<!-- // TODO fetch all ingredients -->
<!-- // TODO replace id with ingredient name -->
<!-- // TODO route to get dishes info -->
<!-- // TODO create new dish input -->
<!-- TODO file storing -->
<!-- TODO editable dish rows -->
<!-- // TODO ... -->
<!-- TODO PRISMA -->
<!-- // TODO animations -->
<!-- TODO delete passwords from repository, fix .gitignore -->
<!-- TODO how postgres work for portativity -->
<!-- TODO process.env.PORT :5000 -->
<!-- TODO delete dashboard -->

<script lang="ts">
	import { defineComponent } from "vue"
	import axios from 'axios'

	const URL = `http://localhost:5000/dishes/`

	export default defineComponent({
		data() {
			return {
				selected_ingredients: [],
				test_ingredients: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],

				dishes: [],
				categories: null,
				ingredients: null,
				form: {
					name: '',
					image: null,
					imageFile: null,
					category: null,
					ingredients: null,
				},
			}
		},
		mounted() {
			this.refreshDishes()
			this.getCategories()
			this.getIngredients()
		},
		methods: {
			onImageSelected(event: any)	{ this.form.image = event.target.files[0].name; this.form.imageFile = event.target.files },
			async addDish(form: any) 		{ await axios.post(URL, form); this.refreshDishes() },
			async deleteDish(id: Number) 	{ await axios.delete(`${URL}${id}`); this.refreshDishes() },
			async refreshDishes() 			{ await axios.get(URL).then(res => this.dishes = res.data) },
			async getCategories() {
				let categoriesRaw
				await axios.get(`http://localhost:5000/categories/`)
					.then(res => categoriesRaw = res.data)
				this.categories = categoriesRaw.reduce((obj, item) => ({...obj, [item.c_id]: item.c_name }), {})
			},
			async getIngredients() {
				let ingredientsRaw
				await axios.get(`http://localhost:5000/ingredients/`)
					.then(res => ingredientsRaw = res.data)
				this.ingredients = ingredientsRaw.map(v => v.i_name)
			},
			onSubmit() {
				this.addDish(this.form)
				this.onReset()
			},
			onReset() {
				this.form.name = ''
				this.form.category = null
			},
			async editDish(id: Number) {},
		},
		computed: {
			availableOptions() {
				return this.test_ingredients.filter(opt => this.selected_ingredients.indexOf(opt) === -1)
			},
    	}
	})
</script>

<template>
	<h2>Add new dish</h2>
	<b-form class="w-50 m-auto" @submit="onSubmit" @reset="onReset">
		<!-- * Name input -->
		<b-form-group label="Dish Name:" label-for="input-name">
			<b-form-input
				id="input-name"
				v-model="form.name"
				placeholder="Хачапури по-аджарски"
				required
			></b-form-input>
		</b-form-group>
		<!-- * Category select -->
		<b-form-group label="Category:" label-for="input-category">
			<b-form-select
				id="input-category"
				v-model="form.category"
				:options="categories"
				required
			></b-form-select>
		</b-form-group>
		<!-- * Image file select -->
		<!-- TODO file input styling -->
		<b-form-group label="Image:" label-for="input-image">
			<input class="w-100 btn" type="file" @change="onImageSelected">
		</b-form-group>
		<!-- * Ingredients select -->
		<!-- <b-form-group label="Tagged input using select" label-for="tags-component-select">
			<b-form-tags
				id="tags-component-select"
				v-model="selected_ingredients"
				size="lg"
				class="mb-2"
				add-on-change
				no-outer-focus
			>
				<template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
					<ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
						<li v-for="tag in tags" :key="tag" class="list-inline-item">
						<b-form-tag
							@remove="removeTag(tag)"
							:title="tag"
							:disabled="disabled"
							variant="info"
						>{{ tag }}</b-form-tag>
						</li>
					</ul>
					<b-form-select
						v-bind="inputAttrs"
						v-on="inputHandlers"
						:disabled="disabled || availableOptions.length === 0"
						:options="availableOptions"
					>
						<template #first>
							<option disabled value="">Choose a tag...</option>
						</template>
					</b-form-select>
				</template>
			</b-form-tags>
    	</b-form-group> -->
	 	<!-- TODO checked tags demonstration -->
	 	<!-- <div>Selected tags:{{selected_ingredients}}</div> -->
		<!-- * Buttons -->
		<b-button class="w-50 m-2" type="submit" variant="primary">Create dish</b-button>
	</b-form>
	

	<h2>Dishes table</h2>
	<!-- <img src="../../uploads/1b0105075d69871325902354be133837" alt=""> -->
	<!-- TODO change table to list for better animations -->
	<table v-auto-animate class="table table-hover w-50 m-auto">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Image</th>
				<th scope="col">Name</th>
				<th scope="col">Category</th>
				<th scope="col">Ingredients</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody v-for="(item, index) in dishes" :key="index">
			<tr>
				<th scope="row"><span class="cell">{{ item.id }}</span></th>
				<th scope="row"><span class="cell"><img class="w-50" :src="`uploads/${item.image || 'logo.png'}`" alt=""></span></th>
				<th scope="row"><span class="cell">{{ item.name }}</span></th>
				<th scope="row"><span class="cell">{{ item.category }}</span></th>
				<th scope="row"><span class="cell ingredients" v-for="(ingredient, index) in item.ingredients" :key="index">{{ ingredient }}</span></th>
				<th scope="row">
					<b-button class="w-100 mt-1" variant="outline-primary" @click="editDish(item.id)">Edit</b-button>
					<b-button class="w-100 mt-1" variant="outline-danger" @click="deleteDish(item.id)">Delete</b-button>
				</th>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss">
	.ingredients:not(:last-of-type)::after {
		content: ',';
	}
</style>