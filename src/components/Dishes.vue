<script lang="ts">
	import { defineComponent } from "vue"
	import axios, { AxiosResponse } from 'axios'
	import { Dish, Category } from '../interfaces'

	const URL = `http://localhost:5000/dishes/`

	export default defineComponent({
		data() {
			return {
				dishes: [] as Dish[],
				categories: [] as any,
				form: {
					name: '' as string,
					imageFile: {} as File,
					category: NaN as number,	
					ingredients: [1] as number[]
				},
			}
		},
		mounted() {
			this.refreshDishes()
			this.getCategories()
		},
		methods: {
			onImageSelected(event: any) {
				this.form.imageFile = event.target.files[0]
			},
			async deleteDish(id: Number) {
				await axios.delete(`${URL}${id}`)
				this.refreshDishes()
			},
			async refreshDishes() {
				await axios.get(URL)
					.then(res => this.dishes = res.data)
			},
			async addDish(form: any) {
				const formdata = new FormData()
				Object.entries(this.form).forEach((value: any[]) => formdata.append(value[0], value[1]))
				await axios.post(URL, formdata)
				this.refreshDishes() 
			},
			async getCategories() {
				let categoriesRaw: Category[] = []
				await axios.get(`http://localhost:5000/categories/`)
					.then((res) => categoriesRaw = res.data)
				this.categories = categoriesRaw.reduce((obj: Object, item: Category) => ({...obj, [item.c_id]: item.c_name }), {}) // @ ty
			},
			onSubmit() {
				this.addDish(this.form)
				this.onReset()
			},
			onReset() {
				this.form.name = ''
				this.form.category = NaN
			},
			async editDish(id: Number) {
				alert('Work In Progress')
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
		<b-form-group label="Image:" label-for="input-image">
			<input class="form-control" type="file" id="formFile" @change="onImageSelected" required>
		</b-form-group>
		<!-- * Buttons -->
		<b-button class="w-50 m-2" type="submit" variant="primary">Create dish</b-button>
	</b-form>
	<!-- TODO editable dish rows -->
	<!-- TODO change table to list for better animations -->
	<div v-if="dishes.length">
		<h2>Dishes table</h2>
		<table v-auto-animate class="table table-hover w-50 m-auto">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Category</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody v-for="(item, index) in dishes" :key="index">
				<tr>
					<th scope="row"><span class="cell">{{ item.id }}</span></th>
					<th scope="row"><span class="cell"><img class="w-50" :src="`uploads/${item.image || 'logo.png'}`" alt=""></span></th>
					<th scope="row"><span class="cell">{{ item.name }}</span></th>
					<th scope="row"><span class="cell">{{ item.category }}</span></th>
					<th scope="row">
						<b-button class="w-100 mt-1" variant="outline-primary" @click="editDish(item.id)">Edit</b-button>
						<b-button class="w-100 mt-1" variant="outline-danger" @click="deleteDish(item.id)">Delete</b-button>
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>