<template>
    <div>
        <h1 class="title-h1">Contacts page</h1>
        <pre>{{ data }}</pre>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        default: ()=>{},
    }
})
</script>

<style lang="scss" scoped></style>
