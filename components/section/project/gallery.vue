<template>
    <section>
        <SliderGallery :slides="properties" title="Галерея"/>
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