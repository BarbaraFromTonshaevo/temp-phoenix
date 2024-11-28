<template>
    <section class="product-projects section-mb">
        <SliderProjects :slides="properties" title="Наши проекты"/>
    </section>
</template>

<script setup>
const props = defineProps({
  properties: {
    type: Array,
    required: true,
    default: ()=>[],
  },
});
</script>