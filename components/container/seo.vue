<template>
  <div
    class="seo-text"
    :class="[
      { 'seo-text--opened': isOpened },
      { 'seo-text--without-shield': withoutShield },
    ]"
  >
    <div ref="seoBody" class="seo-text__body">
      <div ref="seoContent" class="seo-text__content">
        <slot/>
      </div>
      <div class="seo-text__shield"/>
    </div>
    <button class="seo-text__btn" @click="toggleText()">
      <span class="seo-text__close">Скрыть</span>
      <span class="seo-text__open">Читать полностью</span>
      <svg>
        <use xlink:href="/icons/sprite.svg#arrow"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  closedHeight: {
    type: Number,
    default: 400,
  },
});

const isOpened = ref(false);
const withoutShield = ref(false);
const seoContent = ref(null);
const seoBody = ref(null);
const contentHeight = ref(0);

onMounted(() => {
  if (props.closedHeight > seoContent.value.clientHeight) {
    isOpened.value = true;
    withoutShield.value = true;
  } else {
    contentHeight.value = seoContent.value.clientHeight;
    seoBody.value.style.height = props.closedHeight + "px";
  }
});

function toggleText() {
  isOpened.value = !isOpened.value;
  if (isOpened.value) {
    seoBody.value.style.height = seoContent.value.clientHeight + "px";
  } else {
    seoBody.value.style.height = props.closedHeight + "px";
  }
}
</script>

<style lang="scss">
.seo-text {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__shield {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 180px;
    background-image: linear-gradient(transparent, var(--bg-prim));
    opacity: 1;
    transition: opacity var(--time);
  }
  &__body {
    position: relative;
    overflow: hidden;
    transition: height var(--time);
  }
  &__btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    gap: 5px;
    transition: color var(--time);
    color: var(--text-prim);
    svg {
      width: 32px;
      height: 32px;
      fill: transparent;
      stroke: var(--icon-prim);
      transform: rotate(-90deg);
      transition: stroke var(--time), transform var(--time);
    }
  }
  &__close {
    display: none;
  }
  &--opened {
    .seo-text__shield {
      opacity: 0;
    }
    .seo-text__btn {
      svg {
        transform: rotate(90deg);
      }
    }
    .seo-text__close {
      display: block;
    }
    .seo-text__open {
      display: none;
    }
  }
  &--without-shield {
    .seo-text__btn {
      display: none;
    }
  }
}
@include hover {
  .seo-text__btn:hover {
    color: var(--text-accent);
    svg {
      stroke: var(--icon-accent);
      transform: rotate(-90deg) translateX(-5px);
    }
  }
  .seo-text.opened .seo-text__btn:hover {
    svg {
      transform: rotate(90deg) translateX(-5px);
    }
  }
}
</style>
