<template>
  <div class="file">
    <div class="file__first" :class="{'file__first--active': !isFileSelected}">
      <input
        id="file"
        ref="fileInput"
        type="file"
        class="file__input"
        @change="setFile"
      >
      <label for="file" class="file__label">
        <svg class="file__icon">
          <use :xlink:href="icon"/>
        </svg>
        {{ title }}
      </label>
    </div>
    <div class="file__second" :class="{'file__second--active': isFileSelected}">
      <div class="file__name">{{ strName }}</div>
      <div class="file__delete" title="Удалить файл" @click="deleteFile"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const isFileSelected = ref(false);
const strName = ref("");
const emits = defineEmits(["changeFile"]);
const fileInput = ref(null);
function setFile() {
  strName.value = fileInput.value.value.replace(/\\/g, "/").split('/').pop();
  isFileSelected.value = true;
  emits("changeFile", fileInput.value.files[0]);
}
function deleteFile() {
  strName.value = "";
  fileInput.value.value = "";
  isFileSelected.value = false;
  emits("changeFile", null);
}
</script>

<style lang="scss">
.file {
  margin: 0 auto;
  width: fit-content;
  &__first {
    display: none;
    width: fit-content;
    &--active {
      display: flex;
    }
  }
  &__second {
    display: none;
    width: fit-content;
    &--active {
      display: flex;
    }
  }
  &__input {
    display: none;
  }
  &__label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: 2px;
    transition: color var(--time);
  }
  &__icon {
    width: 24px;
    height: 24px;
    fill: var(--icon-prim);
    transition: fill var(--time);
  }

  &__name {
    display: inline;
  }
  &__delete {
    display: inline-block;
    width: 15px;
    height: 15px;
    cursor: pointer;
    position: relative;
    top: 3px;
    margin-left: 8px;
    &:before,
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: red;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
@include hover {
  .file__first:hover {
    .file__icon {
      fill: var(--icon-accent);
    }
    .file__label {
      color: var(--text-accent);
    }
  }
}
</style>
