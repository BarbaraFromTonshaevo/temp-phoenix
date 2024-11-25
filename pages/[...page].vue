<template>
  <main class="main">
    <div v-if="status === 'pending' || status === 'fetching'">
      <div class="loader"></div>
    </div>
    <div v-else-if="status === 'success'">
      <div class="container">
        <h1>Dynamic page for: {{ route.fullPath }}</h1>
        <p>{{ componentName }}</p>
        <component v-if="componentToRender" :is="componentToRender" />
      </div>
    </div>
    <div v-else>
      <div class="container">
        <h1 class="title-h1">Ошибка</h1>
        <p>{{ error.statusCode }}</p>
        <p>{{ error.cause.message }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
// НУЖНО!!! Учесть query параметры
import { shallowRef, watch, computed, defineAsyncComponent } from "vue";
const route = useRoute();

// опеределяем по какому апи делать запрос
const apiUrl =
  route.fullPath === "/"
    ? `${useRuntimeConfig().public.apiBase}/wsapi/packs/front`
    : `${useRuntimeConfig().public.apiBase}${route.fullPath}?_format=json`;

// имя кэша
const cacheName = route.fullPath === "/" ? "front" : route.fullPath;

// компонента
const componentToRender = shallowRef(null);

const { data, status, error } = await useLazyAsyncData(
  "cacheName",
  () => $fetch(apiUrl),
  { deep: true }
);

const componentName = computed(() => {
  // при формировании адреса и имени компоненты учитывать написания snake-case или camel-case
  if (data.value) {
    let nameStr = "";
    if (route.fullPath === "/") {
      // nameStr = "front";
      nameStr = "front";
    } else {
      if (data.value.data.bundle) {
        // Материал пример: /page/node/[page].vue
        // nameStr = "page" + data.value.data.entity_type + data.value.data.bundle;
        nameStr = data.value.data.entity_type + '/' + data.value.data.bundle;
      } else if (data.value.taxonomy_term) {
        // Таксономия пример: /page/taxonomy_term/[view].vue
        // nameStr =
        //   "page" + data.value.taxonomy_term.bundle + data.value.meta.view_id;
          nameStr =
          data.value.taxonomy_term.bundle + '/' + data.value.meta.view_id ;
      } else if (data.value.meta.view_id) {
        // Представления пример: /page/view/[view].vue
        // nameStr = "page" + data.value.meta.view_id;
        nameStr = "view/" + data.value.meta.view_id;
      } else {
        nameStr = "";
      }
    }
    return nameStr;
  }
  return "";
});

watch(componentName, (newValue, oldValue) => {
  if(newValue){
    if(newValue !== ''){
      componentToRender.value = defineAsyncComponent(() => import( `~/component/page/${newValue}.vue`  /* @vite-ignore */))
    }
  }
},{ immediate: true});

</script>
