<template>
    <div class="projects-list__body section-mb">
      <div class="container">
        <ul class="projects-list__list">
          <li class="projects-list__item" v-for="item of list" :key="item.title">
            <CardProject
              :title="item.title"
              :region="item.field_region"
              :segment="item.field_segment"
              :url="item.url"
              :img="item.field_image[0]"
            />
          </li>
        </ul>
        <ButtonSecondary class="projects-list__btn" text="Показать ещё" :isLarge="true" @click="showMore" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    list: {
      type: Array,
      required: true,
      default: [],
    }
  })
  
  function showMore() {}
  </script>
  
  <style lang="scss" scoped>
  .projects-list {
    &__list {
      border-top: 1px solid var(--stroke-primary);
      margin-bottom: 80px;
    }
    &__btn{
      width: 100%;
    }
  }
  @include tablet-s{
    .projects-list{
      &__list{
        margin-bottom: 40px;
      }
    }
  }
  </style>
  