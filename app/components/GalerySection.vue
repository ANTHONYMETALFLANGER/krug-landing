<script setup lang="ts">
const images = [
  {
    src: "gallery/small/5237888698702491981_121.jpg",
    alt: "gal1",
  },
  {
    src: "gallery/small/Screenshot 2025-08-08 124858.jpg",
    alt: "gal2",
  },
  {
    src: "gallery/small/5237888698702491983_121.jpg",
    alt: "gal3",
  },
  {
    src: "gallery/small/5237888698702491992_121.jpg",
    alt: "gal4",
  },
  {
    src: "gallery/small/sjnmxoklas.jpg",
    alt: "gal5",
  },
  {
    src: "gallery/small/IMG_20250808_134444243.jpg",
    alt: "gal6",
  },
]

const imagesSorted = ref<typeof images | null>(null)
onMounted(() => {
  imagesSorted.value = images.sort(() => Math.random() - 0.5)
})
</script>

<template>
  <LandingSectionLayout v-if="imagesSorted" title="Галерея разработок" :trailing-link="{ href: '/gallery', text: 'Больше фото' }">
    <!-- Desktop -->
    <div class="hidden lg:flex w-full h-[43rem] gap-5">
      <div class="w-[45%] h-full flex flex-col gap-5">
        <div class="relative w-full h-[40%] bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[0]!.src" :alt="imagesSorted[0]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>

        <div class="relative w-full h-[60%] bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[1]!.src" :alt="imagesSorted[1]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>
      </div>

      <div class="w-[55%] h-full flex flex-col gap-5">
        <div class="w-full h-[70%] flex gap-5">
          <div class="relative w-[40%] h-full bg-primary/20 overflow-hidden">
            <div class="w-full h-full cover-noise cover-noise-galery">
              <NuxtImg :src="imagesSorted[2]!.src" :alt="imagesSorted[2]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
            </div>
          </div>
          <div class="w-[60%] h-full flex flex-col gap-5">
            <div class="relative w-full h-[45%] bg-primary/20 overflow-hidden">
              <div class="w-full h-full cover-noise cover-noise-galery">
                <NuxtImg :src="imagesSorted[3]!.src" :alt="imagesSorted[3]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
              </div>
            </div>
            <div class="relative w-full h-[55%] bg-primary/20 overflow-hidden">
              <div class="w-full h-full cover-noise cover-noise-galery">
                <NuxtImg :src="imagesSorted[4]!.src" :alt="imagesSorted[4]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div class="relative w-full h-[30%] bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[5]!.src" :alt="imagesSorted[5]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Tablet -->
    <div class="hidden md:flex lg:hidden flex-col gap-5 h-[47rem] w-full">
      <div class="w-full h-1/3 flex gap-5">
        <div class="relative w-[65%] h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[0]!.src" :alt="imagesSorted[0]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>

        <div class="relative w-[35%] h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[1]!.src" :alt="imagesSorted[1]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>
      </div>

      <div class="relative w-full h-1/3 bg-primary/20 overflow-hidden">
        <div class="w-full h-full cover-noise cover-noise-galery">
          <NuxtImg :src="imagesSorted[2]!.src" :alt="imagesSorted[2]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
        </div>
      </div>

      <div class="w-full h-1/3 flex gap-5">
        <div class="relative w-[45%] h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[3]!.src" :alt="imagesSorted[3]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>

        <div class="relative w-[55%] h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[4]!.src" :alt="imagesSorted[4]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex md:hidden flex-col gap-5 h-[40rem] w-full">
      <div class="relative w-full h-1/3 bg-primary/20 overflow-hidden">
        <div class="w-full h-full cover-noise cover-noise-galery">
          <NuxtImg :src="imagesSorted[0]!.src" :alt="imagesSorted[0]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
        </div>
      </div>

      <div class="w-full h-1/3 flex gap-5">
        <div class="relative w-1/2 h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[1]!.src" :alt="imagesSorted[1]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>

        <div class="relative w-1/2 h-full bg-primary/20 overflow-hidden">
          <div class="w-full h-full cover-noise cover-noise-galery">
            <NuxtImg :src="imagesSorted[2]!.src" :alt="imagesSorted[2]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
          </div>
        </div>
      </div>

      <div class="relative w-full h-1/3 bg-primary/20 overflow-hidden">
        <div class="w-full h-full cover-noise cover-noise-galery">
          <NuxtImg :src="imagesSorted[3]!.src" :alt="imagesSorted[3]!.alt" class="w-full h-full hover:scale-105 transition-all duration-300 object-cover" />
        </div>
      </div>
    </div>
  </LandingSectionLayout>
</template>

<style lang="scss" scoped>
.cover-noise-galery::after {
  filter: brightness(505%);
  mix-blend-mode: hard-light;
  opacity: 0.3;
}
</style>
