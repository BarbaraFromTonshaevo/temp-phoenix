<template>
  <div>
    <AppHeader />
    <div ref="scroller" class="scroller">
      <div class="page-content">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { useAppStateStore } from "~/stores/appState";
const appStateStore = useAppStateStore();
const route = useRoute();

if (route.path === "/") {
  appStateStore.makeHeaderTransparent();
} else {
  appStateStore.makeHeaderOpaque();
}

//сетап скроллера
const scroller = ref(null);
let bodyScrollBar;

const { setScrollbar, scrollbar } = provideScrollbar();

//функции для блокирования/разблокирования скролла
function lockScroll() {
  bodyScrollBar.updatePluginOptions("modal", { open: true });
  bodyScrollBar.track.yAxis.hide();
}

function unlockScroll() {
  bodyScrollBar.updatePluginOptions("modal", { open: false });
}

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
    delegateTo: scroller.value,
    alwaysShowTracks: true,
    renderByPixels: true,
    continuousScrolling: true,
    thumbMinSize: 20,
    syncCallbacks: true,
  });

  setScrollbar(bodyScrollBar);

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
        appStateStore.makeHeaderHidden();
      } else {
        appStateStore.makeHeaderVisible();
      }

      if (route.path === "/") {
        if (currentPosition > window.innerHeight) {
          appStateStore.makeHeaderOpaque();
        } else {
          appStateStore.makeHeaderTransparent();
        }
      }

      initialPosition = currentPosition;
    });

    //скроллить страницу наверх при смене роута
    watch(
      () => route.path,
      () => {
        setTimeout(() => {
          bodyScrollBar.scrollTop = 0;
        }, 200);
      }
    );
  }

  setupScroller();
});
onUnmounted(() => {
  if (scrollbar.value) {
    scrollbar.value.destroy();
  }
});
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
