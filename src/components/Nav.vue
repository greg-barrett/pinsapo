<template>
  <div class="nav">
        <button v-on:click="clicked=!clicked" class="bgr hamburger hamburger--squeeze" type="button" v-bind:class="{isactive:clicked}">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <router-link to="/about"><button v-show="clicked" class="nav-btns about" v-on:click="clicked=!clicked">About</button></router-link>
        <router-link to="/features"><button v-show="clicked" class="nav-btns features" v-on:click="clicked=!clicked">Features</button></router-link>
        <router-link to="/contact"><button v-show="clicked" class="nav-btns contact" v-on:click="clicked=!clicked">Contact</button></router-link>

    <template v-if="page<=3">
      <button v-on:click="next" class="nav-arrow right"></button>
      <button v-on:click="back" class="nav-arrow left"></button>
    </template>
    <template v-else>
      <router-link class="back" to="./features"><button class="nav-arrow back"></button></router-link>
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
.bgr {
  position: fixed;
  z-index: 2;
  top: 6px;
  right: 6px;
}
.bar {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-align: center;
  position: fixed;
  top: 6px;
  z-index: 1;
}

.nav-btns {
  font-size: 1.2em;
  height: 35px;
  width:110px;
  letter-spacing: 2px;
  background-color: rgba(256, 256, 256, 0.8);
  border: none;
  border-radius: 50px;
  padding: 0 15px;
  margin-left: 2%;
  margin-top: 5px;
  position: fixed;
  z-index: 1;
}
.about {
  top: 6px;
  right:60px;
}
.features {
  top: 6px;
  right:180px;
}
.contact {
  top: 6px;
  right:300px;
}
.nav-arrow, .bgr {
 background-color: rgba(256, 256, 256, 0.6);
 border-radius: 100px;
}
.back {
  top: 12px;
  left: 12px;
  background-image: url(../assets/left.png);

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
  background-color: rgba(256, 256, 256, 0.9);
}

@media only screen and (max-width: 568px) {
  .nav-btns {
    font-size: 1.4em;
    height: 50px;
    width: 100%;
    background-color: rgba(256, 256, 256, 1);
    border-radius: 0;
    padding: 0 0px;
    margin-left: 0%;
    margin-top: 0px;
    display: block;

  }
  .about {
    top: 0px;
    right: 0px;
  }
  .features {
    top: 50px;
    right: 0px;
  }
  .contact {
    top: 100px;
    right: 0px;
  }
  .nav-arrow {
    height: 30px;
    width: 30px;
    background-position: center;
    background-size: contain;

  }
  .right {
    top:50%;
    right:0px;
    background-image: url(../assets/right.png)
  }
  .left {
    top:50%;
    left:0px;
    background-image: url(../assets/left.png)
  }
}

</style>
