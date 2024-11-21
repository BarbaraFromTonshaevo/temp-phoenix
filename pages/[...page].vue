<template>
  <main class="main" :class="{ front: isFront }">
    <div v-if="status === 'pending' || status === 'fetching'">
      <div class="loader"></div>
    </div>
    <div v-else-if="status === 'success'">
      <h1>Dynamic page for: {{ pagePar }}</h1>
      <!-- <component
            :is="page"
            v-if="page"
        /> -->
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
const route = useRoute();
const pagePar = route.params.page;
const page = shallowRef(null);
// опеределяем по какому апи делать запрос
const apiUrl =
  pagePar === ""
    ? `${useRuntimeConfig().public.API_BASE_URL}wsapi/packs/front`
    : `${useRuntimeConfig().public.API_BASE_URL}${pagePar}?_format=json`;

const {
  data: front,
  status,
  error,
  refresh,
  clear,
} = await useLazyAsyncData(
  "front",

  () =>
    $fetch(apiUrl,),
);

//данные для главной страницы
// const indexProducts = ref(null);

// const pageData = ref(null);

// if (pagePar === '') {
//     //главная страница
//     const hehe = await $fetch(`${useRuntimeConfig().public.API_BASE_URL}wsapi/packs/front`);

//     indexProducts.value = hehe.data.products;
//     console.log('hehe index', hehe);
//     page.value = IndexPage;
// }
// else {
//     //все остальные страницы
//     const hehe = await $fetch(`${useRuntimeConfig().public.API_BASE_URL}${pagePar}?_format=json`);
//     console.log(`hehe ${route.params.pagePar}`, hehe, `${useRuntimeConfig().public.API_BASE_URL}${pagePar}?_format=json`);

//     pageData.value = hehe;

//     if (hehe.data.bundle) {
//         if (hehe.data.bundle === 'contacts') page.value = ContactsPage;

//         if (hehe.data.bundle === 'company') page.value = CompanyPage;

//         if (hehe.data.bundle === 'programs') page.value = ProgramsPage;

//     }
//     else if (hehe.taxonomy_term.bundle) {
//         if (hehe.taxonomy_term.bundle === 'catalog') page.value = CatalogPage;
//     }

// }
</script>
