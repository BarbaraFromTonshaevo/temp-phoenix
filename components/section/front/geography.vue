<template>
  <section class="front-geography section-mb">
    <div class="container">
      <h2 class="section-subtitle">обширная география крупных проектов</h2>
      <div class="front-geography__body">
        <div class="front-geography__left">
          <div class="front-geography__num">500+</div>
          <div class="front-geography__num-text">
            реализованных проектов по строительству и проектированию по всей
            Росии
          </div>
          <ButtonBase
            class="front-geography__btn"
            name="secondary"
            size="large"
            mode="nuxt-link"
            :link="projectsLink"
            >Посмотреть проекты</ButtonBase
          >
          <div class="front-geography__img">
            <img src="/images/front/geography.png" alt="" />
          </div>
        </div>
        <div class="front-geography__right">
          <h3 class="front-geography__descr title-h3">
            <strong>Наши проекты присутствуют по всей территории России</strong
            >, в том числе в таких городах как Москва, Санкт- Петербург, Нижний
            Новгород, Казань, Иваново, Калуга, Владимир, Владивосток, Краснодар
            и др.
          </h3>
          <div class="front-geography__map">
            <img src="/images/front/map.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projectsLink: {
    type: String,
    default: "#",
  },
});
</script>

<style lang="scss" scoped>
.front-geography {
  &__body {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 40px 80px;
  }
  &__left {
    height: auto;
    display: flex;
    flex-direction: column;
  }
  &__num {
    font-family: var(--font-title);
    font-weight: 500;
    font-size: 9.8vw;
    color: var(--text-accent);
  }
  &__num-text {
    max-width: 400px;
    font-size: 18px;
    margin-bottom: 80px;
  }
  &__btn {
    margin-bottom: 20px;
    width: fit-content;
  }
  &__img {
    margin-top: auto;
    width: 300px;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__descr {
    margin-bottom: 70px;
  }
  &__map {
    width: 100%;
    aspect-ratio: 1142/627;
    display: flex;
    img {
      display: flex;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
@include laptop {
  .front-geography {
    &__body {
      grid-template-columns: 5fr 7fr;
    }
    &__num-text {
      margin-bottom: 30px;
    }
  }
}
@include tablet {
  .front-geography {
    &__body {
      grid-template-columns: 1fr;
    }
    &__num {
      font-size: 100px;
    }
    &__img {
      display: none;
    }
    &__descr {
      margin-bottom: 40px;
    }
  }
}
@include mobile {
  .front-geography {
    &__right {
      margin-right: -20px;
    }
    &__num-text {
      font-size: 14px;
    }
    &__btn {
      font-size: 14px;
      width: 100%;
    }
    &__descr {
      margin-right: 20px;
      margin-bottom: 0;
    }
    &__map {
      aspect-ratio: 280/435;
      margin-right: -20px;
      img {
        object-fit: cover;
        object-position: left;
      }
    }
  }
}
</style>
