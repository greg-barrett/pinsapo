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
  }

}
</script>


<style scoped lang="scss">
html, body {
  //height: 800%;
  height: 100%;
}
.page {
  //width: 100%;
  //height: 700%;
  height: 100%;
}
.segment {
  //height: 14.28%;
  height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;

}


.cover {
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  padding-top: 15%;
  h1 {
    font-family: 'Satisfy', cursive;
    color: white;
    font-size: 150px;
    text-align: center;
    opacity: 0;

  }
}
#title {
  animation: fade-in 2s 1s forwards;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.about {
  h1 {
    font-size: 60px;
    margin: 50px 0 50px 20px;
  }


}
.col-two-third {
  width: 66.66%;
  height: 100%;
  float: left;
  background-color: #eee;
  p {
    font-size: 30px;
    line-height: 60px;
    width: 70%;
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

.breif {

}
.breif-text {
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
  color: white;
  width: 100%;
  height: 50%;

  h1 {
    text-align: center;
    font-size: 60px;
    padding: 40px 0
  }
  p {
    width: 70%;
    margin: auto;
    font-size: 25px;
    line-height: 40px;
    text-align: justify;

  }
}

.deliverables, .link {
  width: 50%;
  height: 50%;
  float: left;
}
.deliverables {
  background-color: #f7f7f7;
  h2 {
    font-size: 30px;
    padding: 5% 0 2% 0%;
    text-align: center;

  }
  li {
    text-align: center;
    font-size: 20px;
    line-height: 30px;


  }
}
.link {
  background-color: #eee;
  position: relative;
  a {
    font-size: 35px;
    display: block;
    position: absolute;
    top: 40%;
    left: 40%;

  }
}
.palettes {
  background-color: white;

}

.palette-text {
  width: 100%;
  height: 40%;
  h1 {
    font-size: 60px;
    padding: 30px 0 30px 0;
    text-align: center;
  }
  p {
    font-size: 20px;
    line-height: 35px;
    width: 70%;
    margin: auto;
    text-align: justify;
  }

}
.colors {
  width: 100%;
  height: 60%;
  position: relative;
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
  font-size: 20px;
  vertical-align: bottom;
  text-align: center;
}
.color {
  display: inline-block;
  width: 20%;
  min-height: 100%;
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
  line-height: 25px;
  }
}
.fonts {
  background-color: white;
  h1 {
    font-size: 80px;
    text-align: center;
    padding: 18% 0 0 0;
  }
  h3 {
    font-family: Montserrat;
    text-align:  center;
    font-size: 20px;
    font-weight: bold;
    padding-top: 10%;
  }
}
.a-font {
  width: 100%;
  height: 50%;
  font-family: 'Satisfy', cursive;
  border-bottom: 8px solid black;
  p {
    padding: 2% 0 0 0;
  }
}
.b-font {
  width: 100%;
  height: 50%;
  font-family: 'Roboto', sans-serif;
  p {
    padding: 5% 0 0 0;
  }
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
  font-size: 50px;
  line-height: 70px;

}


.preview {
  background-color: #eee;
  padding-top: 5%;
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
  background-color: #f7f7f7;
  float: left;
  h1 {
    font-size: 120px;
    font-weight: bold;
    text-align: center;
    line-height: 200%;
  }
}
.main-tool {
  float: left;
  width: 50%;
  height: 100%;
  background-image: url("../assets/rails.png");
  background-position: center;
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
</style>
