<template>
  <div class="landing page">
    <div class="logo">
        <h1 v-on:click="spray=!spray">
          <span v-bind:class="{sprayup:spray}"><</span>
          <span v-bind:class="{spraydown:spray}">P</span>
          <span v-bind:class="{sprayup1:spray}">I</span>
          <span v-bind:class="{spraydown1:spray}">N</span>
          <span v-bind:class="{sprayup2:spray}">S</span>
          <span v-bind:class="{spraydown2:spray}">A</span>
          <span v-bind:class="{sprayup3:spray}">P</span>
          <span v-bind:class="{spraydown3:spray}">O</span>
          <span v-bind:class="{sprayup4:spray}">></span></h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spray: false
    }
  }
}
</script>


<style scoped lang="scss">

.landing {
  background-image: linear-gradient(to right, #49ad7b, #1b7b34);
}

.logo {
  position: relative;
  top: 30%;
  width: 0px;
  overflow: hidden;
  margin: auto;
  text-align: center;
  animation: flash .4s 20, type 4s step-end 2s 1 normal forwards;
  font-family: 'Montserrat', sans-serif;
  font-size: 200px;
  color: #fff;
}

//key frame classes with different delays
.sprayup {
  position: relative;
  animation: spray-up 1s ease-out forwards;
}
.sprayup1 {
  position: relative;
  animation: spray-up 1s ease-out .2s forwards;
}
.sprayup2 {
  position: relative;
  animation: spray-up 1s ease-out .4s forwards;
}
.sprayup3 {
  position: relative;
  animation: spray-up 1s ease-out .6s forwards;
}
.sprayup4 {
  position: relative;
  animation: spray-up 1s ease-out .8s forwards;
}
.spraydown {
  position: relative;
  animation: spray-down 1s ease-out .1s forwards;
}
.spraydown1 {
  position: relative;
  animation: spray-down 1s ease-out .3s forwards;
}
.spraydown2 {
  position: relative;
  animation: spray-down 1s ease-out .5s forwards;
}
.spraydown3 {
  position: relative;
  animation: spray-down 1s ease-out .7s forwards;
}
.spraydown4 {
  position: relative;
  animation: spray-down 1s ease-out .9s forwards;
}

//types in the title
@keyframes type {
  0% { width: 0;}
  10% { width: 130px;}
  20% { width: 270px;}
  30% { width: 320px;}
  40% { width: 480px;}
  70% { width: 600px;}
  80% { width: 760px;}
  90% { width: 900px;}
  95% { width: 1070px;}
  100% { width: 1170px; overflow: visible;}
}
//flashing typing line
@keyframes flash {
  0% { border-right: 0px}
  100% { border-right: 5px solid white;}
}

//keyframes for fade out
@keyframes spray-up {
  0% { top: 0px;}
  100% { top: 240px; opacity: 0;}
}

@keyframes spray-down {
  0% { bottom: 0px;}
  100% { bottom: 240px; opacity: 0;}
}


</style>
