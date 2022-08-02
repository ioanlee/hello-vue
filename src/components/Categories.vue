<script lang="ts">
	import axios from 'axios'
	import { Category } from '../interfaces'
	import { defineComponent } from "vue"

	const URL = `http://localhost:5000/categories/`

	export default defineComponent({
		data() {
			return {
				items: [] as Category[],
				text: '' as string,
			}
		},
		mounted() {
			this.refreshCategories()
		},
		methods: {
			async addCategory(text: String) {
				if (text) { 
					await axios.post(URL, { name: text })
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
					.then(res => this.items = res.data)
			}
		}
	})
</script>

<template>
	<h2>Add new category</h2>
	<div class="container create-row w-50">
		<b-form-input v-model="text" placeholder="Enter category name"></b-form-input>
		<b-button variant="outline-primary" @click="addCategory(text)">Add</b-button>
	</div>
	<h2>Categories table</h2>
	<!-- TODO change table to list for better animations -->
	<table v-auto-animate class="table table-hover w-50 m-auto">
		<thead>
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody v-for="(item, index) in items" :key="index">
			<tr>
				<th scope="row"><span class="cell">{{ item.c_id }}</span></th>
				<th scope="row"><span class="cell">{{ item.c_name }}</span></th>
				<th scope="row"><b-button variant="outline-danger" @click="deleteCategory(item.c_id)">Delete</b-button></th>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss">
	.cell {
		height: 100%;
		line-height: 200%;
		margin: auto 0;
	}
	.create-row {
		display: flex;
		gap: 10px;
	}
	h2 {
		padding-top: 40px;
	}
</style>