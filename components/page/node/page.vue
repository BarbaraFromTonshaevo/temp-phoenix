<template>
  <section class="text-page section-mb">
    <div class="container">
      <h1 class="text-page__title title-h1 section-title" v-html="data.data.title" />
      <ContainerContent class="text-page__content">
        <div v-html="data.data.body"/>
      </ContainerContent>
    </div>
  </section>
  <section v-if="data.data.field_gallery.length > 0" class="text-page__gallery section-mb">
    <div class="container">
      <LazySliderGallery  :slides="data.data.field_gallery" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.text-page{
    &__content{
        max-width: 1320px;
    }
}
</style>
