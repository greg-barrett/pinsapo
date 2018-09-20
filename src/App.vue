<template>
  <div id="app">
    <Nav/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
  Nav,
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

}
html, body {
  height: 100%;
}
.fade-enter-active {
  animation: fade 3s 3s;
}
.fade-leave-active {
  animation: fade 3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
