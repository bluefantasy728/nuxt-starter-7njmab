<style lang="css" scoped>
</style>
<template>
  <div class="layout-wrap">
    <div>
      <p>My Component in layout</p>
      <MyComponent></MyComponent>
    </div>

    <hr />
    <slot />
  </div>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=1440,user-scalable=no',
    },
  ],
})
</script>
