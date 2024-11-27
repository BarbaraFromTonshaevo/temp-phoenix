<template>
    <section class="front-projects section-mb">
        <div class="container">
            <h2 class="section-subtitle">
                проекты
            </h2>
            <h2 class="front-projects__title title-h2">Склады и ангары ТМК «Феникс» решают <strong>логистические задачи наших клиентов</strong></h2>
            <SliderFrontProjects :slides="list"/>
        </div>
    </section>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
    default: ()=>[],
  },
})
</script>

<style lang="scss" scoped>
.front-projects{
    &__title{
        max-width: 1170px;
        margin-bottom: 80px;
    }
}
@include tablet-s{
    .front-projects{
        &__title{
            margin-bottom: 30px;
        }
    }
}
</style>