<script>
export default {
  name:'header',
}
</script>
<template>
  <header>
    <ul>
      <li>
        <router-link :to="{name: 'home' }" class="nav-link">home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'postsList' }" class="nav-link">postsList</router-link>
      </li>
    </ul>

  </header>
</template>
<style lang="scss" scoped>
ul{
  display: flex;
  justify-content: space-around;

  & li{


    & a{
      color: black;
      font-size: 1.3rem;
      font-weight: 900;
      text-transform: uppercase;

      &.active{
        color: rgb(39, 5, 231);
      }
    }
  }
}



</style>