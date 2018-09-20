import Instagram from './components/instagram.vue'
import Landing from './components/Landing.vue'
import Features from './components/Features.vue'
import Contact from './components/Contact.vue'
import About1 from './components/About1.vue'

export default [
  {path: '/', component:Landing },
  {path: '/about', component:About1 },
  {path: '/features', component:Features },
  {path: '/contact', component:Contact },
  {path: '/instagram', component:Instagram }
]
