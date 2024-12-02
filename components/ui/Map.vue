<!-- !!! Будьте аккуратно с координатами, они отличаются с версией v3 -->
<template>
  <div class="map-container">
    <div :id="mapId" class="map-container__body" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

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
    //     balloonContentBody:
    //     iconLayout
    //     iconImageHref
    //     iconImageSize
    //     iconImageOffset
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
  if (
    !document.querySelector(
      `script[src="${useRuntimeConfig().public.yandexApi}"]`
    )
  ) {
    const script = document.createElement("script");
    script.src = useRuntimeConfig().public.yandexApi;
    document.head.appendChild(script);
    script.onload = function () {};
    setTimeout(() => {
      initMap();
    }, 1000);
  } else {
    //   // Если скрипт уже загружен, просто инициализируем карту
    //   console.log("else");
    initMap();
  }
});

// инициализация карты
async function initMap() {
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
      {},
      {
        iconLayout: pointLayout,
        // Описываем фигуру активной области "Круг".
        iconShape: {
          type: "Circle",
          // Круг описывается в виде центра и радиуса
          coordinates: [0, 0],
          radius: point.radius ? point.radius : 32,
        },
      }
    );
    placemarks.push(placemark);
    map.geoObjects.add(placemark);
    if (point.balloonContentBody !== "") {
      map.geoObjects.events.add("balloonopen", function (e) {
        // Получаем метку, для которой открывается balloon
        const mark = e.get("target");
        // Устанавливаем balloon рядом с меткой
        mark.options.set("balloonOffset", [100, 0]); // Измените на нужные значения
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
