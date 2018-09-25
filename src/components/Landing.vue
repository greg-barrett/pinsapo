<template>
  <div class="landing page">

        <h1 class="typing">PINSAPO</h1>
        <p>Websites by Gregory Barrett</p>

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
  position: relative;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  color: #fff;
  //tester
  background-image: url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}

h1 {
  font-size: 20em;
  text-align: center;
  position: absolute;
  top: 30%;
  width: 100%;
  opacity: 0;
  animation: fadeIn 2s 1s forwards;
}
p {
  position: absolute;
  top: 51%;
  font-size: 1.2em;
  width: 100%;
  text-align: center;
  opacity: 0;
  animation: fadeIn 2s 1s forwards;
}

@media only screen and (min-width: 1366px) {
  h1 {
    font-size: 22em;
      top: 10%;
  }
  p {
    font-size: 3em;
  }
}
@media only screen and (max-width: 1366px) {
  h1 {
    font-size: 15em;
      top: 15%;
  }
  p {
    font-size: 2.5em;
  }
}
@media only screen and (max-width: 768px) and (orientation:portrait) {
  h1 {
    font-size: 9.5em;
      top: 30%;
  }
  p {
    font-size: 2.1em;
  }
}
@media only screen and (max-width: 900px) {
  h1 {
    font-size: 9.5em;
      top: 18%;
  }
  p {
    font-size: 2.1em;
  }
}
@media only screen and (max-width: 480px) {
  h1 {
    font-size: 5em;
      top: 30%;

  }
  p {

    font-size: 1.2em;
  }
}
</style>
