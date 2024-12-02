<template>
  <NuxtLayout>
    <main class="main">
      <AppError404 v-if="error.statusCode == 404" />
      <AppErrorMessage v-else :message="error.cause.message" />
      <!-- <section v-if="error.statusCode == 404" class="not-found">
        <div class="not-found__container container">
          <img
            class="not-found__img"
            src="/icons/404.svg"
            alt=""
          >
          <h1 class="not-found__title page-title">
            Страница не найдена hehe
          </h1>
          <p class="not-found__descr">Ошибка 404. Страница была удалена, либо вовсе не существовала на сайте.</p>
          <ButtonBase mode="nuxt-link" link="/" name="primary" size="large">Вернуться на главную</ButtonBase>
        </div>
      </section>
      <section v-else class="not-found">
        <div class="not-found__container container">
          <h1 class="not-found__title page-title">{{ error.statusCode }}</h1>
          <p class="not-found__descr">{{ error.message }}</p>
          <ButtonBase mode="nuxt-link" link="/" name="primary" size="large">Вернуться на главную</ButtonBase>
        </div>
      </section> -->
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
