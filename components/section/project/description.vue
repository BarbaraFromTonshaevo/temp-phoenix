<template>
  <section>
    <h3 class="section-title title-h3">Описание проекта</h3>
    <ContainerContent class="project-description__content" v-if="properties">
      <div v-html="properties"></div>
    </ContainerContent>
  </section>
</template>

<script setup>
const props = defineProps({
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
