<template>
  <div class="home">
<div class="">
<mdb-card-group>

  <mdb-card class="card-image-one">
  <router-link to="/braids">
    <mdb-card-body style="margin-top:60%;">
      <mdb-card-title tag="h5" style="color:white;"><strong>GET YOUR INSPIRATION!</strong></mdb-card-title>
      <mdb-card-text style="color:white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam. Porta nibh venenatis cras sed felis.</mdb-card-text>
      <mdb-card-text style="font-size:3vh;color:white;">LETS GET STARTED!</mdb-card-text>
    </mdb-card-body>
    </router-link>
  </mdb-card>

  <mdb-card class="card-image-two">
    <mdb-card-body  style="margin-top:60%;">

      <mdb-card-title tag="h5">Panel title</mdb-card-title>
      <mdb-card-text style="color:white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam. Porta nibh venenatis cras sed felis.</mdb-card-text>
      <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
    </mdb-card-body>
  </mdb-card>
  <mdb-card class="card-image-three">
    <mdb-card-body style="margin-top:60%;">
      <mdb-card-title tag="h5">Panel title</mdb-card-title>
      <mdb-card-text>This is a wider panel with supporting text below as a natural lead-in to additional content. This
        panel has even longer content than the first to show that equal height action.</mdb-card-text>
      <mdb-card-text small muted>Last updated 3 mins ago</mdb-card-text>
    </mdb-card-body>
  </mdb-card>
</mdb-card-group>
    <button @click="logout">Logout</button>

  </div>
  </DIV>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src
import {  mdbRow, mdbCol, mdbCard, mdbCardImage,  mdbCardText, mdbBtn, mdbCardBody, mdbCardTitle, mdbCardGroup } from 'mdbvue';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbCardGroup
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
 .center-image{
  height:100vh;
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
 height:400px;
 }
 .card-image-one{
      background-image: url("https://i.pinimg.com/564x/4b/b6/e1/4bb6e13fdeea90adf14a018d2525b91f.jpg");
      background-size:contain;
      position: 1000px 100px;
       /* Full height */
      height: 101vh;
       /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
      filter: gray; /* IE5+ */
      color:red;
      -webkit-filter: grayscale(2); /* Webkit Nightlies & Chrome Canary */
      -webkit-transition: all .5s ease-in-out;
    }

    .card-image-one:hover {
    filter: none;
      -webkit-filter: grayscale(0);
    }
    .card-image-two{
         background-image: url("https://i.pinimg.com/564x/6d/54/ff/6d54ffaad6091cc909c964540bf302d4.jpg");
         background-size:contain;
         position: 2000px 100px;
          /* Full height */
         height: 101vh;
          /* Center and scale the image nicely */
         background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
       /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
         filter: gray; /* IE5+ */
         color:red;
         -webkit-filter: grayscale(2); /* Webkit Nightlies & Chrome Canary */
         -webkit-transition: all .5s ease-in-out;
       }

       .card-image-two:hover {
       filter: none;
         -webkit-filter: grayscale(0);
       }

       .card-image-three{
            background-image: url("https://i.pinimg.com/564x/93/c6/2e/93c62e48707de58f79c34cf3d92742c4.jpg");
            background-size:contain;
            position: 2000px 100px;
             /* Full height */
            height: 101vh;
             /* Center and scale the image nicely */
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          /* filter: url(filters.svg#grayscale); Firefox 3.5+ */
            filter: gray; /* IE5+ */
            color:red;
            -webkit-filter: grayscale(2); /* Webkit Nightlies & Chrome Canary */
            -webkit-transition: all .5s ease-in-out;
          }

          .card-image-three:hover {
          filter: none;
            -webkit-filter: grayscale(0);
          }

    .title{
      margin-top:-20vh;
      z-index:1;
      color:white;
      text-align:left;
      margin-left:5%;
    }
</style>
