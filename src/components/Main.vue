<template>
  <div id="main">
    <div id="pinContainer">
      <div id="slideContainer">
        <Landing class="panel"/>
        <About1 class="panel"/>
        <Features class="panel"/>
        <Contact class="panel"/>
      </div>
    </div>
  </div>
</template>

<script>
import Landing from './Landing.vue'
import Features from './Features.vue'
import Contact from './Contact.vue'
import About1 from './About1.vue'
import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'

export default {
  components: {
    Landing,
    About1,
    Features,
    Contact
  },
  mounted() {
    const plugins = [ CSSPlugin ];
    var logo=document.getElementsByClassName("logo")
    console.log(logo)
    var slideContainer=document.getElementById("slideContainer");
    var pinContainer= document.getElementById("pinContainer");
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
    .to(slideContainer, 0.5, {z: -150, delay:0})
    .to(slideContainer, 1, {x: "-25%"})
    .to(slideContainer, 0.5, {z: 0})
    //
    .to(slideContainer, 0.5, {z: -150, delay: 0})
    .to(slideContainer, 1, {x: "-50%"})
    .to(slideContainer, 0.5, {z: 0})
    //
    .to(slideContainer, 0.5, {z: -150, delay: 0})
    .to(slideContainer, 1, {x: "-75%"})
    .to(slideContainer, 0.5, {z: 0});

    //

    new ScrollMagic.Scene({
      triggerElement: pinContainer,
      triggerHook: "onLeave",
      duration: "500%"
    })
    .setPin(pinContainer)
    .setTween(wipeAnimation)
    .addTo(controller);

  }
}
</script>

<style lang="scss">
body, html {
  height: 100%;
}
#main {
  height: 100%;
}
#pinContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}


#slideContainer {
  width: 400%;
  height: 100%;
}

.panel {
  height: 100%;
  width: 25%;
  float: left;
}
</style>
