<template>
  <div ref="wrap" class="projects-slider__wrap">
    <SliderTop :title="title" :title-size="titleSize" />
    <div ref="slider" class="projects-slider swiper">
      <div class="projects-slider__wrapper swiper-wrapper">
        <div
          v-for="slide of slides"
          :key="slide.title"
          class="projects-slider__slide swiper-slide"
        >
          <div
            class="projects-slider__img image-style-cover"
            v-html="slide.field_image[0].markup"
          />
          <div class="projects-slider__info">
            <div class="projects-slider__text">{{ slide.title }}</div>
            <ButtonBase
              name="secondary"
              class="projects-slider__details"
              mode="nuxt-link"
              :link="slide.url"
              size="large"
              >Подробнее</ButtonBase
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
  titleSize: {
    type: String,
    required: false,
    default: "h3",
  },
});

const slider = ref(null),
  wrap = ref(null),
  swiper = ref(),
  prevBtn = ref(),
  nextBtn = ref();

function updateSliderWidth() {
  if (slider.value) {
    slider.value.style.width = "0px";
    setTimeout(() => {
      slider.value.style.width = wrap.value.clientWidth + "px";
    }, 0);
    // здесь можно добавить любой дополнительный код для пересчета ширины слайдера
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSliderWidth);
});

onMounted(() => {
  // на тот случай, если слайдер находится внутри flex и grid
  window.addEventListener("resize", updateSliderWidth);
  slider.value.style.width = wrap.value.clientWidth + "px";
  prevBtn.value = wrap.value.querySelector(".slider__btn--prev");
  nextBtn.value = wrap.value.querySelector(".slider__btn--next");
  swiper.value = new Swiper(slider.value, {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    speed: 300,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: nextBtn.value,
      prevEl: prevBtn.value,
    },
  });
});
</script>

<style lang="scss" scoped>
.projects-slider {
  & {
    width: 0;
  }
  &__slide {
    position: relative;
    width: 100%;
    padding-bottom: 50px;
  }
  &__img {
    width: 100%;
    aspect-ratio: 1318/660;
  }
  &__info {
    position: absolute;
    bottom: 0px;
    right: 50px;
    max-width: calc(100% - 100px);
    width: 700px;
    background-color: var(--bg-secondary);
    padding: 40px;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__text {
    font-family: var(--font-title);
    font-size: 26px;
  }
  & &__details {
    background-color: var(--btn-tertiary);
  }
}
@include laptop {
  .projects-slider {
    &__text {
      font-size: 20px;
    }
    &__info {
      padding: 30px;
    }
  }
}
@include tablet-s {
  .projects-slider {
    &__info {
      position: static;
      width: 100%;
      max-width: initial;
    }
  }
}
@include mobile {
  .projects-slider {
    &__slide {
      padding-bottom: 0;
    }
    &__info {
      padding: 20px;
      flex-direction: column;
      gap: 16px;
    }
    &__text {
      font-size: 18px;
    }
  }
}
</style>
