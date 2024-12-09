<template>
  <div>
    <AppHeader />
    <div class="page-content">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStateStore } from "~/stores/appState";
const appStateStore = useAppStateStore();
const route = useRoute();

if (route.path === "/") {
  appStateStore.makeHeaderTransparent();
} else {
  appStateStore.makeHeaderOpaque();
}

let lastScrollY = 0; // Для хранения предыдущей позиции прокрутки
const handleScroll = () => {
  const currentScrollY = window.scrollY; // Текущая позиция прокрутки
  // Если мы прокручиваем вниз
  if (currentScrollY > lastScrollY) {
    appStateStore.makeHeaderHidden(); // Скрыть шапку
  } else {
    appStateStore.makeHeaderVisible(); // Показать шапку
  }
  if (route.path === "/") {
    if (window.scrollY > window.innerHeight) {
      appStateStore.makeHeaderOpaque();
    } else {
      appStateStore.makeHeaderTransparent();
    }
  }
  lastScrollY = currentScrollY; // Обновляем последнюю позицию прокрутки
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll); // Добавляем слушатель события
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll); // Удаляем слушатель события
});
</script>

<style lang="scss">
// body {
// padding-top: calc(var(--header-height) + var(--header-main-gap));
// }

.main {
  // min-height: calc(100vh - (var(--header-height) + var(--header-main-gap)));
  min-height: 100vh;
  padding-top: calc(var(--header-height) + var(--header-main-gap));
}
@include tablet-s {
  // body {
  //   padding-top: calc(var(--header-height) + 40px);
  // }
}
</style>
