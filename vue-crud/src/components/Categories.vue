<script lang="ts">
	import axios from 'axios'
	import { Category } from '../interfaces'
	import { defineComponent } from "vue"

	const URL = `http://localhost:5000/categories/`

	export default defineComponent({
		data() {
			return {
				categories: [] as Category[],
				text: '' as string,
			}
		},
		mounted() {
			this.refreshCategories()
		},
		methods: {
			async addCategory() {
				if (this.text) { 
					await axios.post(URL, { name: this.text })
					this.text = ''
					this.refreshCategories()
				}
			},
			async deleteCategory(id: Number) {
				await axios.delete(`${URL}${id}`)
				this.refreshCategories()
			},
			async refreshCategories() {
				await axios.get(URL)
					.then(res => this.categories = res.data)
			}
		}
	})
</script>

<template>
	<h2>Add new category</h2>
	<b-form class="w-50 m-auto form-row" @submit="addCategory">
		<b-form-input v-model="text" placeholder="Enter category name" required></b-form-input>
		<b-button class="" variant="outline-primary" type="submit">Add</b-button>
	</b-form>
	<!-- TODO change table to list for better animations -->
	<div v-if="categories.length">
		<h2>Categories table</h2>
		<table v-auto-animate class="table table-hover w-50 m-auto">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody v-for="(item, index) in categories" :key="index">
				<tr>
					<th scope="row"><span class="cell">{{ item.c_id }}</span></th>
					<th scope="row"><span class="cell">{{ item.c_name }}</span></th>
					<th scope="row"><b-button variant="outline-danger" @click="deleteCategory(item.c_id)">Delete</b-button></th>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<style lang="scss">
	.cell {
		height: 100%;
		line-height: 200%;
		margin: auto 0;
	}
	.form-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
	h2 {
		padding-top: 40px;
	}
</style>