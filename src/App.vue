<script>
import Header from './components/partials/header.vue';
export default {
  name:'App',
  data(){
    return {
      // apiUrl: 'http://127.0.0.1:8000/api/',
      // posts : null,
    }
  },
  components:{Header,},

  // methods:{
  //   getPosts(){
  //     console.log(this.apiUrl)
  //     axios.get(this.apiUrl + 'post')
  //       .then(result =>{
  //         console.log(result.data);
  //         this.posts = result.data;
  //       })
  //   }
  // },

  // computed:{},

  // mounted(){
  //   this.getPosts()
  // },

}
</script>
<template>
  <div class="main-wrapper">
    <Header></Header>
    <router-view></router-view>

    <!-- <h2 class="m_1">posts card</h2>
    <div class="card_container">

      <ProjectCard
      v-for=" post in posts"
      :key="post.id"
      :title="post.title"
      :date="post.date"
      :text="post.text"
      />

    </div> -->

  </div>
</template>
<style lang="scss">
@import './scss/main.scss';


</style>