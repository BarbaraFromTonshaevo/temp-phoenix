<template>
  <div class="projects-list__body section-mb">
    <div class="container">
      <ul class="projects-list__list">
        <li v-for="item of list" :key="item.title" class="projects-list__item">
          <CardProject
            :title="item.title"
            :region="item.field_region"
            :segment="item.field_segment"
            :url="item.url"
            :img="item.field_image[0]"
          />
        </li>
      </ul>
      <ButtonBase
        class="projects-list__btn"
        name="secondary"
        mode="button"
        size="large"
        @click="showMore"
        >Показать ещё</ButtonBase
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
    default: ()=>[],
  },
});

function showMore() {}
</script>

<style lang="scss" scoped>
.projects-list {
  &__list {
    border-top: 1px solid var(--stroke-primary);
    margin-bottom: 80px;
  }
  &__btn {
    width: 100%;
  }
}
@include tablet-s {
  .projects-list {
    &__list {
      margin-bottom: 40px;
    }
  }
}
</style>
