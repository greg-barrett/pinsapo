<template>
  <div class="landing page">
    <div class="header">
      <vue-typed-js :backSpeed="50" :strings="['^1500P^500i^500n^500sapo', 'Websites by', 'Gregory Barrett', 'Pinsapo']">
        <h1 class="typing"></h1>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
import {bus} from "../main"

export default {
  data() {
    return {
      clicked:false,
    }
  },
  methods: {
  },
  created() {
    bus.$emit('pageChange', 0);
  }

}
</script>


<style scoped lang="scss">

.landing {
  background-image: linear-gradient(to right, #49ad7b, #1b7b34);
  height: 100%;
  position: fixed;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 14em;
  color: #fff;
  //tester
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}
.typed-element {
  position: absolute;
  bottom: 6%;

}
.typed-cursor {

}
.hyphen {
  white-space: pre;

}
.typed-element .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.5s 10;
}
@keyframes typedjsBlink {
50% {
    opacity: 0.0;
}
}


</style>
