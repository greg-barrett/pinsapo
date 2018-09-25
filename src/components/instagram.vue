<template>
  <div class="instagram page">

    <section class="segment cover">
      <h1 id="title">
        Instagram<br /> Clone
      </h1>
    </section>

    <section class="segment about">
      <div class="col-two-third">
        <p>Instagram is a social media platform for creating and sharing photos and videos.
        First Launched in 2010, it has grown into a titan of the social media market, supported
        by 100s of millions of users.</p>
      </div>
      <div class="col-one-third">
        <div class="logo-area">
        </div>
      </div>
    </section>

    <section class="segment breif">
      <div class="breif-text">
        <h1>Brief</h1>
        <p>For this project I needed to make a fully functional clone of Instgram, paying careful attention
        to styling and responsivie design. I completed this project as a capstone to a Ruby on Rails coding course.
      </p>

      </div>
      <div class="deliverables">
        <h2>Website Features</h2>
        <ul>
          <li>Secure Authentication System</li>
          <li>Image Uploader</li>
          <li>Fast Back-end Database</li>
          <li>Comment, Like, Follow</li>
          <li>Search</li>
        </ul>
      </div>
      <div class="link">
        <a href="https://insteadgram1.herokuapp.com/users/sign_in">Preview</a>
      </div>

    </section>
    <section class="segment palettes">
      <div class="palette-text">
        <h1>Palette</h1>
        <p>Instagram has a a simple pastle palette in shades of gray. The palette also includes
        cool blues for buttons and is accented by its iconic logo color gradient.</p>

      </div>
      <article class="colors">
        <div class="color-taster">

          <div class="color c1">
            <div class="color-info">
              <p>#e8e8e8</p>
            </div>

          </div>
          <div class="color c2">
            <div class="color-info">
              <p>#f7f7f7</p>
            </div>
          </div>
          <div class="color c3">
            <div class="color-info">
              <p>#eee</p>
            </div>
          </div>
          <div class="color c4">
            <div class="color-info">
              <p>#3897f0</p>
            </div>
          </div>
          <div class="color c5">
            <div class="color-info">
              <p>#1400c8</p>
              <p>#b900b4</p>
              <p>#f50000</p>
            </div>
          </div>

        </div>
      </article>

    </section>
    <section class="segment fonts">
      <div class="a-font">
        <div class="font-name">
          <h1>Satisfy</h1>
          <h3>Logos</h3>
        </div>
        <div class="font-sample">
          <p>The Abies pinsapo is an evergreen tree growing up to 30m tall, sometimes becoming irregular with age.</p>
        </div>

      </div>
      <div class="b-font">
        <div class="font-name">
          <h1>Roboto</h1>
          <h3>Headers & Body</h3>
        </div>
        <div class="font-sample">
          <p>The leaves are 2cm long and are strongly glaucous; pale blue-green.</p>
        </div>

      </div>

    </section>

    <section class="segment preview">
      <div class="preview-main">

      </div>
    </section>

    <section class="segment tool-kit">
      <div class="top-section">
        <div class="title">
          <h1>Tools</h1>
        </div>
        <div class="main-tool">

        </div>

      </div>
      <div class="bottom-section">
        <div class="sub-tools">
          <div class="sub-tool s-t-1">

          </div>
          <div class="sub-tool s-t-2">

          </div>
          <div class="sub-tool s-t-3">

          </div>

        </div>
        <div class="add-ons">
          <div class="add-on a-o-1">

          </div>
          <div class="add-on a-o-2">

          </div>
          <div class="add-on a-o-3">

          </div>

        </div>

      </div>


    </section>
  </div>
</template>

<script>
import {bus} from "../main"
import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'ScrollMagicGSAP'
export default {
  mounted() {
    var slides=document.getElementsByClassName("segment")
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    for (var i=0; i<slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .addTo(controller);
    }
  },
  created() {
    bus.$emit('pageChange', 4)

  }

}
</script>


<style scoped lang="scss">
html, body {
  height: 100%;
}
.page {
  height: 100%;
  h1 {
    text-align: center;
    font-size: 3.5em;
    padding: 40px 0 30px 0
  }
}
.segment {
  width: 100%;
  height: 100%;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 200px;
  background-color: white;

}


