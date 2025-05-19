<template xmlns="http://www.w3.org/1999/html">
  <div class="wrapper">
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    font-family: var(--font);
  }
</style>
