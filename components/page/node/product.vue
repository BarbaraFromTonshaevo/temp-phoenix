<template>
  <div class="product">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
      <h1 class="product__title title-h1">
        {{ data.data.title }}
      </h1>
    </div>
    <SectionProductTop
      class="product__top"
      :slides="data.data.field_gallery"
      :description="data.data.body[0]"
    />
    <ContainerNavigation :navigationList="nav" class="product__body container">
      <SectionProductCharacteristics
        id="characteristics"
        :properties="data.data.field_chars"
      />
      <SectionProductServices id="services" />
      <SectionProductBenefits
        id="benefits"
        :properties="data.data.field_advantages_text"
      />
      <SectionProductProjects
        id="projects"
        :properties="data.data.field_projects"
      />
      <SectionProductCategories
        id="categories"
        :properties="data.data.other_products"
      />
    </ContainerNavigation>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
const nav = [
  {
    title: "Характеристики",
    id: "characteristics",
  },
  {
    title: "Услуги компании",
    id: "services",
  },
  {
    title: "Преимущества",
    id: "benefits",
  },
  {
    title: "Проекты",
    id: "projects",
  },
  {
    title: "Другие категории",
    id: "categories",
  },
];
</script>

<style lang="scss" scoped>
.product {
  &__title {
    margin-bottom: 50px;
  }
  &__top {
    margin-bottom: 220px;
  }
}
@include desktop {
  .product {
    &__top {
      margin-bottom: 160px;
    }
  }
}
@include tablet-s {
  .product {
    &__top {
      margin-bottom: 80px;
    }
  }
}
@include mobile {
  .product {
    &__title {
      margin-bottom: 40px;
    }
  }
}
</style>
