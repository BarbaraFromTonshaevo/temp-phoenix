<template>
  <div>
    <div class="container">
      <h1 class="title-h1">Текстовая страница</h1>
      <ContainerContent>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus dolorum molestiae blanditiis sint, provident magnam rerum neque illum laboriosam error placeat earum beatae ut quos quaerat. Est, numquam illo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus dolorum molestiae blanditiis sint, provident magnam rerum neque illum laboriosam error placeat earum beatae ut quos quaerat. Est, numquam illo?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus dolorum molestiae blanditiis sint, provident magnam rerum neque illum laboriosam error placeat earum beatae ut quos quaerat. Est, numquam illo?</p>
      </ContainerContent>
    </div>

    <!-- <UiBreadcrumbs :navList="page.breadcrumbs"></UiBreadcrumbs>
    <div class="page-content">
      <section class="article">
        <div class="container">
          <h1 class="page-title">{{ page.title }}</h1>

          <div
            class="content page-mb"
            v-for="(contentItem, index) of page.content"
            :key="'content' + index"
            v-html="contentItem"
          ></div>
          <div v-if="page.gallery.length > 0">
            <h4 class="page-title">Фотогаллерея</h4>
            <UiSliderGallery
              :slides="page.gallery"
              class="page-mb"
            ></UiSliderGallery>
          </div>
        </div>
      </section>
    </div> -->
  </div>
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
