<template>
  <div class="faq">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
      <h1 class="faq__title title-h1">Вопрос-ответ</h1>
      <ContainerNavigation :navigation-list="nav" class="faq__body">
        <SectionFaq
          v-for="navItem of nav"
          :id="navItem.id"
          :key="navItem.id"
          :properties="navItem.properties"
        />
      </ContainerNavigation>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const nav = computed(() => {
  const arr = [];
  for (
    let sectionIndex = 0;
    sectionIndex < props.data.data.field_questions.length;
    sectionIndex++
  ) {
    const accordionArray = [];
    for (
      let itemIndex = 0;
      itemIndex <
      props.data.data.field_questions[sectionIndex].field_questions.length;
      itemIndex++
    ) {
      accordionArray.push({
        title:
          props.data.data.field_questions[sectionIndex].field_questions[
            itemIndex
          ].field_question[0],
        body: props.data.data.field_questions[sectionIndex].field_questions[
          itemIndex
        ].field_answear[0],
      });
    }
    arr.push({
      title: props.data.data.field_questions[sectionIndex].field_subject[0],
      id: "faq-" + props.data.data.field_questions[sectionIndex].id,
      properties: {
        title: props.data.data.field_questions[sectionIndex].field_subject[0],
        data: accordionArray,
      },
    });
  }
  return arr;
});
</script>
<style lang="scss" scoped>
.faq {
  &__title {
    margin-bottom: 100px;
  }
}
@include desktop {
  .faq {
    &__title {
      margin-bottom: 80px;
    }
  }
}
@include laptop {
  .faq {
    &__title {
      margin-bottom: 60px;
    }
  }
}
</style>