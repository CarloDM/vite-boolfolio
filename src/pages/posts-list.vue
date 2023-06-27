<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
  name: 'Home',
  data(){
    return{
      apiUrl: 'http://127.0.0.1:8000/api/',
      posts : null,
      authors: [],
    }
  },

  components:{ProjectCard},

  methods:{
    getPosts(){
      console.log(this.apiUrl)
      axios.get(this.apiUrl + 'post')
        .then(result =>{
          console.log(result.data);
          this.posts = result.data;
        })
    },

    getAuthors(){

      axios.get(this.apiUrl + 'authors')
        .then(result =>{
          console.log(result.data);
          this.authors = result.data;
        })
    },
    getPostByAuthor(id){
      console.log('get posts by author');
      axios.get(this.apiUrl + 'post/author-post/' + id)
      .then(result =>{
        console.log(result.data);
        this.posts = result.data;
      })
      console.warn('test',this.authors[0].name);
    },
  },

  computed:{},

  mounted(){
    this.getAuthors()
    this.getPosts()
  },
}

</script>
<template>
  <div class="post-wrapper">

    <div class="card_container">
      <h2 class="m_1">posts list</h2>

      <ProjectCard
      v-for=" post in posts"
      :key="post.id"
      :title="post.title"
      :date="post.date"
      :text="post.text"
      :img_pat="post.image_path"
      :author_id="post.author_id"
      :author_name="authors[post.author_id - 1].name"

      />
    </div>

    <div class="authors_container">
      <h2 class="m_1">authors list</h2>

      <ul>
        <li v-for=" author in authors" :key="author.id">
          <button @click="getPostByAuthor(author.id)">
            {{ author.name }}
          </button>
        </li>
      </ul>

    </div>
  </div>

</template>
<style lang="scss" scoped >
  button{
    margin-bottom: 5px;
  }

</style>