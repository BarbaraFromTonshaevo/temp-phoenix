import { useMainInfoStore } from "~/stores/mainInfo";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/") {
    console.log("not front");
    useMainInfoStore().makeHeaderOpaque();
  } else {
    console.log("front");
    useMainInfoStore().makeHeaderTransparent();
  }
});
