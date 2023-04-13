<template>
  <div>
    <div>My Component</div>
    <ul>
      <li :class="{active:activeMenu==='index'}">
        <nuxt-link to="/">index</nuxt-link>
      </li>
      <li :class="{active:activeMenu==='about'}">
        <nuxt-link to="/about">about</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { activeMenu } = useMenu()
</script>

<style lang="css" scoped>
li.active a {
  color: red;
}
</style>