<script lang="ts">
	import { defineComponent } from 'vue'
	import axios from 'axios'
	
	const URL = `http://localhost:5000/ingredients/`
	
	interface Ingredient {
		i_id: number,
		i_name: string,
	}
	
	export default defineComponent({
		data() {
			return {
				items: [] as Ingredient[],
				text: '' as string,
			}
		},
		mounted() {
			this.refreshIngredients()
		},
		methods: {
			async addIngredient(text: String) {
				if (text) { 
					await axios.post(URL, { name: text })
					this.text = ''
					this.refreshIngredients()
				}
			},
			async deleteIngredient(id: Number) {
				await axios.delete(`${URL}${id}`)
				this.refreshIngredients()
			},
			async refreshIngredients() {
				await axios.get(URL)
					.then(res => this.items = res.data)
			}
		}
	})
</script>

<template>
	<h2>Add new ingredient</h2>
	<div class="container create-row w-50">
		<b-form-input v-model="text" placeholder="Enter category name"></b-form-input>
		<b-button variant="outline-primary" @click="addIngredient(text)">Add</b-button>
	</div>
	<h2>Ingredients table</h2>
	<!-- TODO change table to cell list fro better animations -->
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
				<th scope="row"><span class="cell">{{ item.i_id }}</span></th>
				<th scope="row"><span class="cell">{{ item.i_name }}</span></th>
				<th scope="row"><b-button variant="outline-danger" @click="deleteIngredient(item.i_id)">Delete</b-button></th>
			</tr>
		</tbody>
	</table>
</template>