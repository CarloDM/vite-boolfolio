<script>
export default {
  name:'AppHeader',
}

</script>
<template>
  
<li v-for="(item, index) in menuItems" :key="index">

<router-link :to="{name: item.routeName}" class="nav-link">
  {{ item.label }}
</router-link>

</li>

</template>