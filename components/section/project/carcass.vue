<template>
    <section>
        <h3 class="section-title title-h3">Каркас</h3>
        <CardCarcass class="carcass__item" :title="properties.title" :url="properties.url" :img="properties.img"/>
        <!-- <ul class="carcass__list">
            <li class="carcass__item" v-for="item of list">
                <CardCarcass :title="item.title" :url="item.url" :img="item.img"/>
            </li>
        </ul> -->
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
.carcass{
    &__item{
        max-width: 50%;
        width: 435px;
    }
}
@include mobile{
  .carcass{
    &__item{
      max-width: 435px;
      width: 100%;
    }
  }
}
</style>