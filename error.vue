<template>
  <NuxtLayout>
    <main class="main">
      <AppError404 v-if="error.statusCode == 404" />
      <AppErrorMessage v-else :message="error.message" />
    </main>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>

<style lang="scss">
// .not-found {
//   &__container {
//     min-height: calc(100vh - 100px - 50px);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     gap: 60px;
//     @media (max-width: 767px) {
//       gap: 30px;
//     }
//   }
//   &__btn {
//     margin-top: 20px;
//   }
//   &__title {
//     margin-bottom: 0;
//   }
// }
</style>
