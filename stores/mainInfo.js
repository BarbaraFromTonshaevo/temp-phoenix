import { defineStore } from "pinia";

export const useMainInfoStore = defineStore("mainInfoStore", {
  state: () => ({
    headerIsHidden: false,
    headerIsTransparent: false,
    main: [
      {
        title: "Главная",
        url: {
          href: "/",
        },
      },
      {
        title: "Текстовая",
        url: {
          href: "/text",
        },
      },
      {
        title: "Контакты",
        url: {
          href: "/contacts",
        },
      },
    ],
    info: {},
    isReady: true,
  }),
  actions: {
    async setHeaderData(res) {
      this.main = res.data.main;
      this.info = {
        phone: res.data.site_info[0].field_phone,
        email: res.data.site_info[0].field_email,
        address: res.data.site_info[0].field_address,
        social: {
          vk: "",
          telegram: "",
          whatsapp: "",
        },
      };
      this.isReady = true;
    },
    makeHeaderVisible() {
      this.headerIsHidden = false;
    },
    makeHeaderHidden() {
      this.headerIsHidden = true;
    },
    makeHeaderTransparent() {
      this.headerIsTransparent = true;
    },
    makeHeaderOpaque() {
      this.headerIsTransparent  = false;
    }
  },
});
