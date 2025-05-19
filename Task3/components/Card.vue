<template>
  <div class="card">This is a card</div>
</template>

<style lang="scss" scoped>
@import "@/assets/_mixins.scss";
  .card {
    @include card(#5d5c53, white);
    height: 100px;
  }
</style>