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
            :initial-value="activeBlock"
            @update:model-value="updateSwitch"
          />
        </div>
        <SectionProjectsFilter
          :region="filters.region"
          :segment="filters.segment"
          @update:segment="changeSegment"
          @update:region="changeRegion"
          @reset="resetFilter"
        />
      </div>

      <div ref="wrapper" class="projects__wrapper">
        <div class="projects__wrap" data-switch="projects-switch-1">
          <SectionProjectsMap
            :list.async="projectsData.data"
          />
        </div>
        <div class="projects__wrap" data-switch="projects-switch-2">
          <SectionProjectsList :list.async="projectsData.data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUpdated } from "vue";
const router = useRouter();
const route = useRoute();

const { isMobile } = useDevice();
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
// данные запроса - начальные данные идет из внешнего запроса, далее меняется внутренним запросом
const projectsData = ref();
if (props.data) {
  projectsData.value = props.data;
}
// фильтры
const filters = computed(
  () => {
    return {
      region: [
        {
          value: "all",
          label: "Регион",
        },
        ...projectsData.value.filters.region.options,
      ],
      segment: [
        {
          value: "all",
          label: "Сегмент",
        },
        ...projectsData.value.filters.segment.options,
      ],
    };
  },
  { deep: true }
);
// Переключение с карты на список
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

// изменить активный блок
const updateSwitch = (newValue) => {
  activeBlock.value = newValue;
  wrapper.value
    .querySelector(".projects__wrap--active")
    .classList.remove("projects__wrap--active");
  const activeElem = wrapper.value.querySelector(
    `[data-switch="${activeBlock.value}"]`
  );
  activeElem.classList.add("projects__wrap--active");
  wrapper.value.style.height = activeElem.clientHeight + "px";
};

// изменить query параметр для региона
function changeRegion(value) {
  if (value.value == "all") {
    const query = { ...route.query }; // Создаем копию текущего query
    delete query.region;
    router.push({
      path: route.path,
      query: {
        ...query,
      },
    });
  } else {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        region: value.value,
      },
    });
  }
}

// изменить query параметр для сегмента
function changeSegment(value) {
  if (value.value == "all") {
    const query = { ...route.query }; // Создаем копию текущего query
    delete query.segment;
    router.push({
      path: route.path,
      query: {
        ...query,
      },
    });
  } else {
    router.push({
      path: route.path,
      query: {
        ...route.query,
        segment: value.value,
      },
    });
  }
}

// отчистить фильтр
function resetFilter() {
  router.push({
    path: route.path,
    query: {},
  });
}

// наблюдатель за параметрами url
watch(
  () => route.query,
  (newQuery) => {
    fetchData(newQuery);
  },
  { deep: true }
);

// запрос к апи (вызывается при изменении параметров)
async function fetchData(query) {
  // Используем useFetch для выполнения запроса
  const res = await $fetch(
    `${useRuntimeConfig().public.apiBase}${route.path}?_format=json`,
    {
      query: query,
    }
  );
  projectsData.value = res;
}
// сменить высоту у блока
onUpdated(() => {
  wrapper.value.style.height =
    wrapper.value.querySelector(".projects__wrap--active").clientHeight + "px";
});
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
    &__top {
      margin-bottom: 50px;
    }
    &__title {
      margin-bottom: 24px;
    }
    &__descr {
      font-size: 16px;
    }
    &__body-top {
      // gap: 0;
      margin-bottom: 60px;
    }
  }
}
@include mobile {
  .projects {
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
