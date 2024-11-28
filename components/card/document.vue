<template>
  <a :href="url" target="_blank" class="card-doc">
    <div class="card-doc__icon">
      <svg>
        <use xlink:href="/icons/sprite.svg#doc"/>
      </svg>
    </div>
    <div class="card-doc__title">
      {{ title }}
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  url: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.card-doc {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  min-height: 282px;
  padding: 30px;
  border: 1px solid var(--stroke-primary);
  &__title {
    font-size: 22px;
    font-family: var(--font-title);
    line-height: 1.1;
    max-width: 365px;
  }
  &__icon {
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--btn-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 36px;
      height: 36px;
      fill: var(--icons-white);
    }
  }
}
@include mobile {
  .card-doc {
    min-height: 200px;
    padding: 20px;
    &__title {
      font-size: 18px;
    }
    &__icon {
      width: 60px;
      svg {
        width: 27px;
        height: 27px;
      }
    }
  }
}
</style>
