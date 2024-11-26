<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <div class="container">
          <h1 class="title-h1">Ошибка</h1>
          <p>
            <code>{{ error }}</code>
          </p>
        </div>
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>

<script setup>
// import { onMounted } from "vue";
// import { useMainInfoStore } from "@/stores/mainInfo";
// const mainInfoStore = useMainInfoStore();
// const { data: mainInfoData } = await useFetch("/wsapi/packs/maininfo", {
//   baseURL: useRuntimeConfig().public.apiBase,
// });
// mainInfo.setHeaderData(mainInfoData.value);

//аналитика
// useHead({
//   script: [],
//   noscript: [],
// });
</script>

<style lang="scss">
@use "assets/style/utils/reset";

@use "assets/style/utils/fonts";
@use "assets/style/utils/variables";
@use "assets/style/utils/common";

@use "assets/style/components/container";
@use "assets/style/components/title";
@use "assets/style/components/text";
@use "assets/style/components/section";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
