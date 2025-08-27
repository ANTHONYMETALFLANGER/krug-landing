<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})

const images = getAllGalleryImages()
</script>

<template>
  <div class="space-y-10">
    <PageTitleSection title="Галерея" />
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <GalleryClickableImage
        v-for="image in images"
        :key="image.alt"
        :src-large="image.srcLarge"
        :src-small="image.srcSmall"
        :alt="image.alt"
        :description="image.description"
      />
    </div>
  </div>
</template>
