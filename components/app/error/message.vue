<template>
    <AppError title="Ошибка" :message="message"/>
</template>


<script setup>
defineProps({
    message: {
        type: String,
        default: 'Error message'
    }
})
</script>