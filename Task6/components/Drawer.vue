<template>
  <!-- Toggle Button -->
  <button
    class="drawer-toggle"
    :aria-expanded="isOpen"
    aria-label="Toggle navigation menu"
    @click="toggle"
  >
    <svg class="drawer-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect y="4" width="24" height="2" />
      <rect y="11" width="24" height="2" />
      <rect y="18" width="24" height="2" />
    </svg>
  </button>

  <!-- Overlay / Backdrop -->
  <transition name="fade">
    <div
      v-if="isOpen"
      class="drawer-overlay"
      @click="toggle"
    />
  </transition>

  <!-- Slide-out Drawer Panel -->
  <transition name="slide">
    <aside v-if="isOpen" class="drawer-panel">
      <!-- Close Button inside Drawer -->
      <button
        class="drawer-panel__close"
        aria-label="Close menu"
        @click="toggle"
      >&times;</button>

      <nav class="drawer-panel__nav">
        <NuxtLink to="/">Реализованные проекты</NuxtLink>
        <NuxtLink to="/news">Новости</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </nav>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function handleResize() {
  if (window.innerWidth >= 992 && isOpen.value) {
    isOpen.value = false
    document.body.style.overflow = ''
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped lang="scss">
.drawer-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: $color-primary;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;

  &__icon rect {
    fill: #fff;
    transition: transform 0.3s, opacity 0.3s;
  }

  &[aria-expanded="true"] .drawer-toggle__icon rect:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &[aria-expanded="true"] .drawer-toggle__icon rect:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded="true"] .drawer-toggle__icon rect:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}

.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
}

.drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 320px;
  height: 100vh;
  background: $color-primary;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 99;

  &__close {
    align-self: flex-end;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }
}

.drawer-panel__nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

/* Transitions */
.fade-enter-active,
.fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }

.slide-enter-active,
.slide-leave-active { transition: transform 0.2s ease; }
.slide-enter-from,
.slide-leave-to { transform: translateX(100%); }
</style>
