<!-- !!! Будьте аккуратно с координатами, они отличаются с версией v3 -->
<template>
  <div class="map-container">
    <div :id="mapId" class="map-container__body" ref="mapDOM" />
  </div>
</template>

<script setup>
import { onMounted, ref, onUpdated } from "vue";
import { useMapStore } from "@/stores/map";
const mapStore = useMapStore();

const mapDOM = ref(null);
const props = defineProps({
  mapId: {
    type: String,
    required: true,
    default: "map",
  },
  center: {
    type: Array,
    required: true,
    default: () => [43.894568499999956, 56.27075056847694],
  },
  zoom: {
    type: Number,
    required: false,
    default: 7,
  },
  points: {
    type: Array,
    //     coordinates
    //     properties
    //     options
    required: true,
    default: () => [],
  },
  // попробовать передавать список Controls
  behavios: {
    typr: Array,
    required: false,
    default: () => [],
  },
  isClusterer: {
    type: Boolean,
    default: false,
  },
});
// объявление переменной карты и точек
let map;
let clusterer;
let placemarks = [];

onMounted(() => {
  if (mapStore.isMapLoaded) {
    setTimeout(() => {
      initMap();
    }, 1000);
  } else {
    const script = document.createElement("script");
    script.src = useRuntimeConfig().public.yandexApi;
    document.head.appendChild(script);
    script.onload = function () {
      mapStore.loadMap();
    };
    setTimeout(() => {
      initMap();
    }, 1000);
  }
});

onUpdated(() => {
  console.log("hehe");
});

// инициализация карты
async function initMap() {
  console.log(map);
  const mapDOM = document.getElementById(props.mapId);
  if (mapDOM && mapDOM.innerHTML == "") {
    map = new ymaps.Map(
      mapDOM,
      {
        center: props.center.reverse(),
        zoom: props.zoom,
        controls: ["zoomControl"],
      },
      { suppressMapOpenBlock: true }
    );
    console.log(map);
    if (props.isClusterer) {
      clusterer = new ymaps.Clusterer({
        preset: "islands#invertedRedClusterIcons",
        groupByCoordinates: false,
        clusterDisableClickZoom: true,
        clusterHideIconOnBalloonOpen: false,
        geoObjectHideIconOnBalloonOpen: false,
      });
      console.log(clusterer);
      map.geoObjects.add(clusterer);
    }

    updateMapPoints(props.points);
    // map.controls.add()
    map.behaviors.disable(["scrollZoom"]);
  }
}

// добавление/обновление точек
const updateMapPoints = (points) => {
  // Удаляем старые метки
  placemarks.forEach((placemark) => {
    map.geoObjects.remove(placemark);
    if (props.isClusterer) {
      clusterer.remove(placemark);
    }
  });
  placemarks = [];

  points.forEach((point) => {
    const placemark = new ymaps.Placemark(
      point.coordinates.reverse(),
      point.properties,
      point.options
    );
    placemarks.push(placemark);

    if (props.isClusterer) {
      clusterer.add(placemark);
    }
    map.geoObjects.add(placemark);
    if (point.balloonContentBody) {
      map.geoObjects.events.add("balloonopen", function (e) {
        // Получаем метку, для которой открывается balloon
        const mark = e.get("target");
        // Устанавливаем balloon рядом с меткой
        mark.options.set("balloonOffset", [0, 0]); // Измените на нужные значения
      });
    }
  });
};

// Отслеживаем изменения в пропсах
watch(
  () => props.points,
  (newPoints) => {
    updateMapPoints(newPoints);
  },
  { deep: true } // если массив объектов, используйте deep: true
);
</script>

<style lang="scss">
.map-container {
  /*   overflow: hidden;*/
  width: 100%;
  height: 100%;
  &__body {
    width: 100%;
    height: 100%;
    background-color: var(--bg-secondary);
  }
}
[class*="-ground-pane"] {
  filter: grayscale(1);
}
</style>
