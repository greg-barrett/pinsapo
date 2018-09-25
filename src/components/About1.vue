<template>
  <div class="about-page page">

    <template v-for="section in sections">
      <div v-on:click="resize" class="col" ref="section" v-bind:class="{focus:section.focus, equal:section.equal, minor:section.minor, aboutCol:section.about, thinkCol:section.think, designCol:section.design, buildCol:section.build}">
        <div v-bind:class="{about:section.about, think:section.think, design:section.design, build:section.build, background:section.focus}">
          <transition name="appear"><p v-show="section.focus">{{section.paragraph}}</p></transition>
          <transition name="title"><h1 v-show="section.focus">{{section.title}}</h1></transition>

        </div>
      </div>
    </template>

  </div>
</template>

<script>
import {bus} from "../main"

export default {

  data() {
    return {
      startWidth: "25%",
      mainWidth:"85%",
      reducedWidth: "5%",
      refs: ["col1", "col2", "col3", "col4"],
      sections: [
        { title:"About", ref:"col1", background:'require think.png',
         paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga", focus:false, equal:true, minor:false, about:true },
        { title:"Think", ref:"col2", background:"url(../assets/think.png)", paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga", focus:false, equal:true, minor:false, think:true },
        { title:"Design", ref:"col3", background:"url(../assets/design.png)", paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga", focus:false, equal:true, minor:false, design:true },
        { title:"Build", ref:"col4", background:"url(../assets/build.png)", paragraph:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga", focus:false, equal:true, minor:false, build:true }
      ]//sections
    }//return
  },//data
  methods: {
    resize(e) {
      for (var i=0; i<= this.refs.length-1; i++) {
        if (this.$refs.section[i] === e.currentTarget) {
          //if clicked add focus class and remove others
          this.sections[i].focus=true;
          this.sections[i].minor=false;
        } else {
          //if not clciked add minor class
          this.sections[i].focus=false;
          this.sections[i].minor=true;
        }//if
        //after click event non are equal
        this.sections[i].equal=false;
      }//for
    }//resize
  },//methods
  created() {
    bus.$emit('pageChange', 1)
  }

}
</script>


<style scoped lang="scss">
.about-page {
  height: 100%;
  position: fixed;
  width: inherit;
}
.page {
  font-family: 'Open Sans', sans-serif;
}

.col {
  float: left;
  height: 100%;
  border-right: 4px solid white;
  transition: width 2s;

}

.about {
  background-image: url(../assets/about.png);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.think {
  background-image: url(../assets/think.png);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.design {
  background-image: url(../assets/design.png);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.build {
  background-image: url(../assets/build.png);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.focus {
  width:85%;

}
.equal {
  width: 25%;
}
.minor {
  width: 5%;
}
.background {
  background: none;
  position: relative;
  overflow: hidden;
}

.aboutCol {
  background-color: #197F31;
}
.thinkCol {
  background-color: #31FF62;
}
.designCol {
  background-color: #3F7F4E;
}
.buildCol {
  background-color: #27CC4E;
}
.background {
  background: none;
  position: relative;
  overflow: hidden;
}
h1 {
  float: right;
  vertical-align: baseline;
  margin: 10px 10px 0 0;
  font-size: 10em;
  color: white;

  text-shadow: -1px -1px gray,
                -2px -2px gray,
                -3px -3px gray,
                -4px -4px gray,
                -5px -5px gray,
                -6px -6px gray,
                -7px -7px gray,
                -8px -8px gray,
                -9px -9px gray,
                -10px -10px gray;

}
p {
  width: 80%;
  margin: auto;
  font-size: 2.5em;
  line-height: 1.4em;
  margin-top: 10%;
  color: white;
}
//transitions for the paragraph
.appear-enter-active {
  transition: opacity 2s ease-out 3s;

}
.appear-leave-active {
  transition: opacity 0s ease-out;
}
.appear-enter, .appear-leave-to {
  opacity:0;
}
//transitions for the title of the box
.title-enter-active {
  //transition: text-shadow .3s linear 3s, opacity 1s ease-out 2s ;
  -webkit-animation: bounce-in-top 1.1s 2s both;
	        animation: bounce-in-top 1.1s 2s both;

}
.title-leave-active {
  transition: opacity 0s ease-out 0s;
}
.title-enter {
  text-shadow: 0px 0px gray;
  opacity: 0

}

.title-leave-to {
  text-shadow: 0px 0px gray;
}

//keyframes from animista
//title
@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
            transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
            transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
            transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }


}
//text
@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}


@media only screen and (min-width: 1501px) {
  h1 {
    font-size: 14em;
    position: absolute;
    bottom: 40px;
    right: 25px;
  }
  p {
    margin-top: 15%;
    font-size: 3.2em;
    width: 80%;
  }
}

@media only screen and (max-width: 1500px) {
  h1 {
    font-size: 10em;
    position: absolute;
    bottom: 40px;
    right: 25px;
  }
  p {
    font-size: 3em;
    width: 80%;
  }

}
@media only screen and (max-width: 1224px) {
  h1 {
    font-size: 8em;
    position: relative;
    bottom: -60px;

  }
  p {
    font-size: 2.5em;
    width: 80%;
  }
  .background {
    overflow: scroll;
  }
}

@media only screen and (max-width: 768px) {
  .col {
    width: 100%;
    height: 25%;
    border-bottom: 4px solid white;
    transition: height 2s;
  }
  .focus {
    height:85%;
  }
  .equal {
    height: 25%;
  }
  .minor {
    height: 5%;
  }
  .about {
    background-image: url(../assets/about.png);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  }
  .think {
    background-image: url(../assets/think.png);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  }
  .design {
    background-image: url(../assets/design.png);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  }
  .build {
    background-image: url(../assets/build.png);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
  }
  .background {
    background: none;
    position: relative;
    overflow: hidden;
  }

  p {
    font-size: 2em;
    width: 90%;
  }
  h1 {
    font-size: 6em;
    position: relative;
    bottom: -50px;
    right: 25px;

  }
  .background {
    overflow: scroll;
  }
}

@media only screen and (max-width: 480px) {
  p {
    font-size: 1.8em;
    width: 90%;
  }
  h1 {
    font-size: 5em;
    position: relative;
    bottom: -40px;
  }
  .background {
    overflow: scroll;
  }
}
@media only screen and (max-width: 320px) {
  p {
    font-size: 1.7em;
    width: 90%;
  }
  h1 {
    //font-size: 5em;
    //margin-top: 10px;
    //margin-right: 10px;
    //float: right;

  }
  .background {
    overflow: scroll;
  }
}


</style>
