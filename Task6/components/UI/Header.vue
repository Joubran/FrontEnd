<template>
  <header class="site-header">
    <div @click="goHome" class="header__item logo">
      <UILogo />
      <h1>zagdom</h1>
    </div>

    <nav class="header__item nav">
      <ul>
        <li>
          <NuxtLink
            to="/"
            :class="{ active: route.path.startsWith('/projects') }"
            >Реализованные проекты</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/news"
            :class="{ active: route.path.startsWith('/news') }"
            >Новости</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contacts"
            :class="{ active: route.path.startsWith('/contacts') }"
            >Контакты</NuxtLink
          >
        </li>
      </ul>
    </nav>

    <div class="header__item phone">
      <a class="phone__link" href="tel:+79009009090">+7 (900) 900-90-90</a>
      <UIButtonsMyButton @click="showModal = true">
        Оставить заявку
      </UIButtonsMyButton>
    </div>

    <div class="header__item draver">
      <Draver />
    </div>
  </header>

  <ModalForm v-model="showModal" @submit="onModalSubmit" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import Draver from '~/components/Drawer.vue';

const router = useRouter();
const route = useRoute();

function goHome() {
  router.push('/');
}

const showModal = ref(false);
function onModalSubmit(payload: {
  name: string;
  phone: string;
  message: string;
}) {
  console.log('Заявка получена:', payload);
}
</script>

<style scoped lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  margin: 20px;
  .header__item {
    display: flex;
    align-items: center;
  }

  .logo {
    cursor: pointer;
    h1 {
      margin: 0 0 0 8px;
      color: #254741;
      font-size: 20px;
    }
  }

  .nav {
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 24px;

        a {
          text-decoration: none;
          color: #666666;
          font-weight: 400;
          transition: color 0.3s ease;

          &.active {
            color: $color-primary;
            font-weight: 600;
          }

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }

  .phone {
    .phone__link {
      display: inline-flex;
      align-items: center;
      margin-right: 16px;
      color: #254741;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.3s ease;

      &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 6px;
        background: url('/img/icons/telephone.svg') no-repeat center/contain;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .draver {
    display: none;
  }

  @media (max-width: 992px) {
    .nav,
    .phone {
      display: none;
    }
    .draver {
      display: block;
    }
  }
}
</style>
