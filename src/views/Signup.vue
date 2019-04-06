<template>
  <div class="sign-up">
  <div class="bg d-flex justify-content-center">
    <div class="container">
      <mdb-card class="form" >
        <mdb-card-body color="elegant" class="white-text">
          <h2>SET UP YOUR ACCOUNT</h2>
            <form-wizard  @on-complete="Signup" title="" subtitle="" color="#fca6d8">
              <tab-content>
                 <mdb-input type="text" v-model="email" placeholder="Email" />
                  <mdb-input type="password" v-model="password" placeholder="Password" />
              </tab-content>
              <tab-content>
              <mdb-input type="text" placeholder="Hair Type" />
              <mdb-input type="text" placeholder="Hair Products" />

               </tab-content>
               <tab-content>
               <mdb-input type="text" placeholder="Hair Type" />
               <mdb-input type="text" placeholder="Hair Products" />
               </tab-content>
                 <span>or go back to <router-link to="/login">login</router-link>.</span>
            </form-wizard>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { mdbCard, mdbBtn, mdbInput, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText} from 'mdbvue';

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    mdbInput,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },
  methods: {
    Signup: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Your account has been created !')
        },
        (user) => {
          this.$router.replace('login')
        },
        function (err) {
          alert('Oops. ' + err.message)
        }
      )
    },
    onComplete: function (){
      alert('Yay. Done!');
   }
  },
  props: {

    subtitle: {
      type: String,
      default: 'Split a complicated flow in multiple steps'
    },
    nextButtonText: {
      type: String,
      default: 'Next'
    },
    backButtonText: {
      type: String,
      default: 'Back'
    },
    finishButtonText: {
      type: String,
      default: 'Finish'
    },
    stepSize: {
      type: String,
      default: 'md',
      validator: (value) => {
        let acceptedValues = ['xs', 'sm', 'md', 'lg']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    /***
    *  Sets validation (on/off) for back button. By default back button ignores validation
    */
    validateOnBack: Boolean,
    /***
    * Applies to text, border and circle
    */
    color: {
      type: String,
      default: '#e74c3c' //circle, border and text color
    },
    /***
    *  Is set to current step and text when beforeChange function fails
    */
    errorColor: {
      type: String,
      default: '#8b0000'
    },
    /**
    * Can take one of the following values: 'circle|square|tab`
    */
    shape: {
      type: String,
      default: 'circle'
    },
    /**
    * name of the transition when transition between steps
    */
    transition: {
      type: String,
      default: '' //name of the transition when transition between steps
    },
    /***
    * Index of the initial tab to display
    */
    startIndex: {
      type: Number,
      default: 0
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
    background-image: url("https://saintheron.com/wp-content/uploads/2016/04/shani.jpg");
    background-size:contain;
    position: 1000px 100px;
    /* Full height */
    height: 101vh;

    /* Center and scale the image nicely */
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .login {
    margin-top: 40px;
  }

  input {
    margin: 10px 0;
    width: 100%;
    padding: 15px;
  }
  .container {
  padding:5%;
  }
  .form{

  margin-top:18vh;
  opacity:0.9;
  backgroundColor: grey;
  }
  button {
    margin-top: 20px;
    width: 10%;
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
</style>
