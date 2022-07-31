<!-- // TODO починить this -->
<!-- // TODO вставить axios -->
<!-- // TODO удаление категории -->
<!-- // TODO create table dishes with relations -->
<!-- // TODO categories table input -->
<!-- // TODO create ingredients table + input -->
<!-- // TODO fetch all ingredients -->
<!-- // TODO replace id with ingredient name -->
<!-- // TODO route to get dishes info -->
<!-- TODO file storing -->
<!-- TODO create new dish input -->
<!-- TODO editable dish rows -->
<!-- // TODO ... -->
<!-- TODO image storing -->
<!-- TODO PRISMA -->
<!-- // TODO animations -->
<!-- TODO delete passwords from repository, fix .gitignore -->
<!-- TODO how postgres work for portativity -->
<!-- TODO process.env.PORT :5000 -->

<script lang="ts">
	import { defineComponent } from "vue";
	import axios from 'axios'
import { nullLiteral } from "@babel/types";

	const URL = `http://localhost:5000/dishes/`

	export default defineComponent({
		data() {
			return {
				text: '',
				selectedImage: null,
				items: [
					{
						id: null,
						image: null,
						name: null,
						category: null,
						ingredients: [null]
					}
				],
			}
		},
		mounted() {
			this.refreshDishes()
		},
		methods: {
			async addDish(text: String) {
				if (text) { 
					// await axios.post(URL, { name: text })
					// this.text = ''
					this.refreshDishes()
				}
			},
			async deleteDish(id: Number) {
				// await axios.delete(`${URL}${id}`)
				this.refreshDishes()
			},
			async editDish(id: Number) {
				// await axios.delete(`${URL}${id}`)
				this.refreshDishes()
			},
			async refreshDishes() {
				await axios.get(URL)
					.then(res => this.items = res.data)
			},
			onImageSelected(event: any) {
				this.selectedImage = event.target.files[0]
			},
			onUpload() {
				// const fd = new FormData()
				// fd.append('image', this.selectedImage, this.selectedImage.name)
				// axios.post(URL, fd, )
				// 	.then(res => console.log(res))
			},
		}
	})
</script>

<template>
	<h2>Add new dish</h2>
	<input type="file" @change="onImageSelected">
	<button @click="onUpload">upload</button>
	<h2>Dishes table</h2>
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
		<tbody v-for="(item, index) in items" :key="index">
			<tr>
				<th scope="row"><span class="cell">{{ item.id }}</span></th>
				<th scope="row"><span class="cell"><img :src="`src/assets/${item.image}`" alt=""></span></th>
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