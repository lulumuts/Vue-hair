<template class="body">
  <div class="login">


    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2">
    <h3 class="title">Sign In</h3>
  <mdb-input label="Material input" />
    <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>

    </b-jumbotron>


  </div>
</template>

<script>
import { mdbCard, mdbBtn, mdbInput } from 'mdbvue';
import firebase from 'firebase'

export default {
  name: 'login',
  components: {
    mdbCard,
    mdbBtn,
    mdbInput
  },
  data () {
    return {
      email: '',
      password: ''
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
    }
  }
}
</script>

<style scoped>
  .title{
    color:red;
  }


  .login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
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
