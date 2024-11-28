<template>
  <section class="product-benefits">
    <h2 class="product-benefits__title title-h3">Преимущества</h2>
    <ol class="product-benefits__list">
      <li
        class="product-benefits__item"
        v-for="(benefit, index) of properties"
        :key="benefit"
      >
        <div class="product-benefits__num">
          {{ index >= 9 ? index + 1 : "0" + (index + 1) }}
        </div>
        <div class="product-benefits__text">{{ benefit }}</div>
      </li>
    </ol>
  </section>
</template>

<script setup>
const props = defineProps({
  properties: {
    type: Array,
    required: true,
    default: ()=>[],
  },
});
</script>

<style lang="scss">
.product-benefits {
  &__title {
    margin-bottom: 60px;
  }
  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
  }
  &__item {
    font-family: var(--font-title);
    min-height: 250px;
    height: auto;
    background-color: var(--bg-secondary);
    font-size: 22px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    &::marker {
      display: block;
    }
  }
  &__num {
    font-size: 18px;
    line-height: 1.1;
    color: var(--text-accent);
  }
}
@include tablet {
  .product-benefits {
    &__title {
      margin-bottom: 40px;
    }
  }
}
@include tablet-s{
  .product-benefits{
    &__item{
      padding: 20px;
      min-height: 150px;
      font-size: 18px;
    }
  }
}
@include mobile {
  .product-benefits {
    &__list{
      grid-template-columns: 1fr;
    }
    &__title {
      margin-bottom: 32px;
    }
  }
}
</style>
