<script lang="ts">
	import FormCreateItem from './FormCreate.vue'
	import { defineComponent } from '@vue/runtime-core'

	export default defineComponent({
		components: { FormCreateItem }
	})
</script>

<template>
	<hr>
	<nav class="navigation w-50 m-auto">
		<a href="/">Главная</a>
		<a href="/categories">Категории</a>
	</nav>	
	<router-view></router-view>
</template>

<style lang="scss">	
	.reload-button {
		width: 150px;
		height: 40px;
		border: 1px solid lightgrey;
		border-radius: 50px;
		margin: 0 auto;
	}
	.navigation {
		display: flex;
		gap: 20px;
	}
</style>