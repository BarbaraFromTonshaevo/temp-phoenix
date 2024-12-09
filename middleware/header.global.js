import { useAppStateStore } from "~/stores/appState";

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/") {
    useAppStateStore().makeHeaderOpaque();
  } else {
    useAppStateStore().makeHeaderTransparent();
  }
});
