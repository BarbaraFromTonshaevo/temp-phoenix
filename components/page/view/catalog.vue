<template>
  <section class="catalog section-mb">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
      <h1 class="catalog__title title-h1">Каталог</h1>
      <ul class="catalog__list">
        <li
          v-for="catalogItem of data.data"
          :key="catalogItem.url"
          class="catalog__item"
        >
          <CardCatalog
            :title="catalogItem.title"
            :text="catalogItem.field_description_preview"
            :img="catalogItem.field_image_preview"
            :url="catalogItem.url"
          />
        </li>
        <li class="catalog__item">
          <CardCatalog
            :title="data.service_info.title"
            :text="data.service_info.description"
            :img="data.service_info.image"
            :url="data.links.link_services.href"
          />
        </li>
      </ul>
      <ContainerContent class="catalog__text">
        <div v-html="data.ceo_text"/>
      </ContainerContent>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  &__title {
    margin-bottom: 100px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
    margin-bottom: 120px;
  }
  &__text {
    max-width: 1170px;
    color: var(--text-default);
  }
}
@include tablet {
  .catalog {
    &__title {
      margin-bottom: 60px;
    }
    &__list {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 60px;
    }
  }
}
@include tablet-s {
  .catalog {
    &__title {
      margin-bottom: 40px;
    }
    &__list {
      grid-template-columns: 1fr;
      margin-bottom: 40px;
    }
  }
}
</style>
