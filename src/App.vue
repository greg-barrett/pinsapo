<template>
  <div id="app">
    <Nav/>
    <transition name="router-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
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


</style>
