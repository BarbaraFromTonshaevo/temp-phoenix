<template>
  <Teleport to="body">
    <PopupBase
      :state="popupStore.isThanksActive"
      @closePopup="popupStore.makeThanksInactive()"
    >
      <div class="popup__content">
        <h2 class="popup__title">Спасибо</h2>
        <p class="popup__subtitle">
          Спасибо за заявку. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    </PopupBase>
  </Teleport>
</template>

<script setup>
import { usePopupStore } from "@/stores/popup";
const popupStore = usePopupStore();
</script>
