<template>
  <section class="faq__section">
    <h3 class="faq__heading title-h3">{{ properties.title }}</h3>
    <UiAccordion :data="properties.data"/>
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Object,
    required: true,
    default: () => {
      return { title: "", data: "" };
    },
  },
});
</script>

<style lang="scss">
.faq {
  &__section {
    width: 100%;
  }
  &__heading {
    margin-bottom: 60px;
  }
}
@include tablet-s {
  .faq {
    &__heading {
      margin-bottom: 30px;
    }
  }
}
</style>
