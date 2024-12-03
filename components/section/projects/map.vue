<template>
  <div class="projects-map">
    <UiMap
      class="projects-map__body"
      :map-id="'map-projects'"
      :center="centerProjects"
      :zoom="zoomProjects"
      :points.async="points"
    />
    <
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const points = computed(
  () => {
    const arr = [];
    props.list.forEach((element) => {
      arr.push({
        coordinates: element.field_coordinates
          .split(",")
          .map((coord) => +coord),
        properties: {
          balloonContentBody: `
                <div class="projects-map-point">
                    <h5 class="projects-map-point__title title-h5">${element.title}</h5>
                    <div class="projects-map-point__wrap">
                      <div class="projects-map-point__subtitle">Город</div>
                      <div class="projects-map-point__text">${element.field_region}</div>
                    </div>
                    <div class="projects-map-point__wrap">
                      <div class="projects-map-point__subtitle">Сегмент</div>
                      <div class="projects-map-point__text">${element.field_segment} </div>
                    </div>
                    <a href="${element.url}" class="projects-map-point__btn">Подробнее</a>
                </div>
                `,
        },
        options: {
          hideIconOnBalloonOpen: false,
          iconLayout: "default#image",
          iconImageHref: "/icons/point-s.svg",
          iconImageSize: [20, 20],
          iconImageOffset: [-10, -10],
        },
      });
    });
    return arr;
  },
  { deep: true }
);
const centerProjects = [76.21568080867569, 56.710066920115786];
const zoomProjects = 4;
</script>

<style lang="scss">
[class*="-balloon__content"] {
  padding: 40px 10px 40px 40px !important;
  border: none;
}
.projects-map-point {
  font-family: var(--font);
  &__title {
    color: var(--text-primary);
    margin-bottom: 24px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  &__subtitle {
    color: var(--text-default-additional);
  }
  &__text {
    color: var(--text-primary);
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 77px;
    border-radius: 60px;
    font-size: 18px;
    font-weight: 600;
    color: var(--btn-sec-text);
    background-color: var(--btn-sec-bg);
    transition: color var(--time), background-color var(--time);
    margin-top: 36px;
    &:hover {
      color: var(--btn-sec-text-hover);
      background-color: var(--btn-sec-bg-hover);
    }
  }
}
@include tablet {
  .projects-map-point {
    &__title {
      margin-bottom: 16px;
    }
    &__wrap {
      font-size: 14px;
      gap: 5px;
      margin-bottom: 10px;
    }
    &__btn {
      margin-top: 20px;
      height: 60px;
      font-size: 14px;
    }
  }
  [class*="-balloon__content"] {
    padding: 20px !important;
    margin-right: 0px !important;
  }
}
@include mobile {
  [class*="-balloon__content"] > * {
    max-width: 80vw !important;
    height: fit-content !important;
  }
}
</style>

<style lang="scss" scoped>
.projects-map {
  display: flex;
  width: 100%;
  aspect-ratio: 1920/898;
  background-color: var(--bg-secondary);
  background-size: cover;
  &__body {
    width: 100%;
    height: 100%;
  }
}

@include tablet {
  .projects-map {
    aspect-ratio: initial;
    height: 50vh;
  }
}
@include mobile {
  .projects-map {
    aspect-ratio: initial;
    height: 70vh;
  }
}
</style>
