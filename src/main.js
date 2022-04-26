import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/plugins/index.css'
import App from '@/App.vue'

const app = createApp(App)
app.use(createPinia())

// Avoid tailwind override to naive
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
