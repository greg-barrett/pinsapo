<template>
  <div class="instagram page">

    <section class="segment cover">
      <h1 id="title">
        Les Abres<br />Parraseux
      </h1>
    </section>

    <section class="segment about">
      <div class="col-two-third fader">
        <p class="fader">Les Abres Paraseux is a luxury holiday home rental located within the Dordogne are of France. The house has been sympathetically restored by its current owners with no expense spared.</p>
      </div>
      <div class="col-one-third fader logo">
      </div>
      <div style="clear: left;"></div>
    </section>

    <section class="segment breif">
      <div class="col-two-third breif-left fader">
        <h1 class="fader">Brief</h1>
        <p class="fader">The owners of Les Abres Paraseux needed a website which would attract visitors to the property and increase the number of bookings. They
          wanted the website to feel distinctly french to reflect the house that they had worked so hard to create.
      </p>

      </div>
      <div class="col-one-third breif-right">
        <div class="deliverables fader">
          <h2 class="fader">Website Features</h2>
          <ul class="fader">
            <li>Bespoke front-end design</li>
            <li>Custom photography and copy</li>
            <li>Client and Admin login areas</li>
            <li>Sleek online booking system</li>
          </ul>
        </div>
        <div class="link fader">
          <div id="in-link">
          <a class="fader"  href="https://lesarboles.herokuapp.com/">Preview</a></div>
        </div>
        <div style="clear: left;"></div>
      </div>
      <div style="clear: left;"></div>
    </section>
    <section class="segment palettes">
      <div class="palette-text">
        <h1 class="fader">Palette</h1>
        <p class="fader">The pallet was chosen to complement the pastel shades of the decor and invoke feelings
           of the french countryside. Transparencies were also used for an extra touch of elegance.</p>
      </div>
      <article class="colors">
          <div class="color-taster fader">
            <div  v-for="color in colors" class="color" v-bind:id="color.id" v-on:mouseover="color.hovered=true" v-on:mouseleave="color.hovered=false" v-bind:key="color.id">
              <transition-group name="zoomIn">
                <p v-show="color.hovered" class="hex-codes" v-for="code in color.codes" v-bind:key="code">{{code}}</p>
                </transition-group>
            </div>
          </div>
        </article>
    </section>

    <section class="segment fonts">
      <div class="font first-font fader">
        <div class="font-titles">
          <h1>Sacramento</h1>
          <h3>Titles & Headers</h3>
        </div>
        <div class="font-sample">
          <p>The Pinsapo is an evergreen tree growing up to 30m tall, sometimes becoming irregular with age.</p>
        </div>
        <div style="clear: left;"></div>
      </div>
      <div class="font sec-font fader">
        <div class="font-titles">
          <h1>Cormorant</h1>
          <h3>Body text</h3>
        </div>
        <div class="font-sample">
          <p>The leaves are 2cm long and are strongly glaucous; pale blue-green.</p>
        </div>
        <div style="clear: left;"></div>
      </div>
      <div style="clear: left;"></div>
    </section>

    <section class="segment preview">
        <h1 class="fader">The Welcome Page</h1>
        <a class="fader" href="https://lesarboles.herokuapp.com/"><div class="previews  previews-one fader"></div></a>

        <h1 class="fader" >The Calendar</h1>
        <a class="fader" href="https://lesarboles.herokuapp.com/calendar"><div class="previews  previews-two fader"></div></a>

        <h1 class="fader">The Reservation Form</h1>
        <a class="fader" href="https://lesarboles.herokuapp.com/reservers/new"><div class="previews  previews-three fader"></div></a>

        <h1 class="fader">A Room Feature</h1>
        <a class="fader" href="https://lesarboles.herokuapp.com/house"><div class="previews  previews-four fader"></div></a>

    </section>

    <section class="segment tool-kit">
      <div class="tool-area title fader">
          <h1>Tools</h1>
      </div>
      <div class="tool-area main-tool fader"></div>

        <div class="sub-tools tool-area fader">
          <div class="sub-tool s-t-1"></div>
          <div class="sub-tool s-t-2"></div>
          <div class="sub-tool s-t-3"></div>
        </div>

        <div class="add-ons tool-area fader">
          <div class="add-on a-o-1"></div>
          <div class="add-on a-o-2"></div>
          <div class="add-on a-o-3"></div>
        </div>

    </section>
  </div>
</template>

<script>
import {bus} from "../main"
import ScrollMagic from 'scrollmagic'
export default {
  data() {
    return {
      colors: [
        {id:"c1", codes:["#e2c0cc"], hovered:false },
        {id:"c2", codes:["#bbd2e8"], hovered:false },
        {id:"c3", codes:["#f7f1ef"], hovered:false },
        {id:"c4", codes:["#a3b6a6"], hovered:false },
        {id:"c5", codes:["#b59cba"], hovered:false }
      ]
    }
  },
  created() {
    bus.$emit('pageChange', 4)
  },
  mounted() {
    var fader=document.getElementsByClassName("fader")
  	var controller = new ScrollMagic.Controller();
    for (var i=0; i<fader.length; i++){
      var scene = new ScrollMagic.Scene({
        triggerElement: fader[i]
      })
      .setClassToggle(fader[i], "show")
      .offset(-100)
      .reverse(false)
      .addTo(controller);
    }
  }
}
</script>


