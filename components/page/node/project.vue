<template>
  <SectionProjectTop
    :breadcrumbs="data.breadcrumb"
    :title="data.data.title"
    :segment="data.data.field_segment[0].markup"
    :region="data.data.field_region[0].markup"
    :image="data.data.field_image[0].markup"
  />
  <ContainerNavigation :navigation-list="nav" class="product__body container">
    <SectionProjectDescription
      id="description"
      :properties="data.data.body[0]"
    />
    <SectionProjectDimensions
      id="dimensions"
      :properties="data.data.field_dimensions"
    />
    <SectionProjectCarcass
      id="carcass"
      :properties="{
        title: data.data.field_framework[0].title,
        url: data.data.field_framework[0].url,
        img: data.data.field_framework[0].field_image_preview[0].markup,
      }"
    />
    <SectionProjectSheathing
      v-if="data.data.field_show_sheathing[0] === '0' ? false : true"
      id="sheathing"
    />
    <SectionProjectGallery id="gallery" :properties="data.data.field_gallery" />
    <SectionProjectVolume
      id="volume"
      :properties="
        data.data.field_scope_of_work.filter(
          (item) => item.field_completed[0] === '1'
        )
      "
    />
    <SectionProjectVideo v-if="video" id="video" :properties="video" />
    <SectionProjectOther id="other" :properties="data.data.field_projects" />
  </ContainerNavigation>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});
const video = computed(() => {
  return props.data.data.field_video_link.length === 0
    ? false
    : props.data.data.field_video_link[0];
});

const nav = computed(() => {
  let arr = [
    {
      title: "Описание",
      id: "description",
    },
    {
      title: "Габариты",
      id: "dimensions",
    },
    {
      title: "Каркас",
      id: "carcass",
    },
  ];
  if (props.data.data.field_show_sheathing[0] !== "0") {
    arr.push({
      title: "Обшивка",
      id: "sheathing",
    });
  }
  arr = [
    ...arr,
    {
      title: "Галерея",
      id: "gallery",
    },
    {
      title: "Объем работ",
      id: "volume",
    },
  ];
  if (video.value) {
    arr = [
      ...arr,
      {
        title: "Видео",
        id: "video",
      },
    ];
  }
  return arr;
});
</script>

<style lang="scss" scoped></style>
