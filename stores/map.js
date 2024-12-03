import { defineStore } from "pinia";

export const useMapStore = defineStore("mapStore", {
  state: () => ({
    isMapLoaded: false
  }),
  actions: {
    loadMap(){
      this.isMapLoaded = true;
    }
  },
});
