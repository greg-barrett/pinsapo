<template>
  <div class="contact page">
    <a href="#contact"></a>
    <div class="half left">
      <transition name="appear">
        <form v-show="!submitted"action="https://formcarry.com/s/mfCF2w7y8h7" method="post" accept-charset="UTF-8">
          <h1> Lets talk!</h1>
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
          <img src="../assets/pinsapo4.png" />
        </div>
        <div class="address narrow" >
          <p>gbarrett15@gmail.com</p>
          <a href="https://github.com/gregthepeg4?tab=repositories"><img id="github" src="../assets/githublogo.png" /></a>
        </div>
    </div>
  </div>
</template>

<script>
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
  }
}

</script>


<style scoped lang="scss">

.half {
  height: 100%;
  float: left;
  font-family: 'Montserrat', sans-serif;
  padding-top: 3%;
  width: 50%;
  text-align: center;
}


img {
  width: 300px;
}

h1 {
  font-size: 40px;
  margin-bottom: 20px;

}
form {
  width: 100%;
  font-size: 20px;
}
button {
  background-color: white;
  border: 1px solid grey;
  height: 30px;
  width: 90px;

}

input {
  width: 60%;
  border: none;
  height: 30px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  font-size: 15px;
}
textarea {
  width: 60%;
  height: 120px;
  border: none;
  font-size: 15px;
}
.narrow {
  height: 50%;
}

.address {
  padding-top: 20px;
  color: gray;
  line-height: 30px;
}
#github {
  width: 150px;
  opacity: .5
}

.reply {
  text-align: left;
  padding-top: 15%;
  width: 70%;
  margin: auto;
  font-size: 25px;
  line-height: 50px;

  p {
    padding-left: 10px;
  }
}
h3 {
  padding-left: 0px;
}
#signed {
  text-align: center;
  font-size: 30px;
  padding-left: 0px;
}
//zoom out
.appear-enter-active {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
	        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;

}
//zoom in
.appear-leave-active {

  -webkit-animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s both;
	        animation: scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s both;

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
</style>
