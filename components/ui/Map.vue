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
});
// объявление переменной карты и точек
let map;
let placemarks = [];

onMounted(() => {
  console.log(mapDOM.value);
  if (mapStore.isMapLoaded) {
    initMap();
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

onUpdated(()=>{
  console.log('hehe');
})

// инициализация карты
async function initMap() {
  console.log(document);
  const mapDOM = document.getElementById(props.mapId);
  if (mapDOM && mapDOM.innerHTML == "") {
    map = new ymaps.Map(
      mapDOM,
      {
        center: props.center.reverse(),
        zoom: props.zoom,
        controls: [],
      },
      { suppressMapOpenBlock: true }
    );
    updateMapPoints(props.points);
    map.behaviors.disable(["scrollZoom"]);
  }
}

// добавление/обновление точек
const updateMapPoints = (points) => {
  // Удаляем старые метки
  placemarks.forEach((placemark) => {
    map.geoObjects.remove(placemark);
  });
  placemarks = [];

  points.forEach((point) => {
    const pointLayout = ymaps.templateLayoutFactory.createClass(point.content);
    const placemark = new ymaps.Placemark(
      point.coordinates.reverse(),
      point.properties,
      point.options
    );
    placemarks.push(placemark);
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
