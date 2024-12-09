<template>
  <Teleport to="body">
    <PopupBase
      :state="appStateStore.popupErrorActive"
      @closePopup="appStateStore.makeErrorInactive()"
    >
      <div class="popup__content">
        <h2 class="popup__title">Ошибка</h2>
        <p class="popup__subtitle" v-if="appStateStore.popupErrorMessage != ''">
          {{ appStateStore.popupErrorMessage }}
        </p>
      </div>
    </PopupBase>
  </Teleport>
</template>

<script setup>
import { useAppStateStore } from "@/stores/appState";
const appStateStore = useAppStateStore();
</script>
