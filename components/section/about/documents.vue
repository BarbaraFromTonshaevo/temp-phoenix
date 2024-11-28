<template>
  <section class="about-documents section-mb">
    <div class="container">
      <div class="section-subtitle">документы</div>
      <div v-if="!isActiveSlider" class="about-documents__body">
        <h2 class="title-h2">Сертификация компании</h2>
        <ul class="about-documents__list">
          <li
            v-for="item of list"
            :key="item.title"
            class="about-documents__item"
          >
            <CardDocument :title="item.field_name[0]" :url="item.field_file[0].url"/>
          </li>
        </ul>
      </div>
      <SliderDocuments v-if="isActiveSlider" :slides="list"/>
    </div>
  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue';
defineProps({
  list: {
    type: Array,
    required: true,
    default: ()=>[]
  }
})
const isActiveSlider = ref(false)
onMounted(()=>{
    isActiveSlider.value = document.body.clientWidth <= 480? true: false;
})
</script>

<style lang="scss" scoped>
.about-documents {
  &__body {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 6px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
  }
  &__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    min-height: 282px;
    padding: 30px;
    border: 1px solid var(--stroke-primary);
  }
  &__icon {
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--btn-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 36px;
      height: 36px;
      fill: var(--icons-white);
    }
  }
}
@include desktop{
    .about-documents{
        &__body{
            grid-template-columns: 1fr 2fr;
            gap: 60px;
        }
    }
}
</style>
 