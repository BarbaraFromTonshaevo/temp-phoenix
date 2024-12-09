<template>
  <Teleport to="body">
    <PopupBase
      :state="appStateStore.popupFeedbackActive"
      @closePopup="appStateStore.makeFeedbackInactive()"
    >
      <div class="popup__content">
        <h2 class="popup__title">Оставить заявку</h2>
        <FormFeedback @sendForm="postForm" class="form-feedback" />
      </div>
    </PopupBase>
  </Teleport>
</template>

<script setup>
import { useAppStateStore } from "@/stores/appState";
const appStateStore = useAppStateStore();

// здесь выполнить обращение к апи
// в случае успеха popupStore.makeThanksActive
// в случае ошибки popupStore.makeErrorActive и передать message

async function postForm(formJSON) {
  // formJSON
  // successCallback
  // errorCallback
  usePostForm(
    formJSON,
    () => {
      appStateStore.makeFeedbackInactive();
      appStateStore.makeSuccessActive();
    },
    (e) => {
      appStateStore.makeFeedbackInactive();
      appStateStore.makeErrorActive(e);
    }
  );
}
</script>

<style scss="lang">
.popup__content {
  display: flex;
  flex-direction: column;
  gap: 38px;
}
.form-feedback {
  width: calc(100vw - var(--margin-x) * 2 - var(--padding-x) * 2);
  max-width: 688px;
  display: flex;
}
</style>
