<script>
export default {
  name:'ProjectCard',

  props:{
    title: String,
    slug: String,
    date: String,
    text: String,
    img_pat: String,
    author_id: Number,
    author_name: String,
  },

}
</script>
<template>
  <div class="Project-card">

    <router-link :to="{name: 'post', params: {slug: slug }}">{{ title }}</router-link>
    <h3>{{ title }}</h3>
    <p  class="date">{{ date }}</p>
    <p v-html="text" class="text"></p>
    <p  class="author">{{ author_name }}</p>

    <img v-if="img_pat"
      class="thumb" :src=" 'http://127.0.0.1:8000/storage/' + img_pat " :alt="img_pat">

  </div>
</template>
<style lang="scss" scoped>
.Project-card{
  background-color: white;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 5px 0px;
  border-radius: 10px;

  & h1{}
  & .date{}
  & .text{
    margin: 10px 0px;
  }
  & .author{
    font-size: 1.0rem;
    font-weight: 800;
    color: rgb(163, 110, 110);
  }
  & .thumb{
    display: block;
    width: 150px;
    margin: 0px auto;
  }
}

</style>