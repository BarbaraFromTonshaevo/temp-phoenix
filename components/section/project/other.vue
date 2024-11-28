<template>
  <section>
    <SliderOther :slides="properties" title="Другие проекты" />
  </section>
</template>

<script setup>
const props = defineProps({
  properties: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
