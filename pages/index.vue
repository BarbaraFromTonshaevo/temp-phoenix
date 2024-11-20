<template>
  <div>
    <FrontHero/>
    <div class="container"/>
  </div>
</template>

<script setup>
console.log('front page');

</script>

<style lang="scss">
.main-ticker {
  margin-bottom: 140px;
  margin-top: 20px;
  &__text {
    font: 500 152px var(--font-title);
    color: var(--bg-sec);
  }
  &:last-child {
    border-bottom: 1px solid var(--separator-medium);
  }
}
@include desktop {
  .main-ticker {
    margin-bottom: 100px;
    &__text {
      font-size: 100px;
    }
  }
}
@include tablet {
  .main-ticker {
    margin-bottom: 60px;
    &__text {
      font-size: 70px;
    }
    
  }
}
@include mobile {
  .main-ticker {
    display: none;
  }
}
</style>
