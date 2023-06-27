<script>
import Header from './components/partials/header.vue';
export default {
  name:'App',
  data(){
    return {}
  },
  components:{Header,},
}
</script>
<template>
  <div class="main-wrapper">

    <Header></Header>
    <router-view></router-view>

  </div>
</template>
<style lang="scss">

@import './scss/main.scss';

</style>