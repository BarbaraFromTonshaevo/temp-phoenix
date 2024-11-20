<template>
  <div
    ref="ticker"
    class="ticker"
    :class="[
      { 'animation-stop': isAnimationHoverStop },
      { 'direction-right': directionRight },
    ]"
  >
    <!-- <div class="ticker-initial-content" ref="tickerInitialContent"> -->
    <div ref="tickerContent" class="ticker-content">
      <slot />
    </div>
    <!-- <div class="ticker-content" ref="tickerContent"></div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  isFits: {
    type: Boolean,
    required: false,
    default: false,
  },
  isAnimationHoverStop: {
    type: Boolean,
    required: false,
    default: true,
  },
  directionRight: {
    type: Boolean,
    required: false,
    default: false,
  },
  time: {
    type: Number,
    required: false,
    default: 50,
  },
});
const ticker = ref(null);
const tickerContent = ref(null);
onMounted(() => {
  const tickerWidth = ticker.value.clientWidth;
  const tickerContentWidth = tickerContent.value.scrollWidth;

  if (!(props.isFits && tickerContentWidth <= tickerWidth)) {
    const tickerWrapper = document.createElement("div");
    tickerWrapper.classList.add("ticker-wrapper");
    // console.log(tickerContentWidth <= tickerWidth);
    if (tickerContentWidth <= tickerWidth) {
      const countTicker = Math.ceil(tickerWidth / tickerContentWidth);
      // console.log(countTicker);

      for (let i = 0; i < countTicker; i++) {
        tickerWrapper.innerHTML += ticker.value.innerHTML;
      }
    } else {
      tickerContent.value.style.width = tickerContentWidth + "px";
      tickerWrapper.innerHTML += ticker.value.innerHTML;
    }
    ticker.value.innerHTML = "";
    ticker.value.append(tickerWrapper);
    ticker.value.innerHTML += ticker.value.innerHTML;
  } else {
    ticker.value.classList.add("ticker--center");
  }
});
</script>

<style lang="scss">
.ticker {
  display: flex;
  overflow: hidden;
  &-wrapper {
    display: flex;
    gap: 20px;
    animation: scroll 40s infinite linear;
    padding-left: 20px;
  }
  &-content {
    width: fit-content;
    white-space: nowrap;
  }
  &--center {
    margin: 0 auto;
    width: fit-content;
  }
  &.direction-right {
    .ticker-wrapper {
      animation: scrollRight 40s infinite linear;
    }
  }
  &.animation-stop:hover {
    .ticker-wrapper {
      animation-play-state: paused;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-100%, 0);
  }
}

@keyframes scrollRight {
  0% {
    transform: translate(-100%, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
