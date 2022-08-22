import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import FormCreate from '../components/FormCreate.vue'
import Categories from '../components/Categories.vue'
import Ingredients from '../components/Ingredients.vue'
import Dishes from '../components/Dishes.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Dishes },
		{ path: '/categories', component: Categories },
		{ path: '/ingredients', component: Ingredients },
	]
})

export default router