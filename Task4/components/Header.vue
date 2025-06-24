<template>
    <header class="header">
      <div class="header__logo">
        <img src="/logo.png" alt="Zagdom Logo" class="logo-img" />
      </div>
  
      <nav class="header__nav">
        <a href="#">Реализованные проекты</a>
        <a href="#">Новости</a>
        <a href="#">Контакты</a>
      </nav>
  
      <div class="header__contact">
        <img src="/tel.png" alt="Phone Icon" class="phone-icon" />
        <span class="phone-number">+7 (900) 900-90-90</span>
        <button class="header__btn">Оставить заявку</button>
      </div>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 20px 40px; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-family: sans-serif;
  }
  
  .header__logo {
    margin-left: 20px; 
  }
  
  .header__logo img.logo-img {
    width: 140px;
    height: auto;
  }
  
  .header__nav {
    display: flex;
    gap: 35px; 
  }
  
  .header__nav a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
  }
  
  .header__contact {
    display: flex;
    align-items: center;
    gap: 20px; 
  }
  
  .phone-icon {
    width: 18px;
    height: 18px;
  }
  
  .phone-number {
    font-size: 14px;
    color: #333;
  }
  
  .header__btn {
    padding: 8px 18px;
    background-color: #2e7d32;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s ease;
  }
  
  .header__btn:hover {
    background-color: #27662c;
  }
  </style>
  