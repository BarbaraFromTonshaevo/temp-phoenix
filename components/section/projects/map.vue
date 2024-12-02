<template>
  <div class="projects-map">
    <UiMap
      class="projects-map__body"
      :map-id="'map-projects'"
      :center="centerProjects"
      :zoom="zoomProjects"
      :points.async="points"
    />
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  points: {
    type: Array,
    required: true,
    default: () => [],
  },
});
const centerProjects = [76.21568080867569, 56.710066920115786];
const zoomProjects = 4;
</script>

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
