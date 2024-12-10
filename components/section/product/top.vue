<template>
  <section class="product-top">
    <div class="container">
      <div class="product-top__body">
        <SliderDouble class="product-top__slider" :slides="slides" />
        <div class="product-top__info">
          <h5 class="product-top__title title-h5">Описание</h5>
          <div class="product-top__descr" v-html="description"/>
          <div class="product-top__stroke">
            <img src="/icons/compass.svg" alt="" >
            Бесплатное проектирование
          </div>
          <div class="product-top__stroke">
            <img src="/icons/handshake.svg" alt="" >
            Помогаем с оформлением лизинга
          </div>
          <ButtonBase
            class="product-top__btn"
            mode="button"
            :size="isMobile ? 'large' : 'middle'"
            @click="appStateStore.makeFeedbackActive()"
            >Получить расчет</ButtonBase
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAppStateStore } from '~/stores/appState';
const appStateStore = useAppStateStore();
const { isMobile } = useDevice();
defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.product-top {
  &__body {
    display: grid;
    grid-template-columns: 62% 1fr;
    grid-gap: 80px;
  }
  &__slider {
    width: 100%;
    flex-grow: 1;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__title {
    margin-bottom: 16px;
  }
  &__descr {
    margin-bottom: 40px;
    font-size: 18px;
  }
  &__stroke {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 16px;
    font-weight: 500;
    img {
      width: 30px;
      height: 30px;
    }
  }
  &__btn {
    margin-top: auto;
    width: fit-content;
  }
}
@include laptop {
  .product-top {
    &__body {
      grid-template-columns: 50% 1fr;
      gap: 40px;
    }
    &__descr {
      margin-bottom: 20px;
    }
  }
}
@include tablet-s {
  .product-top {
    &__body {
      grid-template-columns: 1fr;
    }
    &__btn {
      margin-top: 40px;
    }
    &__descr {
      font-size: 14px;
    }
  }
}
@include mobile {
  .product-top {
    &__btn {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
