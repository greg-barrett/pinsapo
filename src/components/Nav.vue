<template>
  <div class="nav">
    <div class="bar-box">
    <div class="burger-box">
        <button v-on:click="clicked=!clicked" class="bgr hamburger hamburger--squeeze" type="button" v-bind:class="{isactive:clicked}">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
    </div>
      <div class="bar" v-bind:class="{showBar: clicked}">
        <router-link to="/about"><button class="nav-btns" v-on:click="clicked=!clicked">About</button></router-link>
        <router-link to="/features"><button class="nav-btns" v-on:click="clicked=!clicked">Features</button></router-link>
        <router-link to="/contact"><button class="nav-btns" v-on:click="clicked=!clicked">Contact</button></router-link>
      </div>
    </div>
    <template v-if="page<=3">
      <button v-on:click="next" class="nav-arrow right"></button>
      <button v-on:click="back" class="nav-arrow left"></button>
    </template>
    <template v-else="page===4">
      <router-link class="back" to="./features"></router-link>
    </template>
  </div>
</template>

<script>
import {bus} from "../main"
export default {
  data() {
    return {
      clicked:false,
      page:0,
      pages: [
        {name: "/"},
        {name: "about"},
        {name: "features"},
        {name: "contact"}
      ]
    }//return
  },//data
  methods: {
    next() {
      if(this.page ==3) {
        this.page=-1;
      }
      this.page++;
      this.$router.push(this.pages[this.page].name);
    },
    back() {
      if(this.page ==0) {
        this.page=4;
      }
      this.page--;
      this.$router.push(this.pages[this.page].name);

    },
  },//methods
  created () {
    bus.$on("pageChange", (data)=>{
      this.page=data
      console.log(this.page)
    });
  }

}
</script>


<style scoped lang="scss">
.bar-box {
  width: 100%;
  z-index: 1;

  position: fixed;
}
.burger-box {
  width: 60px;
  text-align: center;
  float: right;
}


.bar {
  float: right;
  transition: width 2s;
  white-space: nowrap;
  width: 0%;
  overflow: hidden;
  text-align: center;
}
.showBar {
  width: 360px;
  z-index: 1;

}

.nav-btns {
  font-size: 1.2em;
  height: 35px;
  width:110px;
  letter-spacing: 2px;
  background-color: rgba(256, 256, 256, 0.6);
  border: none;
  border-radius: 50px;
  padding: 0 15px;
  margin-left: 2%;
  margin-top: 5px;
}
.nav-arrow, .bgr {
 background-color: rgba(256, 256, 256, 0.6);
 border-radius: 100px;
}
.back {
  position: fixed;
  z-index: 1;
  top:5%;
  left:2%;
  background-image: url(../assets/right.png);
}
.nav-arrow {
  position: fixed;
  z-index: 1;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  background-position: center;
  background-size: contain;

}
.right {
  top:50%;
  right:10px;
  background-image: url(../assets/right.png)
}
.left {
  top:50%;
  left:10px;
  background-image: url(../assets/left.png)
}
.nav {
  position: relative;
  font-family: montserrat;
}

button {
  background: none;
  border: none;

}

.nav-btns:hover, .bgr:hover, .nav-arrow:hover {
  background-color: rgba(256, 256, 256, 0.8);
}

@media only screen and (max-width: 480px) {
  .nav-btns {
    font-size: 1.0em;
    height: 42px;
    width: 33%;
    letter-spacing: 2px;
    background-color: rgba(256, 256, 256, 0.6);
    border-right: 1px solid black;;
    border-radius: 0;
    padding: 0 0px;
    margin-left: 0%;
    margin-top: 0px;
  }
  .burger-box {
    width: 20%;
  }
  .showBar {
    width: 80%;
  }
}

</style>
