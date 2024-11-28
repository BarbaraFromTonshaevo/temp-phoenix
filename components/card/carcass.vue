<template>
    <NuxtLink :to="url" class="card-carcass">
      <div class="card-carcass__img" v-html="img"></div>
      <div class="card-carcass__bottom">
        <div class="card-carcass__title">{{ title }}</div>
        <div class="card-carcass__arrow">
          <svg>
            <use xlink:href="/icons/sprite.svg#arrow-short"></use>
          </svg>
        </div>
      </div>
    </NuxtLink>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: "",
    },
    img: {
      type: String,
      required: true,
      default: "",
    },
    url: {
      type: String,
      required: true,
      default: "#",
    },
  });
  </script>
  
  <style lang="scss">
  .card-carcass {
    display: flex;
    flex-direction: column;
    gap: 30px;
    &__img {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      img {
        width: 100%;
        height: 100%;
        display: flex;
        object-fit: cover;
      }
    }
    &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
    &__title {
      font-size: 22px;
      font-family: var(--font-title);
    }
    &__arrow {
      min-width: 60px;
      width: 60px;
      aspect-ratio: 1;
      background-color: var(--btn-secondary);
      border-radius: 50%;
      transition: background-color var(--time);
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 20px;
        height: 20px;
        fill: var(--icons-black);
        transition: fill var(--time);
      }
    }
  }
  @include hover {
    .card-carcass:hover {
      .card-carcass__arrow {
        background-color: var(--btn-secondary-hover);
        svg {
          fill: var(--icons-white);
        }
      }
    }
  }
  @include tablet {
    .card-carcass {
      &__bottom {
        flex-wrap: wrap;
      }
      &__title {
        font-size: 18px;
      }
    }
  }
  @include mobile {
    .card-carcass {
      &__arrow {
        min-width: 40px;
        width: 40px;
      }
    }
  }
  </style>