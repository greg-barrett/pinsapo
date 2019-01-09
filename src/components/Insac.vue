<template>
  <div class="page">
    <h1 id="title">Insaecular<br />Saeculorum</h1>
    <p id="tag">Coming soon...</p>
  </div>
</template>

<script>
import {bus} from "../main"
export default {
  created() {
    bus.$emit('pageChange', 4)
  }
}
</script>
<style scoped lang="scss">
.page {
  min-height: 100%;
  background-image: linear-gradient(to right, #111, #222);
    font-family: 'Open Sans', sans-serif;
}

#title {
  position: relative;
  font-size: 9em;
  text-align: center;
  color: white;
  top: 20vh;
}
#tag {
  position: relative;
  text-align: center;
  color: white;
  top: 20vh;
  font-size: 2em;
}


@media only screen and (max-width: 590px) {
  #title {
    font-size: 6em;
  }
  #tag {
    font-size: 2em;
  }
}
@media only screen and (max-width: 390px) {
  #title {
    font-size: 3em;
  }
  #tag {
    font-size: 1.5em;
  }
}

</style>
