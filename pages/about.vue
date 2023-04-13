<template>
  <p>My Component in index page - {{ activeMenu }}</p>
  <MyComponent></MyComponent>
</template>

<script setup>
const { activeMenu, changeActiveMenu } = useMenu()
changeActiveMenu('about')
</script>

