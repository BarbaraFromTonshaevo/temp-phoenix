<template>
  <section>
    <h3 class="title-h3">Видео о проекте</h3>
    <iframe class="project-video" :src="properties.markup"/>
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
