<template>
    <section>
        <SliderGallery :slides="properties" title="Галерея"/>
    </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Array,
    required: true,
    default: ()=>[],
  },
});
</script>