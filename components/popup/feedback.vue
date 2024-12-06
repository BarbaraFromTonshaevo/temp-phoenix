<template>
  <Teleport to="body">
    <PopupBase
      :state="popupStore.isFeedbackActive"
      @closePopup="popupStore.makeFeedbackInactive()"
    >
      <div class="popup__content">
        <h2 class="popup__title">Оставить заявку</h2>
        <FormFeedback @sendForm="postForm" class="form-feedback" />
      </div>
    </PopupBase>
  </Teleport>
</template>

<script setup>
import { usePopupStore } from "@/stores/popup";
const popupStore = usePopupStore();

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
      popupStore.makeFeedbackInactive();
      popupStore.makeSuccessActive();
    },
    (e) => {
      popupStore.makeFeedbackInactive();
      popupStore.makeErrorActive(e);
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
  width: 688px;
  display: flex;
}

@include laptop {
  .form-feedback {
    width: calc(100vw - var(--margin-x) * 2 - var(--padding-x) * 2);
  }
}
</style>
