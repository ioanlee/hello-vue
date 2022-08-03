import App from './App.vue'
import router from './routes/router'
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { FormFilePlugin } from 'bootstrap-vue'

// .use(router)
createApp(App)
	.use(BootstrapVue3)
	.use(router)
	.use(autoAnimatePlugin)
	.mount('#app')