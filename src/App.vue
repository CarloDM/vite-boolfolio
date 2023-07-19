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


    <router-view v-slot="{Component, route}">
      <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
        <component :is="Component">

        </component>
        
      </transition>

    </router-view>

  </div>

</template>
<style lang="scss">

@import './scss/main.scss';

</style>