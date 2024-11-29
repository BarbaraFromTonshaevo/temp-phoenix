// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import autoprefixer from "autoprefixer";
import postCssSortMediaQueries from "postcss-sort-media-queries";
export default defineNuxtConfig({
  router: {
    options: {
      scrollBehaviorType: 'auto'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      title: "Template",
      meta: [
        { charset: "utf-8" },
        //     {
        //       name: "description",
        //       content:
        //         "Template",
        //     },
        //     {
        //       name: "viewport",
        //       content: "width=device-width, initial-scale=1",
        //     },
        //     {
        //       "http-equiv": "X-UA-Compatible",
        //       content: "IE=edge",
        //     },
        //     {
        //       name: "viewport",
        //       content: "width=device-width, initial-scale=1, user-scalable=no",
        //     },
        //     {
        //       hid: "apple-mobile-web-app-title",
        //       name: "apple-mobile-web-app-title",
        //       content: "Template",
        //     },
        //     {
        //       hid: "apple-mobile-web-app-capable",
        //       name: "apple-mobile-web-app-capable",
        //       content: "yes",
        //     },
        //     {
        //       hid: "format-detection",
        //       name: "format-detection",
        //       content: "telephone=no",
        //     },
        //     {
        //       hid: "format-detection",
        //       name: "format-detection",
        //       content: "address=no",
        //     },
        //     {
        //       hid: "format-detection",
        //       name: "format-detection",
        //       content: "email=no",
        //     },
        //     {
        //       hid: "format-detection",
        //       name: "format-detection",
        //       content: "date=no",
        //     },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
      yandexApi: process.env.NUXT_YANDEX_API,
    },
  },
  build: {
    transpile: ['@rollup/plugin-dynamic-import-vars'], // Убедитесь, что вы добавили это, если используете Rollup
  },
  vite: {
    // plugins: [
    //   dynamicImportVars({
    //     // Вместо опций используйте на свой выбор
    //     include: 
    //     ['./components/page/node/contacts.vue', 
    //     './components/page/view/*.vue', 
    //     './components/page/*.vue'
    //   ]
    //   }),
    // ],
    server: {
      port: 3000,
    },
    css: {
      postcss: {
        plugins: [
          postCssSortMediaQueries({ sort: "desktop-first" }),
          autoprefixer({
            overrideBrowserslist: ["last 3 versions", "ie >= 10"],
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          additionalData: '@use "assets/style/utils/_mixin" as *;',
        },
      },
    },
  },

  ssr: true,
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/device",
    // '@pinia/nuxt',
    "@nuxt/image",
  ],
  compatibilityDate: "2024-08-06",
});
