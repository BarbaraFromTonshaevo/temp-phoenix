<template>
  <NuxtLink :to="url" class="card-catalog">
    <div class="card-catalog__front">
      <div class="card-catalog__circle">
        <svg class="card-catalog__plus">
          <use xlink:href="/icons/sprite.svg#plus" />
        </svg>
        <svg class="card-catalog__arrow">
          <use xlink:href="/icons/sprite.svg#arrow-short" />
        </svg>
      </div>
      <div class="card-catalog__img image-style-cover" v-html="img[0].markup" />
      <div class="card-catalog__title">
        {{ props.title }}
      </div>
    </div>
    <div class="card-catalog__back">
      <div class="card-catalog__descr">
        {{ props.text }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    requered: true,
    default: "",
  },
  text: {
    type: String,
    requered: true,
    default: "",
  },
  img: {
    type: Object,
    requered: true,
    default: () => {},
  },
  url: {
    type: String,
    requered: true,
    default: "",
  },
});
</script>

<style lang="scss">
.card-catalog {
  & {
    --time: 0.8s;
    display: flex;
    cursor: pointer;
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: var(--bg-secondary);
  }
  &__front {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  &__circle {
    position: relative;
    z-index: 2;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--bg-primary);
    transition: background-color var(--time);
    margin-left: auto;
  }
  &__plus,
  &__arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
    transition: opacity var(--time);
  }
  &__plus {
    fill: var(--icons-black);
  }
  &__arrow {
    fill: var(--icons-white);
    opacity: 0;
  }
  &__title {
    position: relative;
    z-index: 2;
    font-family: var(--font-title);
    font-size: 22px;
    line-height: 1.2;
    max-width: 400px;
  }
  &__img {
    display: flex;
    width: 274px;
    aspect-ratio: 1;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 50%;
  }
  &__back {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 40px;
    background-color: var(--bg-primary);
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transition: clip-path var(--time) cubic-bezier(0.55, 0, 0.1, 1);
  }
  &__descr {
    max-width: 360px;
    font-size: 18px;
    color: var(--text-default);
    line-height: 1.1;
    margin-right: 80px;
  }

  &:hover {
    .card-catalog__back {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    .card-catalog__circle {
      background-color: var(--icons-red);
    }
    .card-catalog__plus {
      opacity: 0;
    }
    .card-catalog__arrow {
      opacity: 1;
    }
  }
}
@include laptop {
  .card-catalog {
    &__front {
      padding: 20px;
      gap: 25px;
    }
    &__back {
      padding: 20px;
    }
    &__img {
      width: 200px;
    }
    &__title {
      font-size: 20px;
    }
    &__descr {
      font-size: 16px;
    }
  }
}
@include tablet-s {
  .card-catalog {
    &__front {
      gap: 0;
    }
    &__img {
      margin-bottom: 20px;
    }
  }
}
@include mobile {
  .card-catalog {
    &__front {
      padding: 30px 20px;
      gap: 20px;
    }
    &__img {
      margin-bottom: 0;
    }
    &__title {
      order: -1;
      margin-right: 50px;
    }
    &__circle {
      position: absolute;
      top: 30px;
      right: 20px;
      background-color: var(--icons-red);
      width: 32px;
      height: 32px;
    }
    &__plus {
      width: 12px;
      height: 12px;
      opacity: 0;
    }
    &__arrow {
      width: 12px;
      height: 12px;
      opacity: 1;
    }
    &__back {
      display: none;
    }
  }
}
</style>
