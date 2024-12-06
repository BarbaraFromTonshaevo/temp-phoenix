<template>
  <div>
    <AppHeader />
    <div class="page-content">
      <slot />
    </div>
    <AppFooter />
    <PopupFeedback/>
    <PopupSuccess/>
    <PopupError/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMainInfoStore } from "~/stores/mainInfo";
const mainInfoStore = useMainInfoStore();
const route = useRoute();

if (route.path === "/") {
  mainInfoStore.makeHeaderTransparent();
} else {
  mainInfoStore.makeHeaderOpaque();
}

let lastScrollY = 0; // Для хранения предыдущей позиции прокрутки
const handleScroll = () => {
  const currentScrollY = window.scrollY; // Текущая позиция прокрутки
  // Если мы прокручиваем вниз
  if (currentScrollY > lastScrollY) {
    mainInfoStore.makeHeaderHidden(); // Скрыть шапку
  } else {
    mainInfoStore.makeHeaderVisible(); // Показать шапку
  }
  if (route.path === "/") {
    if (window.scrollY > window.innerHeight) {
      mainInfoStore.makeHeaderOpaque();
    } else {
      mainInfoStore.makeHeaderTransparent();
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
*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
*::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: var(--stroke-primary);
  border-radius: 3px;
  &:hover {
    background-color: var(--stroke-secondary);
  }
}

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
