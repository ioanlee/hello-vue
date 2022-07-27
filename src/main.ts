import App from './App.vue'
import router from './routes/router'
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// .use(router)
createApp(App)
	.use(BootstrapVue3)
	.use(router)
	.mount('#app')