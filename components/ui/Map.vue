<!-- !!! Будьте аккуратно с координатами, они отличаются с версией v3 -->
<template>
  <div class="map-container">
    map
    <!-- <div :id="mapID" class="map-container__body"></div> -->
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";

// const props = defineProps({
//   mapID: {
//     type: String,
//     required: true,
//     default: "map",
//   },
//   center: {
//     type: Array,
//     required: true,
//     default: [43.894568499999956, 56.27075056847694],
//   },
//   zoom: {
//     type: Number,
//     required: false,
//     default: 7,
//   },
//   points: {
//     type: Array,
//     //     coordinates
//     //     balloonContentBody:
//     //     iconLayout
//     //     iconImageHref
//     //     iconImageSize
//     //     iconImageOffset
//     required: true,
//     default: [],
//   },
//   // попробовать передавать список Controls
//   behavios: {
//     typr: Array,
//     required: false,
//     default: [],
//   },
// });

// onMounted(() => {
//   if (!document.querySelector(`script[src="${useRuntimeConfig().public.yandexApi}"]`)) {
//     let script = document.createElement("script");
//     script.src = useRuntimeConfig().public.yandexApi;
//     document.head.appendChild(script);
//     script.onload = function () {};
//     setTimeout(() => {
//       initMap();
//     }, 1000);
//   }
//   else {
//   //   // Если скрипт уже загружен, просто инициализируем карту
//   //   console.log("else");
//     initMap();
//   }
// });

// async function initMap() {
//   const mapDOM = document.getElementById(props.mapID);
//   if (mapDOM && mapDOM.innerHTML == "") {
//     var map = new ymaps.Map(
//       mapDOM,
//       {
//         center: props.center,
//         zoom: props.zoom,
//         controls: [],
//       },
//       { suppressMapOpenBlock: true }
//     );
//     props.points.forEach((point) => {
//       var stock = new ymaps.Placemark(
//         point.coordinates,
//         {
//           balloonContentBody: point.balloonContentBody,
//         },
//         {
//           // iconLayout: pointLayout,
//           hideIconOnBalloonOpen: false,
//           iconLayout: point.iconLayout,
//           iconImageHref: point.iconImageHref,
//           iconImageSize: point.iconImageSize,
//           iconImageOffset: point.iconImageOffset,
//         }
//       );
//       map.geoObjects.add(stock);
//       if (point.balloonContentBody !== "") {
//         map.geoObjects.events.add("balloonopen", function (e) {
//           // Получаем метку, для которой открывается balloon
//           var mark = e.get("target");
//           // Устанавливаем balloon рядом с меткой
//           mark.options.set("balloonOffset", [100, 0]); // Измените на нужные значения
//         });
//       }
//     });
//     map.behaviors.disable(["scrollZoom"]);
//   }
// }
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
