<template>
  <section class="services section-mb">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
      <h1 class="services__title title-h1">Услуги</h1>

      <ol class="services__list">
        <li v-for="(service, index) of data.data" :key="'service-' + index" class="services__item">
          <div class="services__item-info">
            <div class="services__item-num">
              {{ index >= 9 ? index + 1 : "0" + (index + 1) }}
            </div>
            <div class="services__item-title title-h3">{{ service.title }}</div>
            <div class="services__item-text" v-html="service.body"/>
          </div>
          <div
            class="services__item-img image-style-cover"
            v-html="service.field_image[0].markup"
          />
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.services {
  &__title {
    margin-bottom: 100px;
  }
  &__list {
    border-top: 1px solid var(--stroke-primary);
  }
  &__item {
    min-height: 500px;
    padding: 24px 0;
    border-bottom: 1px solid var(--stroke-primary);
    display: grid;
    grid-template-columns: 5fr 1fr 6fr;
    grid-gap: 6px;
  }
  &__item-info {
    height: auto;
    max-width: 730px;
    display: flex;
    flex-direction: column;
    padding: 36px 0;
  }
  &__item-num {
    color: var(--text-accent);
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: 500;
  }
  &__item-title {
    margin-bottom: 30px;
  }
  &__item-text {
    margin-top: auto;
    color: var(--text-default);
    font-size: 18px;
  }
  &__item-img {
    grid-column: 3/4;
    width: 100%;
    height: 100%;

  }
}
@include laptop {
  .services {
    &__title {
      margin-bottom: 80px;
    }
    &__item {
      min-height: 300px;
      display: grid;
      grid-template-columns: 6fr 6fr;
      grid-gap: 80px;
    }
    &__item-info {
      padding: 0;
    }
    &__item-num {
      font-size: 16px;
      margin-bottom: 15px;
    }
    &__item-img {
      grid-column: initial;
    }
    &__item-text {
      font-size: 16px;
    }
  }
}
@include tablet-s {
  .services {
    &__item {
      grid-gap: 30px;
    }
    &__item-title {
      margin-bottom: 20px;
    }
  }
}
@include mobile {
  .services {
    &__title {
      margin-bottom: 40px;
    }
    &__item {
      grid-template-columns: 1fr;
    }
    &__item-num {
      font-size: 14px;
    }
    &__item-title {
      margin-bottom: 10px;
    }
    &__item-text {
      font-size: 14px;
    }
    &__item-img {
      aspect-ratio: 850/500;
    }
  }
}
</style>
