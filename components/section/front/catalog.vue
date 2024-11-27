<template>
  <section class="front-catalog section-mb">
    <div class="container">
      <h2 class="section-subtitle">каталог и услуги</h2>
      <div class="front-catalog__top">
        <div class="front-catalog__remark title-h2">
          Осуществляем полный цикл строительства
        </div>
        <ButtonBase
          class="front-catalog__btn"
          name="secondary"
          size="large"
          mode="nuxt-link"
          link="/catalog"
          >Перейти в каталог</ButtonBase
        >
      </div>
      <ul class="front-catalog__list">
        <li
          v-for="catalogItem of list"
          :key="catalogItem.title"
          class="front-catalog__item"
        >
          <CardCatalog
            :title="catalogItem.title"
            :text="catalogItem.field_description_preview"
            :img="catalogItem.field_image_preview"
            :url="catalogItem.url"
          />
        </li>
        <li class="front-catalog__item">
          <CardCatalog
            :title="service.title"
            :text="service.field_description_preview"
            :img="service.field_image_preview"
            :url="service.url"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  service: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.front-catalog {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px 50px;
    margin-bottom: 80px;
  }
  &__remark {
    max-width: 750px;
  }
}
@include tablet {
  .front-catalog {
    &__list {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@include tablet-s {
  .front-catalog {
    &__top {
      margin-bottom: 40px;
    }
    &__list {
      grid-template-columns: 1fr;
    }
    & &__btn {
      display: none;
    }
  }
}
</style>
