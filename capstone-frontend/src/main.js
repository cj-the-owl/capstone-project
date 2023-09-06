import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import create from './components/addBook.vue'
import update from './components/updateBook.vue'

createApp(App).use(store).use(router).mount('#app')
