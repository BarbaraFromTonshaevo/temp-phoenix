<template>
  <!-- <UiLoadingWrapper :status.sync="status" :error.sync="error"> -->
  <div>
    <UiBreadcrumbs :nav-list="page.breadcrumbs"/>
    <div class="page-content">
      <section class="article">
        <div class="container">
          <h1 class="page-title">{{ page.title }}</h1>

          <div
            v-for="(contentItem, index) of page.content"
            :key="'content' + index"
            class="content page-mb"
            v-html="contentItem"
          />
          <div v-if="page.gallery.length > 0">
            <h4 class="page-title">Фотогаллерея</h4>
            <UiSliderGallery
              :slides="page.gallery"
              class="page-mb"
            />
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- </UiLoadingWrapper> -->
</template>

<script setup>
// const {
//   data: page,
//   status,
//   error,
//   refresh,
//   clear,
// } = await useLazyAsyncData(
//   "page",

//   () =>
//     $fetch(`${useRoute().path}?_format=json`, {
//       baseURL: useRuntimeConfig().public.apiBase,
//     }),

//   {
//     transform: (res) => {
//       setMetaTags(res.metatag.html_head);
//       return {
//         title: res.data.title,
//         breadcrumbs: res.breadcrumb,
//         content: res.data.body,
//         gallery: res.data["field_gallery"],
//       };
//     },
//   }
// );
</script>

<style lang="scss">
.content {
  max-width: 1155px;
  margin-left: auto;
  margin-right: auto;
}
</style>
