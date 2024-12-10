// хранилище состояний компонент таких как шапка, body и др.
import { defineStore } from "pinia";

export const useAppStateStore = defineStore("appStateStore", {
  state: () => ({
    headerIsHidden: false,
    headerIsTransparent: false,
    bodyNoScroll: false,
    srollbarIsActive: false,
    scrollbarBody: null,
    // модальные окна
    popupFeedbackActive: false,
    popupThanksActive: false,
    popupSuccessActive: false,
    popupErrorActive: false,
    popupErrorMessage: "",
  }),
  actions: {
    // видимость шапки
    makeHeaderVisible() {
      this.headerIsHidden = false;
    },
    makeHeaderHidden() {
      this.headerIsHidden = true;
    },
    // прозрачность шапки
    makeHeaderTransparent() {
      this.headerIsTransparent = true;
    },
    makeHeaderOpaque() {
      this.headerIsTransparent = false;
    },
    // скролл на body
    bodyWithoutScroll() {
      this.bodyNoScroll = true;
    },
    bodyWithScroll() {
      this.bodyNoScroll = false;
    },
    // работа с кастомным скролом
    setScrollbarBody(value) {
      this.scrollbarBody = value;
      this.srollbarIsActive = true;
    },
    changeActive(value) {
      this.srollbarIsActive = value;
    },

    // модальные окна
    makeFeedbackActive() {
      this.popupFeedbackActive = true;
      this.bodyNoScroll = true;
    },
    makeFeedbackInactive() {
      this.popupFeedbackActive = false;
      this.bodyNoScroll = false;
    },

    makeThanksActive() {
      this.popupThanksActive = true;
      this.bodyNoScroll = true;
    },
    makeThanksInactive() {
      this.popupThanksActive = false;
      this.bodyNoScroll = false;
    },

    makeSuccessActive() {
      this.popupSuccessActive = true;
      this.bodyNoScroll = true;
    },
    makeSuccessInactive() {
      this.popupSuccessActive = false;
      this.bodyNoScroll = false;
    },

    makeErrorActive(message = "") {
      this.popupErrorActive = true;
      this.popupErrorMessage = message;
      this.bodyNoScroll = true;
    },
    makeErrorInactive() {
      this.popupErrorActive = false;
      this.popupErrorMessage = "";
      this.bodyNoScroll = false;
    },
  },
});
