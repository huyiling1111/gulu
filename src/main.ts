import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Zero from './components/Zero.vue'
import Zero1 from './components/Zero1.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [{
        path: '/', component: Zero
    },
    { path: '/xxx', component: Zero1 }]
})


const app = createApp(App)
app.use(router)
app.mount('#app')