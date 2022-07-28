<script lang="ts">
	import { defineComponent } from "vue";
	import axios from 'axios'

	export default defineComponent({
		data() {
			return {
				items: null,
			}
		},
		mounted() {
			this.getCategories()
		},
		methods: {
			async deleteCategory(id: Number) {
				await axios.delete(`http://localhost:5000/categories/${id}`)
				this.getCategories()
			},
			async getCategories() {
				await axios.get(`http://localhost:5000/categories`)
					.then(res => this.items = res.data)
			}
		}
	})
</script>

<template lang="">
	<table class="table table-hover table-striped w-50 m-auto">
		<thead>
			<tr>
				<th scope="col">C_id</th>
				<th scope="col">Name</th>
				<th scope="col">Action</th>
			</tr>
		</thead>
		<tbody v-for="(item, index) in items" :key="index">
			<tr>
				<th scope="row"><span class="cell">{{ item.c_id }}</span></th>
				<th scope="row"><span class="cell">{{ item.c_name }}</span></th>
				<th scope="row"><button class="btn btn-danger" @click="deleteCategory(item.c_id)">Delete</button></th>
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
</style>