.cover {
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  //padding-top: 15%;
}
.about, .breif, .palettes {
  p {
    font-size: 2em;
    line-height: 2.4em;
  }
}
#title {
  font-family: 'Satisfy', cursive;
  color: white;
  font-size: 12em;
  text-align: center;
  opacity: 0;
  animation: fade-in 2s 1s forwards;
  position: relative;
  top: 25%;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.col-two-third {
  width: 66.66%;
  height: 100%;
  float: left;
  background-color: #eee;
  p {
    width: 80%;
    margin: auto;
    padding-top: 20%;
  }

}
.col-one-third {
  width: 33.33%;
  height: 100%;
  float: left;
  background-color: white;
}
.logo-area {
  width: 100%;
  height: 100%;
  background-image: url("../assets/insta-logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
}


.breif-text {
  float: left;
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  color: white;
  width: 50%;
  height: 100%;
  p {
    width: 80%;
    margin: auto;
  }
}

.deliverables, .link{
  float: left;
  height: 50%;
  width: 50%;
  text-align: center;
}
.deliverables {
  background-color: #f7f7f7;
  h2 {
    font-size: 3em;
    padding: 40px 0 20px 0
  }
  li {
    font-size: 1.5em;
    line-height: 1.8em;
    text-align: center;

  }
}
.link {
  float: left;
  height: 50%;
  width: 50%;
  background-color: #eee;
  a {
    font-size: 3em;
    display: block;
    position: relative;
    top: 50%;

  }
}
.palettes {
  background-color: white;

}

.palette-text {
  width: 100%;
  height: 40%;
  h1 {
    text-align: center;
    font-size: 3em;
    padding: 40px 0 20px 0
  }
  p {
    line-height: 1.5em;
    width: 70%;
    margin: auto;
    text-align: center;
    font-size: 1.5em;
  }

}
.colors {
  width: 100%;
  height: 60%;
}

.color-taster {
  width: 70%;
  margin: auto;
  height: 80%;
}
.color-info {
  width: 100%;
  position: absolute;
  top: 50%;
  font-size: .8em;

  text-align: center;
}
.color {
  display: inline-block;
  width: 20%;
  height: 100%;
  position: relative;

}
.c1 {
  background-color: #e8e8e8;
}
.c2 {
  background-color: #f7f7f7;
}
.c3 {
  background-color: #eee;
}
.c4{
  background-color: #3897f0;
}

.c5 {
  background: #d6249f;
  background: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  color: white;
  .color-info{
    top: 40%;
    p {
      line-height: 2em;
    }
  }
}
.fonts {
  background-color: white;
  h1 {
    font-size: 6em;
    text-align: center;
    padding: 40px 0 30px 0
  }
  h3 {
    font-family: 'Open Sans', sans-serif;
    text-align:  center;
    font-size: 2em;
    font-weight: bold;
    padding-top: 10%;
  }
}
.a-font {
  padding-top: 2%;
  width: 100%;
  height: 50%;
  font-family: 'Satisfy', cursive;
  border-bottom: 8px solid black;
}
.b-font {
  padding-top: 2%;
  width: 100%;
  height: 50%;
  font-family: 'Roboto', sans-serif;

}
.font-name {
  width: 33.33%;
  height: 100%;
  display: inline-block;
  float: left;
}

.font-sample {
  display:  inline-block;
  width: 66.66%;
  height: 100%;
  float: left;
  font-size: 3em;
  p {
    width: 90%;
    line-height: 2em;
  }

}


.preview {
  background-color: #eee;
  padding-top: 2%;
}

.preview-main {
  margin:auto;
  width: 90%;
  height: 90%;
  background-image: url("../assets/profile.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}


.tool-kit {
  background-color: white;

}

.top-section {
  width: 100%;
  height: 40%;

}
.title {
  width: 50%;
  height: 100%;

  float: left;
  h1 {
    font-size: 4em;
    position: relative;
    top: 40%;
    font-weight: bold;
    text-align: center;

  }
}
.main-tool {
  float: left;
  width: 50%;
  height: 100%;
  background-image: url("../assets/rails.png");
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  display: inline-block;
}
.bottom-section {
  width: 100%;
  height: 60%;
}
.sub-tools, .add-ons {
  width: 50%;
  height: 100%;

  display: inline-block;
}

.sub-tool {
  width: 33.33%;
  display: inline-block;

  height: 100%;
}
.add-on {
  width: 100%;
  height: 33.33%;

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
  background-size: 75%;


}
.a-o-1 {
  background-image: url("../assets/devise.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30%;


}
.a-o-2 {
  background-image: url("../assets/heroku.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;


}
.a-o-3 {
  background-image: url("../assets/aws-logo-new.gif");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;

}
@media only screen and (min-width: 1366px) {

}
@media only screen and (max-width: 1365px) {

}
@media only screen and (max-width: 823px) {
  #title {
    font-size: 10em;
    top: 10%;
  }
  .col-two-third {
    p{
      padding-top: 15%;
      width: 90%;
      line-height: 1.5em;
    }
  }
  .page {
    h1 {
      font-size: 2em;
      padding: 15px 0;
    }
    h2{
      font-size: 1.5em;
      padding: 10px 0;
    }
    li {
      font-size: 1.3em;
      line-height: 1.6em;
    }
    p {
      font-size: 1.3em;
      line-height: 1.6em;
      width: 80%;
    }
  }

  .breif-text {
    width: 100%;
    height: 50%;
    float: none;

  }

  .deliverables, .link {
    width: 50%;

    height: 60%;
  }
  .link {

     a{
      top: 30%;
    }
  }
  .palette-text{
    p {
      width: 90%;
    }
  }
  .color-taster {
    width: 90%;
  }
  .fonts {
    text-align: center;
  }
  .a-font, .b-font {
    padding-top: 30px;
    width:50%;
    height: 100%;
    float: left;
    border-bottom: none;
  }
  .a-font {
    border-right: 2px solid black;
  }
  .font-name {
    width: 100%;
    height: auto;
    float: none;
    h3 {
      font-size: 1em;
      padding-top: 10px;
    }
  }
  .font-sample {
    width: 100%;
    float: none;
    text-align: center;
    p {
      line-height: 1.5em;
      font-size: .7em;
      padding-top: 20px;
      width: 90%;
      margin: auto;
    }
  }

  .title {
    width: 100%;
    height: auto;
  }
  .top-section {
    height: 30%;
  }
  .main-tool {
    width: 100%;
    height: 50%;
    background-size: contain;
  }
  .sub-tools {
    width: 100%;
    height: 30%;
  }
  .s-t-1, .s-t-2, .s-t-3 {
    background-size: contain;
  }
  .add-ons {
    width: 100%;
  }
  .add-on {
    height: 20%;
    background-size: contain;
  }


}
@media only screen and (max-width: 768px) and (orientation:portrait) {
  .breif-text {
    width: 100%;
    height: 60%;
    float: none;
  }
  .deliverables, .link {
    width: 100%;
    float: none;
    height: 30%;
  }
  .link {
    height: 10%;
     a{
      top: 20px;;
    }
  }
  .palette-text{
    p {
      width: 90%;
    }
  }
  .color-taster {
    width: 90%;
  }
  .fonts {
    text-align: center;
  }
  .font-name {
    width: 100%;
    height: auto;
    float: none;
    h3 {
      padding-top: 10px;
    }
  }
  .font-sample {
    width: 100%;
    float: none;
    text-align: center;
    p {
      line-height: 2em;
      padding-top: 40px;
      width: 100%;
    }
  }

  .title {
    width: 100%;
    height: auto;
  }
  .top-section {
    height: 30%;
  }
  .main-tool {
    width: 100%;
    height: 50%;
    background-size: contain;
  }
  .sub-tools {
    width: 100%;
    height: 30%;
  }
  .s-t-1, .s-t-2, .s-t-3 {
    background-size: contain;
  }
  .add-ons {
    width: 100%;
  }
  .add-on {
    height: 20%;
  }


}

@media only screen and (max-width: 480px) {
  #title {
    font-size: 5.5em;
  }
  .about, .breif, .palettes, .fonts {
    p {
      line-height: 1.3em;
      font-size: 1.5em;
    }
    h1 {
      font-size: 2.5em;
      padding: 20px 0;
    }

    h2 {
      font-size: 2em;
      padding: 3% 0;
    }
    li {
      line-height: 1.2em;
      font-size: 1.5em;

    }
  }
  .col-two-third {
    width: 100%;
    height: 80%;
    float: none;
    p {
      width: 90%;

    }
  }
  .col-one-third {
    width: 100%;
    height: 18%;
    float: none;
    margin-top: 2%;
  }
  .logo-area {
    width: 100%;
    background-size: contain;
  }
  .breif {
    p {
      font-size: 1.5em;
      width: 90%;
    }

  }
  .link {
    a {
      font-size: 2.1em
    }
  }
  .palettes {
    h1 {
      padding: 20px 0;
    }
    p {
      text-align: left;
      font-size: 1.5em;
    line-height: 1.5em;
    }
  }
  .color {
    width: 100%;
    height: 20%;
    p {
      text-align: center;
    }
  }
  .color-info {
    p {
      display: inline-block;
      margin-right: 10px;
    }
  }
  .fonts {
    h1 {
      padding: 10px 0;
    }
    h3 {
      font-size: 1.5em;
      padding: 0 0 10px 0;
    }
  }
  .fonts {
    background-color: white;
  }
  .a-font {
    border-bottom: 8px solid black;
  }
  .b-font, .a-font {
    padding-top: 2%;
    width: 100%;
    height: 50%;
  }
  .font-name {
    width: 100;
    height: 30%;
    display: inline-block;
    float: left;
  }

  .font-sample {
    width: 100%;
  }
  .font-sample {
    p {
      padding-top: 0;
      width: 90%;
      margin: auto;
      font-size: .8em;
    }
  }
  .main-tool {
    margin-bottom: 20px;
  }



}
</style>
