<template>
  <div class="instagram page">
<div class="size">
  Width :{{windowWidth}} , Height: {{windowHeight}}
</div>
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
      <div class="col-one-third logo">
      </div>
      <div style="clear: left;"></div>
    </section>

    <section class="segment breif">
      <div class="col-two-third breif-left">
        <h1>Brief</h1>
        <p>For this project I needed to make a fully functional clone of Instgram, paying careful attention
        to styling and responsivie design. I completed this project as a capstone to a Ruby on Rails coding course.
      </p>

      </div>
      <div class="col-one-third breif-right">
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
        <div style="clear: left;"></div>
      </div>
      <div style="clear: left;"></div>
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
              <p class="hex-codes">#e8e8e8</p>
          </div>
          <div class="color c2">
              <p class="hex-codes">#f7f7f7</p>
          </div>
          <div class="color c3">
              <p class="hex-codes">#eee</p>
          </div>
          <div class="color c4">
              <p class="hex-codes">#3897f0</p>
          </div>
          <div class="color c5">
              <p class="hex-codes">#1400c8</p>
              <p class="hex-codes">#b900b4</p>
              <p class="hex-codes">#f50000</p>
          </div>

        </div>
      </article>

    </section>
    <section class="segment fonts">
      <div class="font first-font">
        <div class="font-titles">
          <h1>Satisfy</h1>
          <h3>Logos</h3>
        </div>
        <div class="font-sample">
          <p>The Abies pinsapo is an evergreen tree growing up to 30m tall, sometimes becoming irregular with age.</p>
        </div>
        <div style="clear: left;"></div>
      </div>
      <div class="font sec-font">
        <div class="font-titles">
          <h1>Roboto</h1>
          <h3>Headers & Body</h3>
        </div>
        <div class="font-sample">
          <p>The leaves are 2cm long and are strongly glaucous; pale blue-green.</p>
        </div>
        <div style="clear: left;"></div>
      </div>
      <div style="clear: left;"></div>
    </section>

    <section class="segment preview">

        <div class="previews  previews-one"></div>
        <div class="previews  previews-two"></div>
        <div class="previews  previews-three"></div>
        <div class="previews  previews-four"></div>

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

export default {
  data() {
    return {
      windowWidth:0,
      windowHeight:0
    }
  },
  methods: {
    width(e) {
      console.log(e.currentTarget.innerWidth)
      this.windowWidth= e.currentTarget.innerWidth;
      this.windowHeight= e.currentTarget.innerHeight;
    }
  },
  created() {
    bus.$emit('pageChange', 4)
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.width);
  })
}

}
</script>


<style scoped lang="scss">
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
  background-image: linear-gradient(-135deg,#1400c8,#b900b4,#f50000);
}
#title {
  position: relative;
  font-size: 15em;
  font-family: 'Satisfy', cursive;
  text-align: center;
  color: white;
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
//about page

.about, .breif, .palettes, .fonts, .preview .tool-kit {
  width: 100%;
  min-height: 100vh;
}
.col-two-third {
  width: 66.66%;
  float: left;
  min-height: 100vh;
  background-color: #eee;
  padding: 40vh 10% 0 10%;
}
.col-one-third {
  width: 33.33%;
  float: left;
  min-height: 100vh;

}
.logo {
  background-image: url("../assets/insta-logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;

}
.breif-right {
  background-color: #eee;
}
.breif-left {
  padding: 20vh 10% 0 10%;
  background-color: #f7f7f7;
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
  color: white;

  background-color: #3897f0;
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
  .hex-codes {
    top:43%;
  }
}
.hex-codes {
  position: relative;
  top:50%;
}
//fonts

.font {
  width: 100vw;
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
  font-family: 'Satisfy', cursive;
  border-bottom: 2px solid black;
}
.sec-font {
  font-family: 'Roboto', sans-serif;
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
  width: 100vw;


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
  background-image: url("../assets/profile.png");

}
.previews-two {
  background-image: url("../assets/profile.png");
}
.previews-three {
  background-image: url("../assets/profile.png");
}
.previews-four {
  background-image: url("../assets/profile.png");
}

//toolkit
.tool-kit {

}
.top-section {
  width: 100%;
  height: 40vh;

}
.title {
  width: 50%;
  float:left;
  height: 100%;

  h1 {
    text-align: center;
    font-size: 5em;
    padding: 15vh 0;
  }
}
.main-tool {
  float:left;
  width: 50%;
  height: 100%;
  background-image: url("../assets/rails.png");
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;

}
.bottom-section {
  width: 100%;
  height: 60vh;
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
  background-size: 70%;


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
//media queries

@media only screen and (max-width: 823px) {
}
</style>
