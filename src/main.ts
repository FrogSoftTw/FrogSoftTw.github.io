import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// @ts-ignore
app.use(AOS.init({
  offset: 60, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
}))

app.mount('#app')
