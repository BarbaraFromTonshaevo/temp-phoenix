<template>
  <SectionAboutHero :breadcrumbs="data.breadcrumb" :title="data.data.title" />
  <SectionAboutMain />
  <SectionAboutProjects :slides="data.data.field_projects" />
  <SectionAboutDocuments :list="data.data.field_documents" />
  <SectionAboutPartners :list="data.data.field_partners" />
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

