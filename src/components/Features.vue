<template>
  <div class="features page">
    <template v-for="section in sections">
      <div ref="section" v-on:mouseover="resizeHover" v-on:click="resizeClick"v-bind:class="{focus:section.focus, equal:section.equal, minor:section.minor, full:section.full, hidden:section.hidden}" class="thirds" id="left">
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
        { title:"Insaecular Saeculorum", ref:"col1", focus:false, equal:true, minor:false, full:false, hidden:false },
        { title:"Le Petit Fairzou", ref:"col2", focus:false, equal:true, minor:false, full:false, hidden:false },
        { title:"Instagram", ref:"col3", focus:false, equal:true, minor:false, full:false, hidden:false},
      ],//sections
      cols:2
    }//return
  },//data
  methods: {
    resizeHover(e) {
      for (var i=0; i<= this.cols; i++) {
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
    }//resize
  }//methods
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

}

.thirds {
  background-image: linear-gradient(to right, #111, #222);
  float: left;
  height: 100%;
  color: white;
  position: relative;
  transition: width 2s ease;
}

h2 {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 30px;

}
</style>
