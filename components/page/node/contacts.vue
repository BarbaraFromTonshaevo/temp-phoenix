<template>
  <section class="contacts section-mb">
    <div class="container">
      <UiBreadcrumbs :breadcrumbs="data.breadcrumb" />
      <h1 class="contacts__title title-h1">Контакты</h1>
      <div class="contacts__top">
        <div class="contacts__list">
          <UiDoubleStroke title="Адрес">
            <address>{{ data.data.field_address[0] }}</address>
          </UiDoubleStroke>
          <UiDoubleStroke title="Электронная почта">
            <a
              v-for="email of data.data.field_email"
              :key="email"
              :href="'mailto:' + email"
              class="contacts__email"
              >{{ email }}</a
            >
          </UiDoubleStroke>
          <UiDoubleStroke title="Телефоны">
            <a
              v-for="phone of data.data.field_phone"
              :key="phone"
              :href="'tel:' + phone"
              class="contacts__phone"
              >{{ phone }}</a
            >
          </UiDoubleStroke>
          <UiDoubleStroke title="График работы">
            <span>с 9:00 до 17:00</span>
          </UiDoubleStroke>
          <UiDoubleStroke title="Месенджеры">
            <ButtonIcon
              mode="a"
              :url="data.data.telegram"
              sprite="telegram"
              class="contacts__social"
            />
            <ButtonIcon
              mode="a"
              :url="data.data.whatapp"
              sprite="wa"
              class="contacts__social"
            />
          </UiDoubleStroke>
        </div>
      </div>
      <UiMap
        :map-i-d="'map-contacts'"
        class="contacts__map"
        :center="mapCenter"
        :zoom="mapZoom"
        :points="mapPoints"
      />
      <div class="contacts__bottom">
        <div class="contacts__flex">
          <h3 class="title-h3">Реквизиты</h3>
          <ButtonBase name="secondary" mode="a" link="#" size="large"
            >Скачать карточку компании</ButtonBase
          >
        </div>
        <div class="contacts__list">
          <UiDoubleStroke
            v-for="item of data.data.field_requsites"
            :key="item.field_name[0]"
            :title="item.field_name[0]"
          >
            {{ item.field_value[0] }}
          </UiDoubleStroke>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
const mapCenter = [43.894568499999956, 56.27075056847694];
const mapZoom = 4;
const mapPoints = [
  {
    coordinates: [43.894568499999956, 56.27075056847694],
    content: `<img src="/icons/point.svg" class="projects__map-point">`,
  },
];
</script>

<style lang="scss" scoped>
.contacts {
  &__map-point {
    transform: translate(-50%, -100%);
  }
  &__title {
    margin-bottom: 100px;
  }
  &__top {
    margin-bottom: 110px;
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 6px;
    .contacts__list {
      grid-column: 2/3;
    }
  }
  &__bottom {
    display: grid;
    grid-template-columns: 3fr 9fr;
    grid-gap: 6px;
    .contacts__flex {
      grid-column: 2/3;
    }
    .contacts__list {
      grid-column: 2/3;
    }
  }
  &__item {
    display: grid;
    grid-template-columns: 4fr 5fr;
    grid-gap: 30px;
    padding: 24px;
    border-bottom: 1px solid var(--stroke-primary);
    font-size: 18px;
    font-weight: 500;
  }
  &__left {
    color: var(--text-default);
  }
  &__social {
    display: inline-flex;
    margin-right: 10px;
  }
  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 50px;
    margin-bottom: 60px;
  }
  &__map {
    width: 100%;
    aspect-ratio: 1760/680;
    margin-bottom: 110px;
  }
  &__email,
  &__phone {
    cursor: pointer;
    display: flex;
    transition: color var(--time);
  }
}
@include hover {
  .contacts {
    &__email:hover,
    &__phone:hover {
      color: var(--text-accent);
    }
  }
}
@include laptop {
  .contacts {
    &__title {
      margin-bottom: 80px;
    }
    &__top {
      display: block;
    }
    &__bottom {
      display: block;
    }
    &__flex {
      margin-bottom: 30px;
    }
    &__item {
      padding: 18px;
      font-size: 16px;
    }
  }
}
@include tablet {
  .contacts {
    &__title {
      margin-bottom: 60px;
    }
  }
}
@include tablet-s {
  .contacts {
    &__map {
      aspect-ratio: 1;
    }
    &__item {
      font-size: 14px;
    }
  }
}
@include mobile {
  .contacts {
    &__title {
      margin-bottom: 40px;
    }
    &__item {
      padding: 15px 0;
    }
    &__right {
      text-align: end;
    }
    &__social {
      margin-right: 0;
    }
    &__map {
      margin-bottom: 50px;
    }
    &__top {
      margin-bottom: 50px;
    }
    &__phone,
    &__email {
      width: fit-content;
      margin-left: auto;
    }
    &__social {
      width: 33px;
      height: 33px;
      margin-right: 5px;
      svg {
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>
