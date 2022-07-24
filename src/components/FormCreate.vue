<script lang="ts">
	import { ref } from 'vue'
	export default {		
		data() {
			return {
				form: {
					name: "",
					image: "./assets/logo.png",
					category: null,
				},
				options: [
					{ value: null, text: "Please select an option" },
					{ value: "a", text: "This is First option" },
					{ value: "b", text: "Selected Option" },
					{ value: { C: "3PO" }, text: "This is an option with object value" },
					{ value: "d", text: "This one is disabled" }
				],
				file1: 1,
				file2: null,
				value: ''
			};
		},
		methods: {
			onSubmit() { alert(JSON.stringify(this.form)) },
		},
	}
</script>

<template>
	<h1 class="mb-3">Создать новое блюдо</h1>
   <b-form @submit.prevent="onSubmit">
		<div class="w-50 m-auto text-start">Введите название</div>
		<b-form-input
			required
			v-model="form.name" 
			class="w-50 m-auto mb-3" 
			placeholder="Хачапури по-аджарски"
		/>
		<div class="w-50 m-auto text-start">Выберите категорию</div>
		<b-form-select
			:options="options"
			v-model="form.category" 
			class="w-50 m-auto mb-3" 
		/>
		<!-- TODO изменить на b-form-file -->
		<div class="w-50 m-auto text-start">Добавьте фото</div>
		<input
			v-on:input="getImgPath(this)"
			id=""
			name=""
			type="file"
			class="w-50 mb-3"
		/>
		<div class="w-50 m-auto text-start">
			<b-button
				type="submit" 
				variant="primary"
				innerText="Оформить блюдо"
			/>
		</div>
	</b-form>
</template>