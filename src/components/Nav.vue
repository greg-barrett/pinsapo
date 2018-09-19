<template>
  <div class="nav">
    <button v-on:click="clicked=!clicked" v-bind:class="{isactive:clicked}" class="hamburger--arrow bgr" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  <div class="bar" v-bind:class="{showBar: clicked}">
    <button v-on:click="clicked=!clicked" name="about">&lt;About&gt;</button>
    <button v-on:click="clicked=!clicked" name="features">&lt;Features&gt;</button>
    <button v-on:click="clicked=!clicked" name="contact">&lt;Contact&gt;</button>

  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked:false
    }//return
  },//data
  methods: {

  },//methods

}
</script>


<style scoped lang="scss">
.nav {
  position: relative;
  font-family: montserrat;
}
.bgr {
  position:fixed;
  top: 20px;
  right: 20px;
  z-index: 1;
}
button {
  background: none;
  border: none;
}
.bar {
  width: 0;
  background-color: rgba(256, 256, 256, 0.9);
  position: fixed;
  top: 20px;
  z-index: 1;
  height: 44px;
  right: 80px;
  overflow: hidden;
  button {
    font-size: 23px;
    width: 33%;
    line-height: 44px;
    letter-spacing: 2px;

  }

  transition: width 2s;
}
.showBar {
  width: 90%;
}

</style>
