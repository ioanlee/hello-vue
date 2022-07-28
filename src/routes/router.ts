import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import FormCreateVue from '../components/FormCreate.vue'
import TableCategories from '../components/TableCategories.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: FormCreateVue },
		{ path: '/categories', component: TableCategories },
	]
})

export default router