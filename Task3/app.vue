<template>
  <NuxtLayout>
    <div class="content">
      <div class="content-aside-left">
        <h4>List:</h4>
        <ul>
          <li> 1</li>
          <li> 2</li>
          <li> 3</li>
        </ul>
      </div>

      <div class="content-main">
        <h1>Welcome!</h1>
        <div class="greeting-box">
          <p class="greeting-box-text">{{ greeting }}</p>
          <button class="greeting-box-button" @click="changeGreeting">Поменять приветствие</button>
        </div>
      </div>

      <div class="content-aside-right">
        <h4> The banner and card!</h4>
        <Banner />
        <Card />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
</style>

<script setup>
const defaultText = 'Hello, World!'
const changedText = 'Hello, FEFU!'

const greeting = ref(defaultText)
const isChanged = ref(false)

const changeGreeting = () => {
  isChanged.value = !isChanged.value
  greeting.value = isChanged.value ? changedText : defaultText
}

</script>