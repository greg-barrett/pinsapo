<template>
  <div class="features page">
    <a href="#features"></a>
    <template v-for="section in sections">

      <div ref="section" v-on:mouseover="resizeHover" v-on:click="resizeClick"v-bind:class="{focus:section.focus, equal:section.equal, minor:section.minor, full:section.full, hidden:section.hidden, insac:section.insac, lpf:section.lpf, instagram:section.instagram}" class="thirds" id="left">
        <h2>{{section.title}}</h2>
      </div>

    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked:false,
      sections: [
        { title:"Insaecular Saeculorum", ref:"col1", focus:false, equal:true, minor:false, full:false, hidden:false, insac: true },
        { title:"Le Petit Fairzou", ref:"col2", focus:false, equal:true, minor:false, full:false, hidden:false, lpf: true },
        { title:"Instagram", ref:"col3", focus:false, equal:true, minor:false, full:false, hidden:false, instagram: true}
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
      setTimeout(this.navigate, 2000);
    },//resize
    addClass() {
      for (var i=0; i<= this.cols; i++) {
        console.log("hey")
        this.$refs.section[i].classList.add(this.sections[i].class);
      }//for
    },
    navigate () {
      this.$router.push('instagram');
    }//addClass
  },//methods
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
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  width: 100%;
  position: fixed;

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
}
.lpf {
  background-image: linear-gradient(to right, #111, #222);
}
.insac {
  background-image: linear-gradient(to right, #111, #222);
}

h2 {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 30px;

}
</style>
