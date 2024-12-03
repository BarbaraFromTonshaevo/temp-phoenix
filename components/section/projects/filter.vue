<template>
  <div
    class="projects-filter"
    :class="[
      { 'projects-filter--adaptive': isMobileOrTablet },
      { 'projects-filter--opened': isOpened },
    ]"
  >
    <div
      v-if="isMobileOrTablet"
      class="projects-filter__btn"
      @click="isOpened = true"
    >
      Фильтры
    </div>
    <div class="projects-filter__body">
      <div class="projects-filter__close" @click="isOpened = false">
        <svg>
          <use xlink:href="/icons/sprite.svg#plus" />
        </svg>
      </div>
      <div class="projects-filter__selects">
        <InputSelect
          :items="region"
          :initial-item.async="initialRegion"
          :is-accordion="false"
          class="projects-filter__select"
          @update:selected-item="changeRegion"
        />
        <InputSelect
          :items="segment"
          :initial-item.async="initialSegment"
          :is-accordion="false"
          class="projects-filter__select"
          @update:selected-item="changeSegment"
        />
      </div>
      <div class="projects-filter__btns">
        <ButtonBase
          v-if="isMobileOrTablet"
          class="projects-filter__submit"
          :size="isMobileOrTablet ? 'middle' : 'large'"
          mode="button"
          name="primary"
          >Применить</ButtonBase
        >
        <button
          type="reset"
          class="projects-filter__reset"
          :class="{ 'projects-filter__reset--middle': isMobileOrTablet }"
          @click="resetFilter"
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  segment: {
    type: Array,
    required: true,
    default: () => [],
  },
  region: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const initialSegment = computed(() => {
  let activeOption = props.segment.find((item) => item.active == true);
  return activeOption ? activeOption : props.segment[0];
});

const initialRegion = computed(() => {
  let activeOption = props.region.find((item) => item.active == true);
  return activeOption ? activeOption : props.region[0];
});

const { isMobileOrTablet } = useDevice();

const isOpened = ref(false);

const emits = defineEmits(["update:segment", "update:region", "reset"]);
function changeRegion(value) {
  emits("update:region", value);
}
function changeSegment(value) {
  emits("update:segment", value);
}
function resetFilter() {
  emits("reset");
}
</script>

<style lang="scss" scoped>
.projects-filter {
  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
  }
  &__selects {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  &__reset {
    font: 600 16px var(--font);
    color: var(--text-primary);
    transition: color var(--time);
  }
  &__close {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    transform: rotate(45deg);
    svg {
      width: 40px;
      height: 40px;
      fill: var(--icons-grey);
      transition: fill var(--time);
    }
  }
  &__btn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--header-index);
    height: 48px;
    width: 100%;
    background-color: var(--btn-primary);
    color: var(--text-contrast);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--adaptive {
    .projects-filter__body {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--bg-primary);
      z-index: var(--header-index);
      padding: 100px 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      flex-wrap: nowrap;
      gap: 0;
      transition: opacity var(--time), visibility var(--time);
      opacity: 0;
      visibility: hidden;
    }
    .projects-filter__close {
      display: block;
    }
    .projects-filter__selects {
      flex-direction: column;
      width: calc(100% + 20px);
      // overflow: auto;
      flex-wrap: nowrap;
      margin-right: -20px;
      padding-right: 20px;
    }
    .projects-filter__select {
      width: 100%;
    }
    .projects-filter__submit {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .projects-filter__reset {
      padding: 0 60px;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      &--middle {
        height: 55px;
      }
    }
    .projects-filter__btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
    }
  }
  &--opened {
    .projects-filter__body {
      opacity: 1;
      visibility: visible;
    }
  }
}
@include hover {
  .projects-filter {
    &__reset:hover {
      color: var(--text-accent);
    }
  }
}
@include tablet-s {
  .projects-filter {
    &__btns {
      flex-direction: column;
    }
    &__reset {
      width: 100%;
    }
    &__submit {
      width: 100%;
    }
  }
}
@include mobile {
  .projects-filter {
    &--adaptive {
      .projects-filter__body {
        padding-top: 80px;
      }
    }
  }
}
</style>
