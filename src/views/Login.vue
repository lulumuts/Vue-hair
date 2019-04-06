<template>
  <div class="login">
    <div>
      <div class="color">
      <div class="bg d-flex justify-content-center">
        <mdb-card class="card ">
          <h1 class="title">SIGN IN</h1>
          <mdb-card-body>
          <mdb-input type="text" v-model="email" placeholder="Email" size="lg"/>
          <mdb-input type="password" v-model="password" placeholder="Password" />

            <mdb-btn @click="login" color="dark">LOGIN</mdb-btn>
              <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'

import { mdbCard, mdbBtn, mdbInput, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText} from 'mdbvue';

export default {
  name: 'login',

  components: {
    mdbCard,
    mdbBtn,
    mdbInput,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,

  },
  data () {
    return {
      email: '',
      password: '',
      color: 'darkpink'
    }
  },

  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    inputEvent(e) {
			console.log(e);
      this.$emit('inputEvent', e);
		if ((e.type == 'focus' || e.type == 'keyup') && this.value.length > 0) {
				this.focus = true;
			}
			else {
				this.focus = false;
			 }
	  }
  }
}
</script>

<style scoped>
  body, html {
    height: 100%;
  }
  .bg {
    /* The image used */
    background-image: url("https://res.cloudinary.com/format-magazine-production/image/upload/c_crop,h_1333,w_1600,x_0,y_648,f_jpg,f_auto/dpr_3.0/c_scale,w_767,h_639/juliana_kasumu_14");

    background-size:contain;
    position: 1000px 100px;
    /* Full height */
    height: 101vh;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container{
    padding:17.7vh;
  }
  .color{
    margin-top:-5vh;
    height:100%;
  }
  .card{

    margin:auto;
    display:flex;
    margin-top:15vh;
    padding:5%;
    opacity:0.95;

  }

  .title{
  padding:5%;
  }
  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 80%;
    padding: 15px;

  }
  button {
    margin-top: 20px;


    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a{
    text-decoration: underline;
    cursor: pointer;
  }
  .lg {
   font-size: 4vh;
  }
</style>
