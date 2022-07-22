<script lang="ts">
	import CreateItemForm from './CreateItemForm.vue';
	import { ref } from 'vue'
	export default {}
	const isLoading = false
</script>

<template>
	<!-- <CreateItemForm/> -->
	<form action="">
		<section >
			<input type="text" name="" id="">
			<select name="" id="">
				<option value="1">option 1</option>
			</select>
			<input type="file" name="" id="">
		</section>
		<input type="submit" value="Submit">
	</form>
	<hr>
	<!-- <TableView/> -->

	<button v-if="isLoading" class="reload-button">Reload data</button>
	<div v-else class="reload-button">loading...</div>
	<section>
		<div>database table view goes here</div>
		<section class="table">
			<table></table>
		</section>
	</section>
</template>

<style lang="css">
	section {
		/* border: 1px solid red; */
		/* margin: 20px 0;
		padding: 40px; */
	}

	.reload-button {
		width: 150px;
		height: 40px;
		border: 1px solid lightgrey;
		border-radius: 50px;
		/* background-color: coral; */
		margin: 0 auto;
		
	}

	.table {
		border: 1px solid red
	}
</style>