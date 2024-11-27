<template>
  <section class="projects">
    <div class="projects__top">
      <div class="container">
        <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
        <h1 class="projects__title title-h1">Проекты</h1>
        <div class="projects__descr">
          Ознакомьтесь с нашими крупными проектами, которые выполнены под ключ
          (от проектирования до монтажа с вводом в эксплуатацию).
        </div>
      </div>
    </div>

    <div class="projects__body">
      <div class="projects__body-top container">
        <div class="projects__btns">
          <InputRadio
            name="projects-switch"
            :items="switchList"
            :initialValue="activeBlock"
            @update:modelValue="updateSwitch"
          />
        </div>
        <!-- <SectionProjectsFilter
            :region="projects.filters.region"
            :segment="projects.filters.segment"
          /> -->
      </div>

      <div class="projects__wrapper" ref="wrapper">
        <div class="projects__wrap" data-switch="projects-switch-1">
          <SectionProjectsMap :list="data.data" :points="points" />
        </div>
        <div class="projects__wrap" data-switch="projects-switch-2">
          <SectionProjectsList :list="data.data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const { isMobile } = useDevice();
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const points = computed(()=>{
    let arr = [];
    props.data.data.forEach(element => {
        arr.push({
            coordinates: element.field_coordinates.split(',').map(coord => +coord),
            content: `<img src="/icons/point-s.svg" class="projects__map-point">`
        })
    });
    return arr;
})

// Switch of blocks map|list

const switchList = [
  {
    id: "projects-switch-1",
    value: "projects-switch-1",
    label: isMobile ? "На карте" : "Проекты на карте",
  },
  {
    id: "projects-switch-2",
    value: "projects-switch-2",
    label: isMobile ? "Списком" : "Проекты списком",
  },
];
const activeBlock = ref(switchList[0].value);
const wrapper = ref(null);
onMounted(() => {
  const activeElem = wrapper.value.querySelector(
    `[data-switch="${activeBlock.value}"]`
  );
  activeElem.classList.add("projects__wrap--active");
  wrapper.value.style.height = activeElem.clientHeight + "px";
});
// // изменить активный блок
const updateSwitch = (newValue) => {
  activeBlock.value = newValue;
  wrapper.value.querySelector(".projects__wrap--active").classList.remove("projects__wrap--active");
  const activeElem = wrapper.value.querySelector(
    `[data-switch="${activeBlock.value}"]`
  );
  activeElem.classList.add("projects__wrap--active");
  wrapper.value.style.height = activeElem.clientHeight + "px";
};
</script>

<style lang="scss">
.projects {
  &__body-top {
    display: flex;
    flex-wrap: wrap;
    gap: 25px 50px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
  }
  &__title {
    margin-bottom: 40px;
  }
  &__descr {
    max-width: 730px;
    font-size: 18px;
  }
  &__top {
    margin-bottom: 70px;
  }
  &__wrapper {
    position: relative;
    overflow: hidden;
    height: 0;
    transition: height var(--time);
  }

  &__wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--time), visibility var(--time);
    &--active {
      opacity: 1;
      visibility: visible;
    }
  }
}
@include tablet {
  .projects {
    &__descr {
      font-size: 16px;
    }
    &__body-top {
      gap: 0;
      margin-bottom: 60px;
    }
  }
}
@include mobile {
  .projects {
    &__title {
      margin-bottom: 24px;
    }
    &__descr {
      font-size: 14px;
    }
    &__top {
      margin-bottom: 30px;
    }
    &__btns {
      width: 100%;
      .input-radio {
        width: 100%;
        flex-wrap: nowrap;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 6px;
      }
      .input-radio__label {
        padding: 0;
        width: 100%;
        height: 48px;
        font-size: 14px;
        border-width: 1px;
      }
    }
  }
}
/* Animations */
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }

// .fade-enter, .fade-leave-to /* .fade-leave-active в старых версиях */ {
//   opacity: 0;
// }
</style>
