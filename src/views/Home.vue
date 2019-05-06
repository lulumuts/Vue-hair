<template>
  <div class="home">
<div class="">
<mdb-navbar class="navbar" dark color="primary" position="top" transparent>
  <mdb-navbar-brand href="#"></mdb-navbar-brand>

    <mdb-navbar-nav>
    <mdb-btn color="link" @click="logout" ><strong style="color:white;">Logout</strong></mdb-btn>

      <mdb-nav-item class="nav-title" tag="h1" style="margin-top:13%;"><strong style="color:yellow;">OUR TOP HAIR STYLE PICKS OF THE WEEK</strong></mdb-nav-item>
    </mdb-navbar-nav>
    </mdb-navbar>
<mdb-card-group style="z-index:-1;">

  <mdb-card class="card-image-one">

    <mdb-card-body style="margin-top:50vh;padding:3%;">
      <mdb-card-title tag="h1" style="color:lightgrey;"><strong>CURLY FRO</strong></mdb-card-title>
      <mdb-card-text style="color:lightgrey;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam. Porta nibh venenatis cras sed felis.</mdb-card-text>
      <router-link to="/braids"><mdb-card-text style="font-size:2vh;color:grey;">SEE MORE</mdb-card-text></router-link>
    </mdb-card-body>

  </mdb-card>

  <mdb-card class="card-image-three">
    <mdb-card-body style="margin-top:50vh;">
      <mdb-card-title tag="h1" style="color:grey;"><strong>LINES</strong></mdb-card-title>
      <mdb-card-text style="color:grey;">This is a wider panel with supporting text below as a natural lead-in to additional content. This
        panel has even longer content than the first to show that equal height action.</mdb-card-text>
<router-link to="/braids"><mdb-card-text style="font-size:2vh;color:grey;">SEE MORE</mdb-card-text></router-link>
    </mdb-card-body>
  </mdb-card>
  <mdb-card class="card-image-two">
    <mdb-card-body  style="margin-top:50vh;">
      <mdb-card-title tag="h1" style="color:grey;"><strong>SHORT CUT</strong></mdb-card-title>
      <mdb-card-text style="color:grey;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam. Porta nibh venenatis cras sed felis.</mdb-card-text>
      <router-link to="/braids"><mdb-card-text style="font-size:2vh;color:grey;">SEE MORE</mdb-card-text></router-link>
    </mdb-card-body>
  </mdb-card>


  <mdb-card class="card-image-four">
    <mdb-card-body style="margin-top:50vh;">
      <mdb-card-title tag="h1" style="color:lightgrey;"><strong>BOX BRAIDS</strong></mdb-card-title>
      <mdb-card-text style="color:lightgrey;">This is a wider panel with supporting text below as a natural lead-in to additional content. This
        panel has even longer content than the first to show that equal height action.</mdb-card-text>
        <router-link to="/braids"><mdb-card-text style="font-size:2vh;color:lightgrey;">SEE MORE</mdb-card-text></router-link>

    </mdb-card-body>
  </mdb-card>
</mdb-card-group>
  </div>
  </DIV>
</template>

<script>
import firebase from 'firebase'
// @ is an alias to /src

import { mdbCard, mdbCardText, mdbCardBody, mdbCardTitle, mdbCardGroup, mdbNavbar, mdbNavItem, mdbBtn } from 'mdbvue'

export default {
  name: 'home',
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardGroup,
    mdbNavbar,
    mdbNavItem,
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
@import url('https://fonts.googleapis.com/css?family=Anton');
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
 .nav-title{
 font-family: 'Anton', sans-serif;
 font-size:7vh;

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
 .navbar { box-shadow: none !important; } .btn { box-shadow: none !important; }
 .card-image{
 height:400px;
 }
 .card-image-one{
      background-image: url("https://i.pinimg.com/564x/84/9d/cf/849dcf4e0abd06cedaa4d6647d22b8fc.jpg");
      background-size:contain;
      position: 1000px 100px;
       /* Full height */
      height: 101vh;
       /* Center and scale the image nicely */
      background-position: center center;
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
         background-image: url("https://i.pinimg.com/564x/bb/04/eb/bb04eb3261fb5d7b4b093b6955807843.jpg");
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
            background-image: url("https://i.pinimg.com/564x/2b/3d/17/2b3d17925f6f7058d8f8013000252897.jpg");
            background-size:contain;
            position: 3000px 100px;
             /* Full height */
            height: 101vh;
             /* Center and scale the image nicely */
            background-position: top center;
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
          .card-image-four{
               background-image: url("https://i.pinimg.com/564x/b2/36/cb/b236cb961fbaf9c34c9e52e0111461ae.jpg");
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

             .card-image-four:hover {
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
