<template>
  <section>
    <SliderOther :slides="properties" title="Другие проекты" />
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
