<template>
  <section>
    <h3 class="section-title title-h3">Объем работ</h3>
    <ul class="projects-volume__list">
      <li v-for="item, index of properties" :key="'projects-volume-' + index" class="projects-volume__item">
        <span class="projects-volume__left">{{ item.field_name[0] }}</span>
        <span class="projects-volume__right">{{ index >8? index+1: '0'+(index + 1) }}</span>
      </li>
    </ul>
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
.projects-volume{
  &__list{
    columns: 2;
    gap: 6px;
  }
  &__item{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 40px 24px 24px;
    border-bottom: 1px solid var(--stroke-primary);
    font-family: var(--font-title);
    font-size: 22px;
  }
  &__right{
    font-size: 18px;
    color: var(--text-accent);
  }
}
@include laptop{
  .projects-volume{
    &__item{
      font-size: 18px;
    }
  }
}
@include tablet-s{
  .projects-volume{
    &__list{
      columns: initial;
    }
  }
}
@include mobile{
  .projects-volume{
    &__item{
      padding: 20px 0;
    }
  }
}
</style>
