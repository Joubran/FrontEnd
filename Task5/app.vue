<template>
  <div class="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import Main from '~/components/Main.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
