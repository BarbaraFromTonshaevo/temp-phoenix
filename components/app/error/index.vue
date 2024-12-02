<template>
  <section class="not-found__container container">
    <div class="not-found__body">
      <div class="not-found__content">
        <h1 class="not-found__title">{{ title }}</h1>
        <p class="not-found__descr">{{ message }}</p>
        <ButtonBase
          mode="nuxt-link"
          link="/"
          name="primary"
          class="not-found__btn"
          >Вернуться на главную</ButtonBase
        >
      </div>
      <img v-if="img" class="not-found__img" :src="img" alt="" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Error",
  },
  message: {
    type: String,
    default: "Error message",
  },
  img: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.not-found {
  &__container {
	height: 100%;
  }
  &__body {
    max-width: 1172px;
    margin: auto;
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-gap: 30px;
	height: 100%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    text-align: start;
	height: fit-content;
    margin: auto;
  }
  &__img {
    display: flex;
    width: 100%;
    margin: auto;
  }
  &__btn {
    margin-top: 20px;
  }
  &__title {
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 60px;
  }
  &__descr {
    max-width: 310px;
    font-size: 500px;
    font-size: 14px;
  }
}
@include tablet {
  .not-found {
    &__body {
      grid-template-columns: 1fr 1fr;
    }
  }
}
@include tablet-s {
  .not-found {
    &__body {
      grid-template-columns: 1fr;
    }
	&__img{
		order: -1;
		max-width: 80%;
	}
	&__content{
		text-align: center;
		justify-content: center;
		align-items: center;
	}
    &__title {
      font-size: 32px;
    }
  }
}
</style>
