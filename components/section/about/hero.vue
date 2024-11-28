<template>
  <section class="about-hero">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="about-hero__top">
        <h1 class="about-hero__title title-h1" v-html="title"/>
        <div class="about-hero__descr">
          Проектирование, производство и строительство самонесущих складов и
          ангаров из ЛСТК
        </div>
      </div>
    </div>
    <div class="about-hero__img image-style-cover">
      <img src="/images/example/example-4.jpg" alt="" >
    </div>
  </section>
</template>

<script setup>
defineProps({
    breadcrumbs: {
        type: Array,
        default: ()=>[]
    },
    title: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.about-hero {
  margin-bottom: 110px;
  &__top {
    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-gap: 6px;
    align-items: end;
    margin-bottom: 50px;
  }
  &__title {
    max-width: 540px;
  }
  &__descr {
    font-size: 30px;
  }
  &__img {
    width: 100%;
    aspect-ratio: 1920/780;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      display: flex;
      object-fit: cover;
    }
  }
}
@include laptop {
  .about-hero {
    margin-bottom: 80px;
    &__descr {
      font-size: 24px;
    }
  }
}
@include tablet {
  .about-hero {
    &__top {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
    }
    &__descr{
        font-size: 20px;
        max-width: 500px;
    }
  }
}
@include mobile{
    .about-hero{
        &__top{
            margin-bottom: 24px;
        }
        &__descr{
            font-size: 18px;
        }
        &__img{
            aspect-ratio: 320/200;
        }
    }
}
</style>