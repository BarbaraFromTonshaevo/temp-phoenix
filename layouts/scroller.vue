<template>
  <div>
    <AppHeader/>
    <div ref="scroller" class="scroller">
      <div class="page-content">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { useScrollbarStore } from "@/stores/scrollbar";

const route = useRoute();
const isHeaderVisible = ref(true);

const scrollbarStore = useScrollbarStore();
const scroller = ref(null);
let bodyScrollBar;

onMounted(() => {
  class ModalPlugin extends ScrollbarPlugin {
    static pluginName = "modal";

    static defaultOptions = {
      open: false,
    };

    transformDelta(delta) {
      return this.options.open ? { x: 0, y: 0 } : delta;
    }
  }

  Scrollbar.use(ModalPlugin);

  bodyScrollBar = Scrollbar.init(scroller.value, {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    alwaysShowTracks: true,
    continuousScrolling: true,
    delegateTo: scroller.value,
    syncCallbacks: true,
  });

  scrollbarStore.setScrollbarBody(bodyScrollBar);
  scrollbarStore.changeActive(true);
  provide("smoothScroll", scrollbarStore);

  gsap.registerPlugin(ScrollTrigger);
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);

  ScrollTrigger.scrollerProxy(scroller.value, {
    scrollTop(value) {
      if (arguments.length > 0) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);
  ScrollTrigger.defaults({ scroller: scroller.value });

  function setupScroller() {
    // elements with overflow:auto
    // const el = document.querySelectorAll('.hide-scroller');
    // if (el.length > 0) {
    //     el.forEach(item => {
    //         {
    //             [
    //                 'touchmove',
    //                 'mousewheel',
    //                 'wheel',
    //             ].forEach((eventType) => {
    //                 item.addEventListener(eventType, (e) => e.stopPropagation());
    //             });
    //         }
    //     })
    // }

    let initialPosition = bodyScrollBar.offset.y;
    let currentPosition = bodyScrollBar.offset.y;

    // sticky, fixed elements
    bodyScrollBar.addListener(({ offset }) => {
      currentPosition = offset.y;

      if (initialPosition <= currentPosition) {
        isHeaderVisible.value = false;
      } else {
        isHeaderVisible.value = true;
      }

      initialPosition = currentPosition;
    });
  }

  setupScroller();
});

// import { useMainInfoStore } from "~/stores/mainInfo";
// const mainInfoStore = useMainInfoStore();

// let lastScrollY = 0; // Для хранения предыдущей позиции прокрутки
// const handleScroll = () => {
//   const currentScrollY = window.scrollY; // Текущая позиция прокрутки
//   // Если мы прокручиваем вниз
//   if (currentScrollY > lastScrollY) {
//     mainInfoStore.makeHeaderHidden(); // Скрыть шапку
//   } else {
//     mainInfoStore.makeHeaderVisible(); // Показать шапку
//   }
//   lastScrollY = currentScrollY; // Обновляем последнюю позицию прокрутки
// };
// onMounted(() => {
//   window.addEventListener("scroll", handleScroll); // Добавляем слушатель события
// });
// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", handleScroll); // Удаляем слушатель события
// });
</script>

<style lang="scss" scoped>
.scroller {
  height: 100vh;
  overflow: hidden;
}
</style>

<style lang="scss">
.scrollbar-track-x {
  display: none !important;
}
.scrollbar-track {
  z-index: 2 !important;
  background-color: transparent;
}
.main {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + var(--header-main-gap));
}
</style>
