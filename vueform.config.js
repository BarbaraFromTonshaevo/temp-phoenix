// import en from "@vueform/vueform/locales/en";
import ru from "@vueform/vueform/locales/ru";
import vueform from "@vueform/vueform/dist/vueform";
import { defineConfig } from "@vueform/vueform";
import PluginMask from "@vueform/plugin-mask";
// You might place these anywhere else in your project
import "@vueform/vueform/dist/vueform.css";

export default defineConfig({
  theme: vueform,
//   locales: { en },
//   locale: "en",
locales: { ru },
locale: "ru",
  plugins: [PluginMask],
});