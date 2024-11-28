<template>
  <section class="product-char">
    <h2 class="product-char__title title-h3">Характеристики</h2>
    <div class="product-char__list">
      <UiDoubleStroke v-for="item of properties" :key="item.field_name[0]" :title="item.field_name[0]">{{ item.field_value[0] }}</UiDoubleStroke>
    </div>
  </section>
</template>

<script setup>
defineProps({
  properties: {
    type: Object,
    required: true,
    default: ()=>{},
  },
});
</script>

<style lang="scss">
.product-char__title{
  margin-bottom: 60px;
}
@include tablet{
  .product-char__title{
    margin-bottom: 40px;
  }
}
@include mobile{
  .product-char__title{
    margin-bottom: 32px;
  }
}
</style>
