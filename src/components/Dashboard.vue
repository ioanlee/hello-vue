<script lang="ts">
	import { ref } from 'vue'
	import TableView from './TableView.vue'
	import FormCreateItem from './FormCreate.vue'
	export default {
		components: { TableView, FormCreateItem }
	}
	const isLoading = false
</script>

<template>
	<FormCreateItem/>
	<hr>
	<TableView/>
</template>

<style lang="scss">	
	.reload-button {
		width: 150px;
		height: 40px;
		border: 1px solid lightgrey;
		border-radius: 50px;
		margin: 0 auto;
	}
</style>