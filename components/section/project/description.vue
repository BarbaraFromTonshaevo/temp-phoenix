<template>
  <section>
    <h3 class="section-title title-h3">Описание проекта</h3>
    <ContainerContent v-if="properties" class="project-description__content">
      <div v-html="properties"/>
    </ContainerContent>
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style lang="scss">
.project-description__content {
  font-size: 20px;
  font-weight: 500;
}
</style>
