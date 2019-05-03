
<template>
    <div class="padding">
    <mdb-card class="jumbotron" style="background-image: url(https://s1.r29static.com//bin/entry/e0a/x/1929123/image.png);background-size:cover;background-position:center center;width:100%;">
  <div class="text-white text-center py-5 px-4 my-5">
    <div>
      <h2 class="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
      <p class="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
        optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
      </p>
    </div>
  </div>
</mdb-card>

<mdb-btn color="elegant" v-for="(entry, index) in filterList" :item="entry" :key="index" @click="filter = entry; active = index;" :class="{ active: entry == filter }">{{ entry }}</mdb-btn>
  <mdb-tooltip :options="{placement: 'right'}">
  <span slot="tip"><h1>Tooltip on right</h1><br>entry.name</span>
    <ul class="userWrap d-flex justify-content-between">
       <li
         v-for="(entry, index) in images"
         v-if="entry[fkey] === filter || filter === 'All'"
         :item="entry"
         :key="index"
         class="user"
         slot="reference"
       >
       <mdb-card   class="card hair ">
       <mdb-tooltip :options="{placement: 'right'}">
       <span slot="tip"><h1>{{entry.name}}</h1><br></span>
       <mdb-btn slot="reference" color="link">
         <mdb-card-image class="media-object" v-bind:src="entry.image"></mdb-card-image>
       </mdb-btn>
     </mdb-tooltip>

       </mdb-card>
       </li>
     </ul>
    </mdb-tooltip>
  </div>
</template>

<script>
import axios from 'axios'
import { mdbCard, mdbCardImage, mdbBtn, mdbTooltip } from 'mdbvue'


export default {
  name: 'Braids',
  components: { mdbCard, mdbCardImage, mdbBtn, mdbTooltip },
  data: function () {
    return {
      fkey: 'name',
      filterList: ['Natural', 'Short Hair', 'Lines', 'Box Braids', 'Dreadlocks', 'Wire'],
      filter: 'All',
      images: [],

    }
  },
  created () {
    var apiURL = 'https://next.json-generator.com/api/json/get/4JCnNiTCr'
    fetch(apiURL)
      .then(res => res.json())
      .then(res => (this.users = res))
      .catch(error => console.log(error))
  },
  mounted () {
    axios.get('https://hairspiration-api.herokuapp.com/api/v1/hairstyle/').then(response => { this.images = response.data })
  },

}

</script>
<style scoped>
  .media-object {
    width: 250px;
    height:260px;
    margin-left:-1.5vh;
    margin-top:1vh;

  }
  .card{
  width:300px;
  height:315px;

  float:left;
  }
  .hair{
    margin-top:2%;

  }
  .jumbotron{
    height:80vh;
  }
  .userWrap {
    list-style-type: none;
    padding: 2%;
    display: flex;
    flex-wrap: wrap;

    flex-direction: row;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }




</style>
