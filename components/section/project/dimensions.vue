<template>
  <section>
    <h3 class="section-title title-h3">Габариты</h3>
    <div>
      <UiDoubleStroke v-for="item of properties" :title="item.field_name[0]">{{
        item.field_value[0]
      }}</UiDoubleStroke>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  properties: {
    type: Object,
    required: true,
    default: [],
  },
});
</script>
