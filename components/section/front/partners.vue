<template>
  <section class="front-partners section-mb">
    <div class="container">
      <h2 class="section-subtitle">партнёры</h2>
      <div class="front-partners__body">
        <div class="front-partners__left">
          <h2 class="front-partners__title title-h2">
            Работаем только с надежными компаниями
          </h2>
          <p class="front-partners__descr">
            Выполнение проектов по оснащению складов и производств стеллажным
            оборудованием, строительству самонесущих складов и ангаров из ЛСТК
            под ключ.
          </p>
        </div>
        <div class="front-partners__right">
          <ul class="front-partners__list">
            <li
              v-for="(logo, index) of logos"
              :key="'partner-logo-' + index"
              class="front-partners__item image-style-contain"
              v-html="logo.markup"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  logos: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.front-partners {
  &__body {
    display: grid;
    grid-template-columns: 4fr 1fr 7fr;
    grid-gap: 6px;
  }
  &__left {
    max-width: 560px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__right {
    grid-column: 3/4;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 508/246;
    background-color: var(--bg-secondary);
    padding: 60px;
  }
  &__title {
    line-height: 1;
  }
}
@include desktop {
  .front-partners {
    &__body {
      grid-template-columns: 5fr 7fr;
      gap: 40px 80px;
    }
    &__right {
      grid-column: 2/3;
    }
    &__item {
      padding: 40px;
    }
  }
}
@include tablet {
  .front-partners {
    &__body {
      grid-template-columns: 1fr;
    }
    &__right {
      grid-column: initial;
    }
    &__title {
      margin-bottom: 10px;
    }
  }
}
@include tablet-s {
  .front-partners {
    &__item {
      padding: 20px 25px;
    }
  }
}
@include mobile {
  .front-partners {
    &__list {
      grid-template-columns: 1fr;
    }
    &__item {
      padding: 35px 50px;
      aspect-ratio: 280/135;
    }
  }
}
</style>
