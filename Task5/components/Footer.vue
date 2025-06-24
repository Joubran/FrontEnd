<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="/foot_log.png" alt="Логотип" class="footer__logo-icon" />
        </div>

        <nav class="footer__nav">
          <a href="#" class="footer__nav-item">Реализованные проекты</a>
          <a href="#" class="footer__nav-item">Новости</a>
          <a href="#" class="footer__nav-item">Контакты</a>
          <a href="#" class="footer__rights">Политика конфиденциальности</a>
        </nav>

        <div class="footer__contacts">
          <div class="footer__row">
            <img src="/tel.png" alt="Телефон" class="footer__icon" />
            <a href="tel:+79009009090" class="footer__link">+7 (900) 900-90-90</a>
          </div>
          <div class="footer__row">
            <img src="/email.png" alt="Почта" class="footer__icon" />
            <a href="mailto:info@gmail.com" class="footer__link">info@gmail.com</a>
          </div>
          <div class="footer__row">
            <img src="/location.png" alt="Адрес" class="footer__icon" />
            <address class="footer__address">г. Владивосток<br>ул. Выселковая 49, стр. 3</address>
          </div>
          <a href="#" class="footer__rights">Пользовательское соглашение</a>
        </div>

        <button class="footer__button">Оставить заявку</button>
      </div>

      <div class="footer__rights">
        <a href="#" class="footer__rights-item">© Загдом, 2021</a>
      </div>
    </div>
  </footer>
</template>


<style>  
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

@import 'sanitize.css'; 

body {
  margin: 0;
  padding: 0;
}

:root {
  --main-font: 'Roboto', sans-serif;
  --font: 'Roboto', sans-serif;
}
</style>

<style scoped>
.footer {
  background-color: #254741;
  padding: 37px 0 33px;
  color: #fff;
}

.footer__container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer__content {
  display: flex;
  align-items: flex-start;
}

.footer__logo-icon {
  width: 100px;
  height: auto;
}

.footer__nav,
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer__nav {
  font-family: var(--main-font);
  font-size: 16px;
  padding-top: 12px;
  margin: 0 122px 0 154px; 
}

.footer__nav-item,
.footer__link,
.footer__rights-item {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.footer__contacts {
  font-family: var(--font);
  font-size: 14px;
  line-height: 120%;
  padding-top: 11px;
}

.footer__row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer__icon {
  width: 16px;
  height: 16px;
}

.footer__button {
  margin-left: auto;
  padding: 16px 40px;
  background-color: #029f59;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: var(--font);
  cursor: pointer;
}

.footer__rights {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: var(--main-font);
  font-size: 14px;
  opacity: 0.6;
  gap: 10px;
}
</style>
