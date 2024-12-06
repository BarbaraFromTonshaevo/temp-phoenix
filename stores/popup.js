import { defineStore } from "pinia";

export const usePopupStore = defineStore("popupStore", {
  state: () => ({
    isFeedbackActive: false,
    isThanksActive: false,
    isSuccessActive: false,
    isErrorActive: false,
    errorMessage: "",
  }),
  actions: {
    makeFeedbackActive() {
      this.isFeedbackActive = true;
    },
    makeFeedbackInactive() {
      this.isFeedbackActive = false;
    },


    makeThanksActive() {
      this.isThanksActive = true;
    },
    makeThanksInactive() {
      this.isThanksActive = false;
    },


    makeSuccessActive() {
      this.isSuccessActive = true;
    },
    makeSuccessInactive() {
      this.isSuccessActive = false;
    },


    makeErrorActive(message = "") {
      this.isErrorActive = true;
      this.errorMessage = message;
    },
    makeErrorInactive() {
      this.isErrorActive = false;
      this.errorMessage = "";
    },
  },
});
