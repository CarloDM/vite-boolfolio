<script>
import axios from 'axios';
export default {
  name:'App',
  data(){
    return {
      apiUrl: 'http://127.0.0.1:8000/api/',
      posts : null,
    }
  },

  methods:{
    getPosts(){
      console.log(this.apiUrl)
      axios.get(this.apiUrl + 'post')
        .then(result =>{
          console.log(result.data);
          this.posts = result.data;
        })
    }
  },

  computed:{},

  mounted(){
    this.getPosts()
  },

}
</script>
<template>
  <div class="main-wrapper">

    <ul>
      <li 
      v-for=" post in posts"
      :key="post.id"
      >
      {{ post.title }}
      </li>
    </ul>




  </div>
</template>
<style lang="scss">
@import './scss/main.scss';


</style>