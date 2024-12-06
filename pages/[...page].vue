<template>
  <main class="main" :class="{ 'main--front': isFront }">
    <div v-if="status === 'pending' || status === 'fetching'">
      <UiLoader />
    </div>
    <div v-else-if="status === 'success'">
      <component
        :is="componentToRender"
        v-if="componentToRender"
        :data="data"
      />
    </div>
    <div v-else class="error-page">
      <AppError404 v-if="error.statusCode == 404" />
      <AppErrorMessage v-else :message="''" />
    </div>
  </main>
</template>

<script setup>
// НУЖНО!!! Учесть query параметры
import { shallowRef, watch, computed, defineAsyncComponent } from "vue";
const route = useRoute();
const isFront = ref(route.path === "/" ? true : false);
// console.log(route.query);
// опеределяем по какому апи делать запрос
const apiUrl = isFront.value
  ? `${useRuntimeConfig().public.apiBase}/wsapi/packs/front`
  : `${useRuntimeConfig().public.apiBase}${route.path}?_format=json`;

// имя кэша
const cacheName = isFront.value ? "front" : route.path;

// компонента
const componentToRender = shallowRef(null);

// запрос
const { data, status, error } = await useLazyAsyncData(
  cacheName,
  () =>
    $fetch(apiUrl, {
      query: route.query,
    }),
  { deep: true }
);

// Формирование имени компоненты
const componentName = computed(() => {
  // при формировании адреса и имени компоненты учитывать написания snake-case или camel-case
  if (data.value) {
    let nameStr = "";
    if (isFront.value) {
      // Главная
      nameStr = "front";
    } else {
      if (data.value.data.bundle) {
        // Материал
        nameStr = data.value.data.entity_type + data.value.data.bundle;
      } else if (data.value.taxonomy_term) {
        // Таксономия
        nameStr = data.value.taxonomy_term.bundle + data.value.meta.view_id;
      } else if (data.value.meta.view_id) {
        // Представления
        nameStr = "view" + data.value.meta.view_id;
      }
    }
    return nameStr;
  }
  return "";
});

// Карта компонент
const componentsMap = {
  front: () => import("../components/page/front.vue"),
  // материалы
  nodeabout: () => import("../components/page/node/about.vue"),
  nodecontacts: () => import("../components/page/node/contacts.vue"),
  nodeproduct: () => import("../components/page/node/product.vue"),
  nodeproject: () => import("../components/page/node/project.vue"),
  nodequestions: () => import("../components/page/node/questions.vue"),
  nodepage: () => import("../components/page/node/page.vue"),
  // представления
  viewcatalog: () => import("../components/page/view/catalog.vue"),
  viewprojects: () => import("../components/page/view/projects.vue"),
  viewservices: () => import("../components/page/view/services.vue"),
};

// наблюдатель за изменением имени компоненты
// меняется имя компоненты - меняется страница
watch(
  componentName,
  (newValue) => {
    if (newValue) {
      setMetaTags(data.value.metatag.html_head);
      if (newValue !== "") {
        componentToRender.value = defineAsyncComponent(
          componentsMap[componentName.value]
            ? componentsMap[componentName.value]
            : "../components/page/empty.vue"
        );
      }
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.main--front {
  padding: 0;
}
.error-page{
  height: calc(100vh - var(--header-main-gap));
  margin-top: calc(-1 * var(--header-main-gap));
  
}
</style>
