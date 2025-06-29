<template>
  <div class="app-wrapper">
    <UIHeader />
    
    <main class="main-content">
      <NuxtPage />
    </main>
    
    <UIFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9; 
  color: #222; 
}

.main-content {
  flex-grow: 1;
  padding: 2rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 2rem;
  }
}
</style>
