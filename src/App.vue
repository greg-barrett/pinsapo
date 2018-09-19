<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

export default {
  name: 'app',
  components:{
  Nav
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

}

</style>
