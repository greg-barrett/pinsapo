<template>
  <div class="contact page">

    <div class="half left">
      <transition name="appear">
        <form v-show="!submitted"action="#https://formcarry.com/s/mfCF2w7y8h7a" method="post" accept-charset="UTF-8">
          <h1>Let's talk!</h1>
          <input type="hidden" name="_gotcha">
          <label>First Name</label><br />
          <input name="FirstName" type="text" v-model="form.name" required><br />
          <label>Last Name</label><br />
          <input name="LastName" type="text" v-model="form.lastName" required><br />
          <label>Company Name</label><br />
          <input name="CompanyName" type="text" v-model="form.companyName"><br />
          <label>Email Address</label><br />
          <input name="Email" type="email" v-model="form.email" required ><br />
          <label>Message</label><br />
          <textarea name="Message" type="text" v-model="form.message"></textarea><br />
          <button type="submit" v-on:click.prevent="post">Submit</button>
        </form>
      </transition>
      <transition name="appear">
        <div class="reply" v-show="submitted">
          <h3>Hi {{form.name}} {{form.lastName}},</h3>
          <p>Thanks for getting in touch.</p>
          <p>We'll get back to you as soon as we can.</p>
          <p>All the best,</p>
          <p id="signed">Pinsapo</p>
        </div>
      </transition>
    </div>
    <div class="half right">
        <div class="narrow">
          <img class="logo" src="../assets/logo-l.png" />
        </div>
        <div class="address narrow" >
          <p>enquiries.pinsapo@gmail.com</p>
          <a href="https://github.com/gregthepeg4?tab=repositories"><img id="github" src="../assets/githublogo.png" /></a>
        </div>
    </div>
  </div>
</template>

<script>
import {bus} from "../main"

export default {
  data() {
    return {
      form: {
        name:"",
        lastName:"",
        companyName: "",
        email:"",
        message:""
      },//form
      submitted: false
    }//return
  },//data
  methods: {
    post() {
      this.$http.post("https://formcarry.com/s/mfCF2w7y8h7", this.form).then(function(data){
        this.submitted=true;
      });
    }
  },
  created() {
    bus.$emit('pageChange', 3)
  }
}

</script>


<style scoped lang="scss">
.page {
  height: 100%;
}
.half {
  height: 100%;
  float: left;
  font-family: 'Open Sans', sans-serif;
  padding-top: 100px;
  width: 50%;
  text-align: center;
}
.right {
  background-color: #F3F3F2;

}

.left {
    color: #16235a;
}
.logo {
  height: 100%;
}

h1 {
  font-size: 3em;;
  margin-bottom: 20px;

}
form {
  width: 80%;
  margin: auto;
}
label {
  font-size: 1.23em;
}
button {
  background-color: white;
  border: 1px solid #16235a;;
  height: 30px;
  width: 90px;
  color: #16235a;
}
button:hover {
  background-color: #F3F3F2;
}

input {
  width: 50%;
  border: none;
  height: 2.2em;
  border-bottom: 1px solid #16235a;;
  margin-bottom: 10px;
  font-size: 1.2em;
  -webkit-appearance: none;
  border-radius: 0;
}

textarea {
  width: 50%;
  height: 120px;
  border: 1px solid #16235a;
  margin: 15px 0;
  font-size: 15px;
}
.narrow {
  height: 50%;
}

.address {
  font-size: 1.5em;
  padding-top: 20px;
  color: gray;
  line-height: 30px;
}
#github {
  width: 150px;
  opacity: .5;
  transition: opactity .5s;
}
#github:hover {
  opacity: .8;
}
.reply {
  text-align: left;
  padding-top: 20px;
  width: 70%;
  margin: auto;
  font-size: 1.9em;
  line-height: 1.6em;

  p {
    padding-left: 30px;
  }
}
h3 {
  padding-bottom:20px;
  padding-left: 0px;
}
#signed {
  padding:30px 0 0 18vw;
  font-size: 2.1em;
}
//zoom out
.appear-enter-active {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
	        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;

}
//zoom in
.appear-leave-active {

  -webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

}

//zooming out
@-webkit-keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
@keyframes scale-out-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
}
//zooming in
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}

@media only screen and (max-width: 1366px) {
  input, textarea {
    width: 80%;
  }

}
@media only screen and (max-width: 823px) {
  .half {
    width: 100%;
    display: inline-block;
    float: none;
    font-family: 'Open Sans', sans-serif;
    padding-top: 55px;
    text-align: center;
    transition: height 2s ease-in;
  }

  .reply {
    p {
      padding-left: 0;
    }
    width: 60%;
    margin-bottom: 60px;

  }
  .page {
    height: auto;
  }
  .right {
    padding-top: 0;
  }
  .left {
    padding-bottom: 20px;
  }
  img {
    width: 60%;
  }
}
@media only screen and (max-width: 480px) {
  .reply {
    width: 90%;
    margin-bottom: 30px;
    font-size: 1.4em;
  }
  img {
    width: 90%;
  }
  input, textarea {
    width: 90%;
  }
  h1 {
    font-size: 3em;
  }
  .right {
    background-color: #fff;
  }
}

@media only screen and (max-width: 320px) {
  h1 {
    font-size: 2em;
  }
  label {
    font-size: 1.2em;
  }
}
</style>
