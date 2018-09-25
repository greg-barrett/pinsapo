<template>
  <div class="about-page page">

    <template v-for="section in sections">
      <div v-on:click="resize" class="col" ref="section" v-bind:class="{focus:section.focus, equal:section.equal, minor:section.minor, aboutCol:section.about, thinkCol:section.think, designCol:section.design, buildCol:section.build}">
        <div v-bind:class="{about:section.about, think:section.think, design:section.design, build:section.build, background:section.focus}">
          <transition name="appear"><h1 v-show="section.focus">{{section.title}}</h1></transition>
          <transition name="appear"><p v-show="section.focus">{{section.paragraph}}</p></transition>
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
  transition: width 1s;

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

h1 {
  font-size: 7em;
  color: white;
  text-align: center;
  margin: 40px 0;
}
p {
  width: 80%;
  margin: auto;
  font-size: 2.5em;
  line-height: 1.4em;
  color: white;

}
//transitions for the paragraph
.appear-enter-active {
  transition: opacity 1s ease-out 2s;

}
.appear-leave-active {
  transition: opacity 0s ease-out;
}
.appear-enter, .appear-leave-to {
  opacity:0;
}

//keyframes from animista
//title


@media only screen and (min-width: 1366px) {
  p {
    font-size: 3.5em;
    width: 70%;
    margin: 5% auto;
  }

}


@media only screen and (max-width: 812px) {
  h1 {
    font-size: 3em;
    margin: 20px 0;

  }
  p {
    font-size: 1.7em;
    width: 80%;
  }
}
@media only screen and (min-width: 768px) and (orientation: portrait) {
  h1 {
    font-size: 5em;
  }
  p {
    font-size: 2.7em;
    width: 80%;
  }
}
@media only screen and (max-width: 480px) {
  .col {
    width: 100%;
    height: 25%;
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

}

</style>