<style scoped lang="scss">
.fader {
  opacity: 0;
  transition: 1s;
}
.show {
  opacity: 1;
}
.page {
  width: 100%;
}
.size {
  position: fixed;
  top: 10%;
  z-index: 1;
  background-color: white;
  font-size: 20px;
}
.segment {
  position: relative;
  font-family: 'Open Sans', sans-serif;

}
//cover page
.cover {
  height: 100vh;
  width: 100%;
  background-color:  rgba(247, 241, 239, .7);
}
#title {
  position: relative;
  font-size: 15em;
  font-family: 'Sacramento', cursive;
  text-align: center;
  color: #5a5151;
  top: 20vh;
}

p {
  font-size: 1.8em;
  line-height: 1.4em;
}
h1 {
  font-size: 3em;
  padding-bottom: 3%;
}
h2 {
  font-size: 2em;
  padding-bottom: 2%;
}
h3 {
  font-size: 1.7em;
}
ul {

}
li {
  font-size: 1.6em;
  line-height: 1.3em;
}
a {
  font-size: 3em;
}
#in-link {
  -webkit-animation: wobble-hor-bottom 3s infinite both;
          animation: wobble-hor-bottom 3s infinite both;
}

//about page

.about, .breif, .palettes, .fonts, .preview .tool-kit {
  width: 100%;
  min-height: 100vh;
}
.col-two-third {
  width: 66.66%;
  float: left;
  min-height: 100vh;
  background-color:  rgba(187,	210,	232, 1);
  padding: 40vh 10% 0 10%;
}
.col-one-third {
  width: 33.33%;
  float: left;
  min-height: 100vh;

}
.logo {
  background-image: url("../assets/lap_logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}
.breif-right {
  background-color:  rgba(163, 182, 166, .7);
}
.breif-left {
  padding: 20vh 10% 0 10%;
  background-color: rgba(163, 182, 166, .4);
}
.deliverables, .link {
  width: 100%;
  min-height: 50vh;
  text-align: center;
  padding: 12vh 5% 0 5%;

}
.deliverables {

  padding: 12vh 5% 0 5%;
}
.link {
  color: #5a5151;
  background-color: rgba(163, 182, 166, .7);
  padding: 20vh 5% 0 5%;
}
.palette-text {
  text-align: center;
  width: 80%;
  margin: auto;
  min-height: 30vh;
  padding: 3vh 0;;


}
.colors {
  min-height: 70vh;
  width: 100%;
}
.color-taster {
  width: 80%;
  height: 100%;
  margin: auto;
}
.color {
  width: 20%;
  height: 70vh;
  float: left;
  text-align: center;
  position: relative;
  span {
    display: block;
    height: 100%;
  }
}

#c1 {
  background-color: #e2c0cc;
}
#c2 {
  background-color: #bbd2e8;
}
#c3 {
  background-color:  #f7f1ef;
}
#c4{
  background-color: #a3b6a6;
}

#c5 {
  background: #b59cba;

}
.hex-codes {
  position: relative;
  top:50%;
  letter-spacing: 1.5px;
  opacity: 1;
}
.zoomIn-enter-active {
  animation: zoomIn 1s forwards;
}
.zoomIn-leave-active /* .list-leave-active below version 2.1.8 */ {
    animation: zoomOut 1s forwards;
}


//fonts

.font {
  width: 100%;
  text-align: center;
  float: left;
  h3 {
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 3em;
  }

}
.first-font {
  float: left;
  font-family: 'Sacramento', cursive;
  border-bottom: 2px solid black;
}
.sec-font {
  font-family: 'Cormorant Garamond', serif;
  float: left;
}
.font-titles {
  width: 40%;
  //min-height: 50vh;
  float: left;
  padding: 20vh 0;


}
.font-sample {

  width: 60%;
  float: left;
  padding: 20vh 5%;

}
//screen grabs
.preview {
  min-height: 100vh;
  width: 100%;
  text-align: center;
  h1 {
    padding-top: 30px;
  }

}

.previews {
  //background-color: #3897f0;
  width: 80%;
  margin: auto;
  margin-bottom: 20vh;
  height: 80vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

}
.previews-one {
  background-image: url("../assets/lap_home.png");


}
.previews-two {
  background-image: url("../assets/lap_calendar.png");
}
.previews-three {
  background-image: url("../assets/lap_reserve.png");
}
.previews-four {
  background-image: url("../assets/lap_house.png");
}

