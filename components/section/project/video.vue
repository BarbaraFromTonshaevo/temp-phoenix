<template>
    <section>
        <h3 class="title-h3">Видео о проекте</h3>
        <iframe class="project-video" :src="properties.markup"></iframe>
    </section>
</template>

<script setup>
const props = defineProps({
    properties: {
        type: Object,
        required: true,
        default: {}
    }
})
</script>