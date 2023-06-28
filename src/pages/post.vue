<script>
import axios from 'axios';
export default {
  name:'post',
  data(){
    return{
      apiUrl: 'http://127.0.0.1:8000/api/',
      post : null,
      loaded: false,
    }
  },

  methods:{
    getPost(){
      this.loaded = false;
        console.log(this.$route.params.slug);
        axios.get(this.apiUrl + 'post/' + this.$route.params.slug)
        .then(result =>{
          console.log(result.data);
          this.post = result.data;
          this.loaded = true;
        })
    },
  },
  mounted(){
    this.getPost();
  }
}
</script>
<template>
  <div class="post-wrapper">
    <div v-if="loaded" class="container-post">

      <h1>{{post.title}}</h1>
      <p>{{ post.date }}</p>
      <p v-html="post.text"></p>

      <img v-if="post.image_path"
      class="img" :src=" 'http://127.0.0.1:8000/storage/' + post.image_path " :alt="post.image_original_name">

    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-post{
  text-align: center;
  & .img{
    width: 85%;
  }
}

</style>