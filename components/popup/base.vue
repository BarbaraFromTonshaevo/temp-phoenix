<template>
  <div class="popup" :class="{ 'popup--active': props.state }">
    <div class="popup__bg" @click="closePopup"></div>
    <div class="popup__window">
      <button class="popup__close" @click="closePopup">
        <svg>
          <use xlink:href="/icons/sprite.svg#close"></use>
        </svg>
      </button>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["state"]);
const emits = defineEmits(["closePopup"]);
function closePopup() {
  emits("closePopup");
}
</script>

<style lang="scss">
.popup {
  --margin-x: 20px;
  --padding-x: 130px;

  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 11;
  position: fixed;
  top: 0;
  right: -20px;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  padding: 30px var(--margin-x);
  transition: opacity var(--time), visibility var(--time);

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-modal);
  }

  &__window {
    display: flex;
    width: fit-content;
    min-height: 280px;
    margin: auto;
    background-color: var(--bg-primary);
    position: relative;
    top: -60px;
    padding: 72px var(--padding-x);
    transition: top 0.4s;
    overflow: hidden;
  }

  &__close {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 32px;
    height: 32px;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--icons-grey);
      transition: fill var(--time);
    }
    &:hover {
      fill: var(--icons-red);
    }
  }

  &__title {
    font: 400 46px/1.25 var(--font-title);
    text-align: center;
  }

  &__subtitle {
    font-size: 16px;
    text-align: center;
  }
  &--active {
    opacity: 1;
    visibility: visible;
  }
  &--active &__window {
    top: 0;
  }
}
@include laptop {
  .popup {
    --padding-x: 50px;
    &__title {
      font-size: 40px;
    }
  }
}
@include tablet-s {
  .popup {
    &__window {
      padding: 50px 30px;
    }
    &__close {
      top: 15px;
      right: 15px;
    }
    &__title {
      font-size: 38px;
    }
  }
}
@include mobile {
  .popup {
    &__window {
      padding: 30px 20px;
    }
    &__close {
      top: 10px;
      right: 10px;
    }
    &__title {
      font-size: 28px;
    }
  }
}
</style>
