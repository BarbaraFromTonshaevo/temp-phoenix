<template>
  <section>
    <h3 class="section-title title-h3">Обшивка</h3>
    <ul class="projects-sheathing__list">
      <li
        v-for="(item, index) of list"
        :key="'projects-sheathing' + index"
        class="projects-sheathing__item"
      >
        <CardSheathing
          :title="item.title"
          :icon="item.icon"
          :tooltip="item.tooltip"
          :img="item.img"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
const list = [
  {
    title: "Сэндвич-панели",
    icon: "/icons/flame.svg",
    tooltip:
      'Сэндвич-панели отвечают всем стандартам качества, идеально подходят для реализации "теплого" склада" с возможностью выбора цвета (RAL).',
    img: "/images/sheathing-1.png",
  },
  {
    title: "Профнастил",
    icon: "/icons/snowflake.svg",
    tooltip:
      'Профнастил отвечает всем стандартам качества, идеально подходит для реализации "холодного" склада" с возможностью выбора цвета (RAL).',
    img: "/images/sheathing-2.png",
  },
];
</script>

<style lang="scss">
.projects-sheathing {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
  }
}
@include mobile {
  .projects-sheathing {
    &__list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
