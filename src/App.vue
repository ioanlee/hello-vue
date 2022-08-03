<script setup lang="ts">

</script>

<template>
	<b-nav tabs align="center">
		<b-nav-item><router-link to="/">Dishes</router-link></b-nav-item>
		<b-nav-item><router-link to="/categories">Categories</router-link></b-nav-item>
		<!-- <b-nav-item><router-link to="/ingredients">Ingredients</router-link></b-nav-item> -->
	</b-nav>
	<router-view></router-view>
</template>

<style lang="scss">
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 40px;
	}
	a {
		text-decoration: none !important;
	}
</style>
