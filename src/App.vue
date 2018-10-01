<template>
  <div id="app">
    <Nav/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'app',
  components:{
  Nav,
},//components


}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
html, body {
  height: 100%;

}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


</style>
