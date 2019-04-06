<template>
  <div class="home">
<div class="bg d-flex justify-content-center">
<mdb-container fluid class="container">

<mdb-row>
  <mdb-col md="4" >
  <mdb-card class="line-card">
    <mdb-card-image class="card-image" src="https://i.pinimg.com/564x/bb/78/ef/bb78efb90fd762e19f3042aea8df7ffa.jpg" alt="Card image cap"></mdb-card-image>
    <h2 class="title">BRAIDS</h2>
  </mdb-card>
  </mdb-col>

  <mdb-col md="4">
    <mdb-card class="line-card">
    <mdb-card-image class="card-image" src="https://i.pinimg.com/564x/05/b4/08/05b4081aa923579b29ebf62a61d2f785.jpg" alt="Card image cap"></mdb-card-image>
    <h2 class="title">NATURAL</h2>
  </mdb-card>
  </mdb-col>
  <mdb-col md="4">
    <mdb-card class="card-three">
    <mdb-card-image class="card-image" src="https://i.pinimg.com/564x/b7/76/a1/b776a112a82bf2a349a8dcb0a27d01f8.jpg" alt="Card image cap"></mdb-card-image>
    <h2 class="title">LINES</h2>
  </mdb-card>
  </mdb-col>
  <mdb-col md="4">
    <mdb-card class="card">
    <mdb-card-image class="card-image" src="https://i.pinimg.com/564x/bf/cb/d7/bfcbd72513ce650b746a7dae3bd8e3b5.jpg?b=t" alt="Card image cap"></mdb-card-image>
    <h2 class="title">LOCS</h2>
  </mdb-card>
  </mdb-col>

  <mdb-col md="4">
    <mdb-card class="line-card">
    <mdb-card-image class="card-image" src="https://i.pinimg.com/564x/f1/f9/81/f1f981e2eb847dd353a5afdf0d8d6458.jpg" alt="Card image cap"></mdb-card-image>
    <h2 class="title">LOW CUT</h2>
  </mdb-card>
  </mdb-col>

  <mdb-col md="4">
    <mdb-card class="line-card">
    <mdb-card-image class="card-image image" src="https://i.pinimg.com/564x/45/02/c5/4502c558ec806f563613acfe8b4f013a.jpg" alt="Card image cap"></mdb-card-image>
    <h2 class="title">THREADED</h2>
  </mdb-card>
  </mdb-col>

</mdb-row>
    <button @click="logout">Logout</button>
</mdb-container>
  </div>
  </DIV>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
import { mdbContainer, mdbRow, mdbCol,mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn} from 'mdbvue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },

  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
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
 .home {
 width:100%;
 }
 .card-body{
  backgroundColor:transparent;
 }

 .line-card{
 height:92%;

 }
 .card-three{
 height:92%;
 }

 .container{
  padding: 2%;

 }
 .card-image{

    /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
      filter: gray; /* IE5+ */
      color:red;
      -webkit-filter: grayscale(2); /* Webkit Nightlies & Chrome Canary */
      -webkit-transition: all .5s ease-in-out;
    }

    .card-image:hover {
    filter: none;
      -webkit-filter: grayscale(0);

    }

    .title{
      margin-top:-15%;
      z-index:1;
      color:white;
      text-align:left;
      margin-left:5%;
    }
</style>