//toolkit
.tool-kit {
  width: 100vw;
}
.title {
  padding: 25vh 0;
  text-align: center;
  font-size: 3em;
}
.tool-area {
  height: 50vh;
  width: 50vw;
  float: left;
}
.main-tool {
  background-image: url("../assets/rails.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;

}

.sub-tool {
  width: 33%;
  height: 100%;
  display: inline-block;
}
.add-on {
  width: 100%;
  height: 33%;
}
.s-t-1 {
  background-image: url("../assets/html.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;


}
.s-t-2 {
  background-image: url("../assets/css.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 73%;


}
.s-t-3 {
  background-image: url("../assets/js.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;


}
.a-o-1 {



}
.a-o-2 {
  background-image: url("../assets/heroku.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.a-o-3 {
}
//animation for link
@-webkit-keyframes wobble-hor-bottom {
  0% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  3.7% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  7.5% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  22% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  15% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  16.5% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
  25% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
}
@keyframes wobble-hor-bottom {
  0% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  7.5% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  15% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  22% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  30% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  37% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
  50% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
}
//media queries
@media only screen and (max-width: 1024px) and (orientation: portrait) {
  .col-two-third {
    width: 100%;
    float: left;
    min-height: 50vh;
    padding: 16vh 10% 0 10%;
  }
  .col-one-third {
    width: 100%;

    min-height: 50vh;
  }

  p {
    font-size: 2.3em;
    line-height: 1.4em;
  }
  h1 {
    font-size: 3.5em;
    padding-bottom: 3%;
  }
  h2 {
    font-size: 2.5em;
    padding-bottom: 2%;
  }
  h3 {
    font-size: 2.3em;
  }
  ul {

  }
  li {
    font-size: 2.1em;
    line-height: 1.3em;
  }
  a {
    font-size: 3.5em;
  }
  .color {
    width: 100%;
    height: 14vh;
    float: left;
    text-align: center;
    position: relative;
  }
  .hex-codes {
    top:40%;
  }
  .previews {
    margin-bottom: 1vh;
    height: 50vh;
  }
  #c5 {
    .hex-codes {
      display: inline-block;
      margin-right: 10px;
    }
  }
  //tools


}
@media only screen and (max-width: 823px) {
  #title {
    font-size: 9em;
  }
  .col-two-third {
    width: 100%;
    float: left;
    min-height: 50vh;
    padding: 15vh 5%;
  }
  .col-one-third {
    width: 100%;

    min-height: 50vh;
  }
  .logo {
    background-size: 25%;
  }
  //breif
  .breif-left {
    padding: 15vh 10%;
    background-color: #f7f7f7;
  }
  .deliverables {
    padding: 12vh 5%;
  }
  //previews
  .previews {
    width: 90%;
    height: 60vh;
    margin-bottom: 5vh;
  }
  .palette-text {
    padding: 5vh 0;;
  }
  //tools

  .tool-area {
    height: 30vh;
    width: 100vw;
    float: left;
  }
  .title {
    font-size: 1.5em;
    padding: 10vh 0;
  }
  #c5 {
    .hex-codes {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
@media only screen and (max-width: 823px) and (orientation:landscape) {
  .tool-area {
    width: 80vw;
    margin: auto;
    float: none;
    display: block;
    margin-bottom: 10px;
  }
  .main-tool{
    background-size: contain;
  }
  .s-t-2 {
    background-size: contain;
  }
  .s-t-3 {
    background-size: contain;
  }
  .add-on {
    width: 33%;
    height: 100%;
    float: left;
  }

}
@media only screen and (max-width: 700px) {
  .palette-text {
    width: 90%;
    margin: auto;
  }
  .color-taster {
    width: 90%;
    height: 100%;
    margin: auto;
  }
  .hex-codes {
    font-size: 1.5em;
  }
  .font-titles {
    width: 100%;
    float: left;
    padding: 10vh 0 5vh 0;
  }
  .font-sample {
    width: 100%;
    float: left;
    padding: 0 10vh 10vh 10vh;
  }
  .sec-font {
    border-bottom: 2px solid black;
  }

}
@media only screen and (max-width: 480px) {

    p {
      font-size: 1.5em;
      line-height: 1.4em;
    }
    h1 {
      font-size: 2.5em;
      padding-bottom: 3%;
    }
    h2 {
      font-size: 1.7em;
      padding-bottom: 2%;
    }
    h3 {
      font-size: 1.5em;
    }
    ul {

    }
    li {
      font-size: 1.5em;
      line-height: 1.3em;
    }
    a {
      font-size: 2.5em;
    }
    .font {
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1.5em;
      }
    }
  #title {
    font-size: 6em;
  }
  .hex-codes {
    top:40%;
    font-size: 1.3em;
  }
  .c5 {
    .hex-codes {
      display: inline-block;
      margin-right: 10PX;
    }
  }
  .color {
    width: 100%;
    height: 14vh;
    float: left;
    text-align: center;
    position: relative;
  }
  //font area

  .font-sample {
    padding: 0 2vh 10vh 2vh;
  }

  //previews area
  .previews {
    width: 90%;
    height: 50vh;
    margin-bottom: 1vh;
  }
  .logo {
    background-size: 50%;
  }
}
</style>
