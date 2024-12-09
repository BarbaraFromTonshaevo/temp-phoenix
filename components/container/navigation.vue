<template>
  <div class="navigation-container">
    <div class="navigation-container__body">
      <aside ref="asideNav" class="navigation-container__aside">
        <nav class="navigation-container__nav">
          <ul class="navigation-container__list">
            <li
              v-for="section of navigationList"
              :key="section.id"
              class="navigation-container__item"
            >
              <a
                href="#"
                class="navigation-container__link"
                :class="{
                  'navigation-container__link--active':
                    activeSection == section.id,
                }"
                :data-target="section.id"
                @click.prevent="navigateSection(section.id)"
                >{{ section.title }}</a
              >
            </li>
          </ul>
        </nav>
      </aside>
      <div ref="mainNav" class="navigation-container__main">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAppStateStore } from "@/stores/appState";
const appStateStore = useAppStateStore();

// keys of Object: id, title, component, properties
defineProps({
  navigationList: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeSection = ref();
const mainNav = ref(null);
const asideNav = ref(null);

onMounted(() => {
  // const smoothScroll = inject("smoothScroll");
  // scrollbarStore.body.addListener(({ offset }) => {
  //   // asideNav.value.style.top = `calc(${offset.y}px + 20px)`;
  //   console.log(offset.y);
  // });
});

function navigateSection(id) {
  console.log(scrollbarStore.body);
  activeSection.value = id;
  const target = mainNav.value.querySelector(`#${id}`);
  if (appStateStore.scrollbarIsActive) {
    const y =
      scrollbarStore.body.scrollTop + target.getBoundingClientRect().top - 120;
    scrollbarStore.body.scrollTo(0, y, 500);
  } else {
    const y = window.scrollY + target.getBoundingClientRect().top - 120;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss">
.navigation-container {
  &__body {
    display: grid;
    grid-template-columns: 310px 1fr;
    border-top: 1px solid var(--stroke-tertiary);
  }
  &__aside {
    position: relative;
    height: 100%;
    padding: 120px 50px 0;
  }
  &__nav {
    position: sticky;
    top: calc(var(--header-height) + 20px);
    height: fit-content;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__link {
    position: relative;
    display: block;
    color: var(--text-default-additional);
    font-size: 18px;
    padding-left: 10px;
    margin-left: -10px;
    transition: color var(--time), transform var(--time);
    &::before {
      content: "";
      display: block;
      width: 0px;
      height: 1px;
      background-color: var(--text-accent);
      position: absolute;
      top: 14px;
      right: calc(100% - 0px);
      transition: width var(--time);
    }
    &--active {
      color: var(--text-accent);
      transform: translateX(48px);
      &::before {
        width: 38px;
      }
    }
  }
  &__main {
    padding: 120px 0 180px 130px;
    border-left: 1px solid var(--stroke-tertiary);
    display: flex;
    flex-direction: column;
    gap: 130px;
  }
}
@include hover {
  .navigation-container {
    &__link:hover {
      color: var(--text-accent);
    }
  }
}
@include desktop {
  .navigation-container {
    &__aside {
      padding-top: 80px;
    }
    &__main {
      padding-top: 80px;
      padding-left: 80px;
      padding-bottom: 140px;
    }
  }
}
@include laptop {
  .navigation-container {
    &__aside {
      padding-left: 0;
      padding-top: 50px;
    }
    &__main {
      padding-top: 50px;
      padding-left: 50px;
      padding-bottom: 100px;
      gap: 100px;
    }
  }
}
@include tablet {
  .navigation-container {
    &__body {
      grid-template-columns: 1fr;
      border: 0;
    }
    &__aside {
      display: none;
    }
    &__main {
      border: 0;
      padding-left: 0;
      padding-top: 0;
      gap: 80px;
    }
  }
}
@include tablet-s {
  .navigation-container {
    &__main {
      padding-bottom: 80px;
    }
  }
}
</style>
