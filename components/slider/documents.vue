<template>
  <div ref="wrap" class="slider-documents__wrap">
    <SliderTop title="Сертификация компании" title-size="h2"/>
    <div ref="slider" class="slider-documents swiper">
      <div class="swiper-wrapper">
        <div v-for="slide of slides" :key="slide.field_name[0]" class="swiper-slide">
          <CardDocument
            :title="slide.field_name[0]"
            :url="slide.field_file[0].url"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { ref, onMounted } from "vue";
defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const slider = ref(null),
  wrap = ref(null),
  swiper = ref(),
  prevBtn = ref(),
  nextBtn = ref();

onMounted(() => {
  // на тот случай, если слайдер находится внутри flex и grid
  prevBtn.value = wrap.value.querySelector(".slider__btn--prev");
  nextBtn.value = wrap.value.querySelector(".slider__btn--next");
  swiper.value = new Swiper(slider.value, {
    modules: [Navigation],
    slidesPerView: 1,
    speed: 300,
    navigation: {
      nextEl: nextBtn.value,
      prevEl: prevBtn.value,
    },
  });
});
</script>
