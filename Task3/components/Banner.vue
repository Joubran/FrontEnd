<script setup lang="ts">

</script>

<template>
  <div class="banner">This is a banner</div>
</template>

<style lang="scss" scoped>
@import "@/assets/_mixins.scss";
  .banner {
    @include card(#5d5c53, #FFF);
    height: 50px;
  }
</style>