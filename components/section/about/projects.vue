<template>
  <section class="about-projects section-mb">
    <div class="container">
      <div class="section-subtitle">проекты</div>
      <SliderProjects
        :slides="slides"
        title="Строим самонесущие склады и ангары из ЛСТК по всей России"
        title-size="h2"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
