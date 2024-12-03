<template>
  <NuxtLink
    v-if="mode === 'nuxt-link'"
    :to="link"
    :class="computedClasses"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="mode === 'link'"
    :href="link"
    :class="computedClasses"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="computedClasses"
    :disabled="isDisabled ? true : false"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "button",
    validator: (value) => ["button", "a", "nuxt-link"].includes(value),
  },
  name: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "tertiary"].includes(value),
  },
  size: {
    type: String,
    default: "middle",
    validator: (value) => ["middle", "small", "large"].includes(value),
  },
  link: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const computedClasses = computed(() => {
  return `btn btn--${props.name} btn--${props.size} ${
    props.isDisabled ? "btn--disabled" : ""
  }`;
});
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;

  padding: 0px 40px;
  min-height: 55px;
  max-width: 100%;

  border: none;
  border-radius: 60px;

  font: 600 16px var(--font);
  line-height: normal;
  transition: background-color var(--time), border-color var(--time),
    color var(--time);

  /*size styles*/
  &--large {
    min-height: 78px;
    padding: 0 80px;
    font-size: 18px;
  }
  &--small {
    min-height: 55px;
  }

  /*name styles*/
  /*Primary button*/

  &--primary {
    color: var(--btn-prim-text);
    background-color: var(--btn-prim-bg);
    border-color: var(--btn-prim-border);

    &:focus {
      color: var(--btn-prim-text-focus);
      background-color: var(--btn-prim-bg-focus);
      border-color: var(--btn-prim-border-focus);
    }
    @include hover {
      &:hover {
        color: var(--btn-prim-text-hover);
        background-color: var(--btn-prim-bg-hover);
        border-color: var(--btn-prim-border-hover);
      }
    }
  }
  &--primary:disabled,
  &--primary &--disabled {
    color: var(--btn-prim-text-disabled);
    background-color: var(--btn-prim-bg-disabled);
    border-color: var(--btn-prim-border-disabled);
    pointer-events: none;
  }
  /*Secondary button*/
  &--secondary {
    color: var(--btn-sec-text);
    background-color: var(--btn-sec-bg);
    border-color: var(--btn-sec-border);

    &:focus {
      color: var(--btn-sec-text-focus);
      background-color: var(--btn-sec-bg-focus);
      border-color: var(--btn-sec-border-focus);
    }
    @include hover {
      &:hover {
        color: var(--btn-sec-text-hover);
        background-color: var(--btn-sec-bg-hover);
        border-color: var(--btn-sec-border-hover);
      }
    }
  }
  &--secondary:disabled,
  &--secondary &--disabled {
    color: var(--btn-sec-text-disabled);
    background-color: var(--btn-sec-bg-disabled);
    border-color: var(--btn-sec-border-disabled);
    pointer-events: none;
  }

  /*Tertiary button*/
  &--tertiary {
    color: var(--btn-tert-text);
    background-color: var(--btn-tert-bg);
    border: 1px solid var(--btn-tert-border);

    &:focus {
      color: var(--btn-tert-text-focus);
      background-color: var(--btn-tert-bg-focus);
      border-color: var(--btn-tert-border-focus);
    }
    @include hover {
      &:hover {
        color: var(--btn-tert-text-hover);
        background-color: var(--btn-tert-bg-hover);
        border-color: var(--btn-tert-border-hover);
      }
    }
  }
  &--tertiary:disabled,
  &--tertiary &--disabled {
    color: var(--btn-tert-text-disabled);
    background-color: var(--btn-tert-bg-disabled);
    border-color: var(--btn-tert-border-disabled);
    pointer-events: none;
  }
}
</style>
