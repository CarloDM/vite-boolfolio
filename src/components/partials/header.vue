<script>
export default {
  name:'header',
}
</script>
<template>
  <header>
    <h3>header</h3>

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
<style>

</style>