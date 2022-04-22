import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/plugins/index.css'
import { naive } from '@/plugins/naive'
import App from '@/App.vue'

createApp(App)
  .use(createPinia())
  .use(naive)
  .mount('#app')
