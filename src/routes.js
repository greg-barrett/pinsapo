import Instagram from './components/instagram.vue'
import Landing from './components/Landing.vue'
import Features from './components/Features.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Lap from './components/Lap.vue'
import Insac from './components/Insac.vue'

export default [
  {path: '/', component:Landing },
  {path: '/about', component:About },
  {path: '/features', component:Features },
  {path: '/contact', component:Contact },
  {path: '/instagram', component:Instagram },
  {path: '/les-arbres-paresseux', component:Lap },
  {path: '/insaecuar-saeculorum', component:Insac }
]
