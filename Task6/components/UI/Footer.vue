<template>
  <footer>
    <div class="footer__item">
      <div @click="goHome" class="item__logo">
        <UILogo1 />
        <p>zagdom</p>
      </div>
      <p class="item__minorLinks">© zagdom, 2021</p>
    </div>

    <div class="footer__item">
      <nav>
        <RouterLink to="/projects">Реализованные проекты</RouterLink>
        <RouterLink to="/news">Новости</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </nav>
      <p class="item__minorLinks">Политика конфиденциальности</p>
    </div>

    <UIContactsList class="footer__item footer__contacts" />

    <div class="footer__item footer__button">
      <UIButtonsMyButton @click="showModal = true"
        >Оставить заявку</UIButtonsMyButton
      >
    </div>

    <div class="footer__mobileMinorLinks">
      <p>© zagdom, 2021</p>
      <p>Политика конфиденциальности</p>
    </div>

    <ModalForm v-model="showModal" @submit="onModalSubmit" />
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

const showModal = ref(false);
const router = useRouter();

function onModalSubmit(payload: {
  name: string;
  phone: string;
  message: string;
}): void {
  console.log('Заявка получена:', payload);
}

function goHome(): void {
  router.push('/');
}
</script>

<style scoped lang="scss">
footer {
  margin-top: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #254741;
  color: #fff;
  padding: 40px 20px;
  font-size: 1.2rem;
  text-align: center;

  .footer__mobileMinorLinks {
    display: none;
    flex-direction: column;
    margin-top: 20px;

    p {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: $breakpoint-md) {
    flex-direction: column;

    .item__minorLinks {
      display: none;
    }

    .footer__mobileMinorLinks {
      display: flex;
    }
    .footer__button {
      display: flex;
      align-items: center;
      margin-right: auto;
    }
  }

  .footer__contacts :deep(a) {
    margin: 2% 0;
    text-decoration: none;
    list-style: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #ffffff;
    transition: 0.2s;

    &:hover {
      opacity: 0.6;
    }
  }

  .footer__item {
    display: flex;
    flex-direction: column;

    a {
      margin: 2% 0;
      text-decoration: none;
      list-style: none;
      padding: 0;
      text-align: left;
      cursor: pointer;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #ffffff;
      transition: 0.2s;
    }

    a:hover {
      opacity: 0.6;
    }

    .item__logo {
      display: flex;
      cursor: pointer;

      p {
        color: #fff;
        font-size: 1.6rem;
        margin: 0;
        margin-left: 10px;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    .item__minorLinks {
      cursor: pointer;
      margin-top: auto;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 121%;
      color: #ffffff;
      opacity: 0.6;
      transition: 0.2s;
      text-align: left;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
