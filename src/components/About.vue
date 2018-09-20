<template>
  <div class="about page">


    <div class="container">

      <div class="first">
        <div class="text">
          <h2 id="we">We...</h2>
        </div>
      </div>

      <div class="thirds">
        <div v-on:click="think=!think" class="text" v-bind:class="{expand:think}">
          <h2 id="think" v-on:mouseover="thinkHover=!thinkHover" v-on:mouseleave="thinkHover=!thinkHover" v-bind:class="{hover:thinkHover}">Think...</h2>
          <p class="para" v-show="think">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
             atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
          </p>
        </div>
      </div>

      <div class="thirds" >
        <div class="text" v-on:click="design=!design" v-bind:class="{expand:design}">
          <h2 id="design" v-on:mouseover="designHover=!desigHover" v-on:mouseleave="designHover=!designHover" v-bind:class="{hover:designHover}">Design...</h2>
          <p class="para" v-show="design">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
             atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
          </p>
        </div>
      </div>

      <div class="thirds">
        <div class="text" v-on:click="build=!build" v-bind:class="{expand:build}">
          <h2 id="build" v-on:mouseover="buildHover=!buildHover" v-on:mouseleave="buildHover=!buildHover" v-bind:class="{hover:buildHover}">Build...</h2>
          <p class="para" v-show="build">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
             atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      think:false,
      design:false,
      build:false,
      thinkHover:false,
      buildHover:false,
      designHover:false
    }
  }

}
</script>


<style scoped lang="scss">
.about {
  height: 100%;
  width: 100%;
}
.container{
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}
h2 {
  line-height: 80px;
  font-size: 60px;
  text-align: center;
  opacity: 0;
}
.thirds
  h2 {
    font-size: 40px;
}
.first{
  width: 20%;
  float: left;
  height: 100%;
}

.thirds {
  width: 26.66%;
  float: left;
  height: 100%;

}
.text {
  position: relative;
  top: 45vh;
  padding: 30px 20px;
  transition: all 1s;
  text-align: justify;
}
p {
  font-size: 20px;
  line-height: 30px;
}

.expand {
  top: 0vh;
}
.hover {
  text-decoration: underline;
}
//class for animation of the headers
#we {
  animation: focus 1s 1s 1 normal forwards;
}
#think {
  animation: focus 1s 2s 1 normal forwards;
}
#design {
  animation: focus 1s 3s 1 normal forwards;
}
#build {
  animation: focus 1s 4s 1 normal forwards;
}


@-webkit-keyframes focus {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

</style>
