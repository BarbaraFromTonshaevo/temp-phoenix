<template>
  <section>
    <h3 class="section-title title-h3">Габариты</h3>
    <div>
      <UiDoubleStroke
        v-for="item of properties"
        :key="item.field_name[0]"
        :title="item.field_name[0]"
        >{{ item.field_value[0] }}</UiDoubleStroke
      >
    </div>
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
