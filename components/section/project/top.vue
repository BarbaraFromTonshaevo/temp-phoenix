<template>
  <section class="project">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="project__top">
        <h1 class="project__title title-h1" v-html="title" />
        <div class="project__wrapper">
          <div class="project__wrap">
            <div class="project__wrap-subtitle">Регион</div>
            <div class="project__wrap-text">
              {{ region }}
            </div>
          </div>
          <div class="project__wrap">
            <div class="project__wrap-subtitle">Сегмент</div>
            <div class="project__wrap-text">
              {{ segment }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project__img image-style-cover" v-html="image" />
  </section>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    default: () => {},
  },
  title: {
    type: String,
    default: "",
  },
  segment: {
    type: String,
    default: "",
  },
  region: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 110px;
  &__top {
    display: flex;
    align-items: end;
    gap: 25px 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  &__title {
    max-width: 1170px;
  }
  &__wrapper {
    display: flex;
    gap: 40px;
  }
  &__wrap-subtitle {
    font-weight: 500;
    color: var(--text-default-additional);
    margin-bottom: 10px;
  }
  &__wrap-text {
    font-weight: 500;
    font-size: 20px;
  }
  &__img {
    width: 100%;
    aspect-ratio: 1920/800;
  }
}
@include laptop {
  .project {
    margin-bottom: 80px;
    &__wrap-text {
      font-size: 18px;
    }
  }
}
@include tablet-s {
  .project {
    &__wrap-subtitle {
      font-size: 14px;
      margin-bottom: 6px;
    }
    &__wrap-text {
      font-size: 16px;
    }
  }
}
@include mobile {
  .project {
    &__top {
      margin-bottom: 40px;
    }
    &__wrap-subtitle {
      font-size: 12px;
    }
    &__wrap-text {
      font-size: 12px;
    }
    &__img {
      aspect-ratio: 320/200;
    }
  }
}
</style>
