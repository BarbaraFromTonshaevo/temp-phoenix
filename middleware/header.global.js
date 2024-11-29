import { useMainInfoStore } from "~/stores/mainInfo";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/") {
    useMainInfoStore().makeHeaderOpaque();
  } else {
    useMainInfoStore().makeHeaderTransparent();
  }
});
