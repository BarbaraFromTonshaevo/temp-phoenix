<template>
  <section class="front-hero">
    <div class="front-hero__bg">
      <video v-if="video || videoWebm" :poster="videoBg.length > 0? useDomain(videoBg[0].raw): ''" loop="true" autoplay="true" muted="" playsinline="" class="front-hero__bg-video">
        <source v-if="video" type="video/mp4" :src="useDomain(video)" />
        <source v-if="videoWebm" type="video/webm" :src="useDomain(videoWebm)" />
      </video>
      <div v-else v-html="videoBg[0].markup" class="front-hero__bg-img"></div>
    </div>
    <div class="front-hero__body">
      <div class="front-hero__container container">
        <h1 class="front-hero__title">ТМК ФЕНИКС</h1>
        <div class="front-hero__descr">
          Проектирование, производство и строительство самонесущих складов и
          ангаров из ЛСТК
        </div>
        <ul class="front-hero__list">
          <li class="front-hero__item">
            <div class="front-hero__item-text">
              реализованных проектов по строительству и проектированию
            </div>
            <div class="front-hero__item-num">500+</div>
          </li>
          <li class="front-hero__item">
            <div class="front-hero__item-text">
              тонн металла в год перерабатывается для строительства наших
              проектов.
            </div>
            <div class="front-hero__item-num">1000+</div>
          </li>
          <li class="front-hero__item">
            <div class="front-hero__item-text">
              наша компания строит склады и ангары по всей России с
            </div>
            <div class="front-hero__item-num">2008 г.</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  video: {
    type: String,
    required: true,
    default: "",
  },
  videoWebm: {
    type: String,
    required: true,
    default: "",
  },
  videoBg: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.front-hero {
  position: relative;
  min-height: fit-content;
  height: 100vh;
  width: 100%;
  margin-bottom: 180px;
  &__bg {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    &::after{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(17, 17, 17, 0.8);
    }
  }
  &__bg-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__bg-img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__body {
    height: 100%;
    padding-top: var(--header-height);
    color: white;
    min-height: fit-content;
  }
  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: fit-content;
  }
  &__title {
    font: 500 190px var(--font-title);
    margin-top: auto;
  }
  &__descr {
    font-weight: 500;
    font-size: 30px;
    max-width: 860px;
    margin-bottom: auto;
  }
  &__list {
    margin-top: auto;
    margin-left: auto;
    display: flex;
    border-top: 1px solid var(--stroke-secondary);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 50px;
    &:not(:first-child) {
      border-left: 1px solid var(--stroke-secondary);
    }
  }
  &__item-text {
    max-width: 340px;
    font-weight: 500;
    font-size: 18px;
    color: var(--text-default-additional);
  }
  &__item-num {
    font: 500 92px/1 var(--font-title);
  }
}

@include laptop {
  .front-hero {
    &__title {
      font-size: 100px;
    }
    &__descr {
      max-width: 600px;
      font-size: 24px;
    }
    &__item {
      padding: 20px 25px;
    }
    &__item-num {
      font-size: 60px;
    }
  }
}
@include tablet-s {
  .front-hero {
    height: fit-content;
    margin-bottom: 80px;
    &__title {
      font-size: 66px;
    }
    &__container {
      padding-top: 60px;
    }
    &__title {
      margin-bottom: 15px;
    }
    &__descr {
      margin-bottom: 60px;
      font-size: 18px;
    }
    &__list {
      flex-direction: column;
      margin-left: initial;
    }
    &__item {
      padding: 30px 0;
      gap: 14px;
      &:not(:first-child) {
        border-left: none;
        border-top: 1px solid var(--stroke-secondary);
      }
    }
  }
}
@include mobile {
  .front-hero {
    &__container {
      padding-top: 40px;
    }
    &__descr {
      margin-bottom: 40px;
    }
    &__item-text {
      font-size: 14px;
    }
    &__item-num {
      font-size: 50px;
    }
  }
}
</style>
