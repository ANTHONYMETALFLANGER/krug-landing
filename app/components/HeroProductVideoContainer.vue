<script setup lang="ts">
import { useElementSize } from "@vueuse/core"

const props = withDefaults(defineProps<{
  videoUrl: string
  posterUrl: string
  videoAspectRatio: number
  defaultSizeBy?: "width" | "height"
  appearence?: "darker" | "lighter"
  scrollFadeMultiplier?: number
}>(), {
  defaultSizeBy: "width",
  appearence: "lighter",
})

const videoRef = useTemplateRef("videoRef")
const showPoster = ref(false)
const hideVideo = ref(false)

const containerRef = useTemplateRef("containerRef")
const { width, height } = useElementSize(containerRef)
const sizeBy = ref<"width" | "height">(props.defaultSizeBy)
watch([width, height], ([newWidth, newHeight]) => {
  if (newWidth / newHeight < props.videoAspectRatio) {
    sizeBy.value = "height"
  }
  else {
    sizeBy.value = "width"
  }
})

onMounted(() => {
  const video = videoRef.value
  if (!video)
    return

  video.addEventListener("ended", () => {
    showPoster.value = true
    setTimeout(() => {
      hideVideo.value = true
    }, 300)
  })
})
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <div
      ref="containerRef"
      class="relative w-full h-full overflow-hidden cover-noise transition-all duration-300"
      :class="appearence === 'darker' ? 'cover-noise-semi-lighter after:invert' : 'cover-noise-semi-semi-lighter'"
    >
      <div class="absolute fade-on-scroll w-full h-full top-0 left-0 z-30" />

      <!-- Video plays only once -->
      <ClientOnly>
        <video
          ref="videoRef"
          :src="videoUrl"
          autoplay
          muted
          playsinline
          class="absolute scale-[102%]"
          :class="{
            'w-full h-auto top-1/2 left-0 -translate-y-1/2': sizeBy === 'width',
            'w-auto h-full object-cover top-0 left-1/2 -translate-x-1/2': sizeBy === 'height',
          }"
        />
      </ClientOnly>

      <!-- Poster (last frame static after video played) -->
      <!-- <NuxtImg
        :src="posterUrl"
        alt="last frame"
        class="absolute"
        :class="{
          'block': showPoster,
          'hidden': !showPoster,
          'w-full h-auto top-1/2 left-0 -translate-y-1/2': sizeBy === 'width',
          'min-w-max h-full top-0 left-1/2 -translate-x-1/2': sizeBy === 'height',
        }"
      /> -->
    </div>
  </div>
</template>
