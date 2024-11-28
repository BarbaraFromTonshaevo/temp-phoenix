<template>
  <section class="about-main section-mb">
    <div class="container">
      <div class="about-main__subtitle section-subtitle">о нас</div>
      <div class="about-main__top">
        <h3 class="about-main__title title-h3">
          <strong>Мы — одна из крупнейших компаний</strong> в сфере
          строительства самонесущих складов и ангаров из ЛСТК. Предлагаем
          современные и надёжные решения любого масштаба.
        </h3>
        <div class="about-main__descr">
          Наши конструкции быстры в монтаже, долговечны и экономичны.
          Обеспечиваем высокое качество и индивидуальный подход к каждому
          проекту.
        </div>
      </div>
      <div class="about-main__list">
        <div class="about-main__item">
          <div class="about-main__item-text">
            реализованных проектов по строительству и проектированию
          </div>
          <div class="about-main__item-num">500+</div>
        </div>
        <div class="about-main__item">
          <div class="about-main__item-text">
            тонн металла в год перерабатывается для строительства наших
            проектов.
          </div>
          <div class="about-main__item-num">1000+</div>
        </div>
        <div class="about-main__item">
          <div class="about-main__item-text">
            наша компания строит склады и ангары по всей России с
          </div>
          <div class="about-main__item-num">2008 г.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-main {
  &__top {
    display: grid;
    grid-template-columns: 7fr 1fr 4fr;
    grid-gap: 6px;
    align-items: end;
    margin-bottom: 100px;
  }
  &__descr {
    grid-column: 3/4;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    border-top: 1px solid var(--stroke-tertiary);
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px 50px 0;
    &:nth-child(3) {
      .about-main__item-text {
        max-width: 277px;
      }
    }
  }
  &__item-text {
    font-size: 18px;
    color: var(--text-default);
  }
  &__item-num {
    font-family: var(--font-title);
    font-size: 6.25vw;
    font-weight: 500;
    color: var(--text-accent);
  }
}
@include laptop{
  .about-main{
    &__list{
      gap: 40px;
    }
    &__item{
      padding-left: 0;
      padding-right: 0;
    }
    &__item-text{
      font-size: 16px;
    }
  }
}
@include tablet {
  .about-main {
    &__top {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      margin-bottom: 60px;
    }
    &__list{
      gap: 20px;
    }
    &__item{
      padding-top: 20px;
    }
  }
}
@include tablet-s{
  .about-main{
    &__list{
      grid-template-columns: 1fr;
      gap: 0;
    }
    &__item{
      // flex-direction: row;
      // align-items: center;
      border-bottom: 1px solid var(--stroke-tertiary);
      padding-bottom: 20px;
      padding-top: 20px;
      &:nth-child(3){
        .about-main__item-text{
          max-width: initial;
        }
      }
    }
    &__item-num{
      order: -1;
      font-size: 60px;
    }
  }
}
</style>
