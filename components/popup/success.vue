<template>
    <Teleport to="body">
      <PopupBase
        :state="popupStore.isSuccessActive"
        @closePopup="popupStore.makeSuccessInactive()"
      >
        <div class="popup__content">
          <h2 class="popup__title">Заявка оправлена</h2>
          <p class="popup__subtitle">
            В ближайшее время с Вами свяжется специалист нашей компании. Спасибо
          </p>
        </div>
      </PopupBase>
    </Teleport>
  </template>
  
  <script setup>
  import { usePopupStore } from "@/stores/popup";
  const popupStore = usePopupStore();
  </script>
  