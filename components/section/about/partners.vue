<template>
  <section class="about-partners section-mb">
    <div class="container">
      <div class="section-subtitle">партнёры</div>
      <h2 class="about-partners__title title-h2">
        Работаем только с надежными партнёрами
      </h2>
      <ul class="about-partners__list">
        <li v-for="item of list" :key="item.title" class="about-partners__item">
          <div class="about-partners__item-name">{{ item.field_name[0] }}</div>
          <div class="about-partners__item-logo" v-html="item.field_image[0].markup"/>
          <div class="about-partners__item-descr">{{ item.field_description_short[0] }}</div>
        </li>
      </ul>
      <div class="about-partners__links">
        <ButtonBase name="tertiary" class="about-partners__link" mode="nuxt-link" :link="catalogLink">Каталог</ButtonBase>
        <ButtonBase name="tertiary" class="about-partners__link" mode="nuxt-link" :link="contactsLink">Контакты</ButtonBase>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    required: true,
    default: ()=>[]
  },
  catalogLink: {
    type: String,
    default: '#'
  },
  contactsLink: {
    type: String,
    default: '#'
  },
})
</script>

<style lang="scss">
.about-partners{
    &__title{
        margin-bottom: 60px;
    }
    &__list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 6px;
        margin-bottom: 110px;
    }
    &__item{
        height: auto;
        background-color: var(--bg-secondary);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 57px;

    }
    &__item-name{
        font-size: 22px;
        font-family: var(--font-title);
    }
    &__item-logo{
        display: flex;
        margin: 0 auto;
        max-height: 240px;
        img{
            display: flex;
            width: 100%;
            height: 100%;
        }
    }
    &__item-descr{
        border-top: 1px solid var(--stroke-primary);
        padding-top: 6px;
        color: var(--text-default-additional);
        font-weight: 500;
        font-size: 14px;
    }
    &__links{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
    }
    &__links &__link{
        width: 100%;
    }
}
@include laptop{
    .about-partners{
        &__item{
            gap: 30px;
        }
    }
}
@include tablet{
    .about-partners{
        &__title{
            margin-bottom: 40px;
        }
        &__list{
            grid-template-columns: 1fr 1fr;
            margin-bottom: 50px;
        }
    }
}
@include tablet-s{
    .about-partners{
        &__list{
            grid-template-columns: 1fr;
        }
        &__item{
            padding: 20px;
        }
        &__item-descr{
            font-size: 18px;
        }
    }
}
@include mobile{
    .about-partners{
        &__item-name{
            font-size: 18px;
        }
        &__links{
            grid-template-columns: 1fr;
        }
    }
}
</style>
