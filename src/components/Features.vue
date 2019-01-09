<template>
  <div class="features page">
    <template v-for="section in sections">
      <div ref="section" v-on:mouseover="resizeHover" v-on:click="resizeClick"v-bind:class="{focus:section.focus, equal:section.equal, minor:section.minor, full:section.full, hidden:section.hidden, insac:section.insac, lpf:section.lpf, instagram:section.instagram}" class="thirds" id="left">
        <h2>{{section.title_a}}</br>{{section.title_b}}</h2>
      </div>
    </template>
  </div>
</template>

<script>
import {bus} from "../main"

export default {

  data() {
    return {
      clicked:false,
      sections: [
        { title_a:"Insaecular", title_b:"Saeculorum", ref:"col1", link:"/insaecuar-saeculorum", focus:false, equal:true, minor:false, full:false, hidden:false, insac: true },
        { title_a:"Les Arbres", title_b:"Paresseux", ref:"col2", link:"les-arbres-paresseux", focus:false, equal:true, minor:false, full:false, hidden:false, lpf: true },
        { title_a:"Instagram", title_b:"Clone", ref:"col3", link:"instagram", focus:false, equal:true, minor:false, full:false, hidden:false, instagram: true}
      ],//sections
      cols:2
    }//return
  },//data
  methods: {
    resizeHover(e) {
      for (var i=0; i<= this.cols; i++) {
        if (this.$refs.section[i] === e.currentTarget) {
          //if hovered add focus class and remove others
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
    },//resize
    resizeClick(e) {
      if (this.clicked) {return}
      for (var i=0; i<= this.cols; i++) {
        if (this.$refs.section[i] === e.currentTarget) {
          //if clicked add focus class and remove others
          this.sections[i].focus=false;
          this.sections[i].minor=false;
          this.sections[i].full=true;
          setTimeout(this.navigate, 2000, this.sections[i].link );
        } else {
          //if not clciked add minor class
          this.sections[i].focus=false;
          this.sections[i].minor=false;
          this.sections[i].hidden=true;
        }//if
        //after click event non are equal
        this.sections[i].equal=false
      }//for
      this.clicked=true;
      //setTimeout(this.navigate, 2000);
    },//resize
    addClass() {
      for (var i=0; i<= this.cols; i++) {
        this.$refs.section[i].classList.add(this.sections[i].class);
      }//for
    },
    navigate (link) {
      this.$router.push(link);
    }//addClass
  },//methods
  created() {
    bus.$emit('pageChange', 2)
  }
}
</script>


<style scoped lang="scss">

.equal {
  width: 33.33%;
}
.minor {
  width: 30%;
}
.focus {
  width: 40%;
}
.full {
  width: 100%;
}
.hidden {
  width: 0%;
  white-space: nowrap;
  overflow: hidden;
}
.features {
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: white;

}

.thirds {
  float: left;
  height: 100%;
  color: white;
  position: relative;
  transition: width 2s ease;
}
.instagram {
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  font-family: 'Satisfy', cursive;
}
.lpf {
  background-image: linear-gradient(-135deg, #e2c0cc, #e2c0cc);
  background-color: rgba(226,	192, 204, 1);
  color: #5a5151;
  font-family: 'Sacramento', cursive;
}
.insac {
  background-image: linear-gradient(to right, #111, #222);
}

h2 {
  text-align: center;
  white-space: nowrap;
  font-size: 4.5em;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
}





@media only screen and (max-width: 1024px) and (orientation: portrait) {
  .thirds {
    float: none;
    height: 33%;
    width: 100%;
    transition: height 2s ease;
  }
  .equal {
    height: 33.33%;
  }
  .minor {
    height: 30%;
  }
  .focus {
    height: 40%;
  }
  .full {
    height: 100%;
  }
  .hidden {
    height: 0%;
    white-space: nowrap;
    overflow: hidden;
  }

}

@media only screen and (max-width: 812px)and (orientation: landscape) {
  h2 {
    font-size: 1.5em;
  }
}
@media only screen and (max-width: 480px) {
  h2 {
    font-size: 2em;
  }
}

</style>
