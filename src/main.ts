import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
	.use(router)
	.use(BootstrapVue3)
	.mount('#app')
