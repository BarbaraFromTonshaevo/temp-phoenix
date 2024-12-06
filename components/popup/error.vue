<template>
  <Teleport to="body">
    <PopupBase
      :state="popupStore.isErrorActive"
      @closePopup="popupStore.makeErrorInactive()"
    >
      <div class="popup__content">
        <h2 class="popup__title">Ошибка</h2>
        <p class="popup__subtitle" v-if="popupStore.errorMessage != ''">
          {{ popupStore.errorMessage }}
        </p>
      </div>
    </PopupBase>
  </Teleport>
</template>

<script setup>
import { usePopupStore } from "@/stores/popup";
const popupStore = usePopupStore();
</script>
