<template>
  <div class="front">
    <SectionFrontHero
      :video="data.data.info[0].field_video_mp4"
      :video-webm="data.data.info[0].field_video_webm"
      :video-bg="data.data.info[0].field_background_video"
    />
    <SectionFrontCatalog
      :list="data.data.products"
      :service="{
        url: '/services',
        title: data.data.info[0].field_title_service_item,
        field_image_preview: data.data.info[0].field_image_service_item,
        field_description_preview:
          data.data.info[0].field_description_service_item,
      }"
    />
    <SectionFrontGeography />
    <SectionFrontProjects :list="data.data.info[0].field_projects" />
    <SectionFrontAbout />
    <SectionFrontPartners :logos="data.data.info[0].field_partners" />
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: ()=>{}
  },
});

</script>
