<script setup lang="ts">
const presets = ref(guitarColorsPresets())

const currentPresetName = ref<string>(presets.value[0]!.name)

const currentPreset = computed(() => presets.value.find(preset => preset.name === currentPresetName.value))

const bgColorHex = computed<string>(() => {
  if (currentPreset.value?.deck === "#000000") {
    return "#6C6C6C"
  }
  return currentPreset.value?.deck ?? "#6C6C6C"
})

const currentGuitarImagePath = computed(() => `guitar_color_schemes/${currentPreset.value?.name}.webp`)

onMounted(() => {
  presets.value.sort(() => Math.random() - 0.5)
})

const colorMode = useColorMode()
const bgTransparency = computed(() => colorMode.value === "dark" ? "30%" : "10%")

const isPresetImageLoaded = ref(false)
</script>

<template>
  <div v-if="currentPreset" class="relative flex flex-col widget-bg transition-colors duration-300 lg:flex-row gap-5 lg:gap-0 overflow-hidden">
    <div class="w-full p-10 md:pb-0 lg:py-10 lg:pl-10 lg:pr-0 cover-noise" :class="colorMode.value === 'dark' ? 'cover-noise-semi-semi-lighter' : 'cover-noise-semi-darker'">
      <div class="w-full h-full flex flex-col">
        <div class="w-full h-[3.6rem] flex justify-between items-center">
          <h2 class="text-2xl">
            Ваш стиль → ваш цвет
          </h2>

          <UButton class="hidden md:flex items-center h-full px-6 text-primary rounded-full bg-transparent border border-primary hover:outline-2 hover:bg-transparent transition-all duration-100" trailing-icon="material-symbols:arrow-outward">
            В конфигуратор
          </UButton>
        </div>

        <div class="relative w-full h-[20rem] md:h-[30rem] brightness-125 dark:brightness-100 lg:h-full flex items-center justify-center">
          <NuxtImg
            :class="isPresetImageLoaded ? 'blur-0 saturate-100 opacity-100' : 'blur-2xl saturate-0 opacity-40'"
            class="hidden transition-all duration-300 md:block absolute left-[3%] top-1/2 translate-y-[-35%] md:-translate-y-1/2 h-[16rem] md:h-[18rem] xl:h-[22rem] object-cover object-left"
            :src="currentGuitarImagePath" :alt="currentPreset.name"
            @load="isPresetImageLoaded = true"
          />
          <NuxtImg
            :class="isPresetImageLoaded ? 'blur-0 saturate-100 opacity-100' : 'blur-2xl saturate-0 opacity-40'"
            class="block transition-all duration-300 md:hidden absolute left-1/2 -translate-x-1/2 top-[3.5rem] rotate-270 h-[16rem] min-w-[22rem] w-[22rem] object-cover object-left"
            :src="currentGuitarImagePath" :alt="currentPreset.name"
            @load="isPresetImageLoaded = true"
          />
        </div>
      </div>
    </div>
    <div class="w-full h-[8rem] md:h-[10rem] lg:w-[19rem] lg:h-[46.5rem] overflow-auto">
      <div class="w-full h-full flex lg:flex-col gap-8 items-center justify-start px-10 lg:py-10">
        <TwoColorsCircle
          v-for="preset in presets"
          :key="preset.name"
          :color1="preset.deck"
          :color2="preset.accent"
          class="size-[3.2rem] md:size-[5.2rem] transition-all duration-100"
          :class="currentPresetName === preset.name ? 'outline-3 outline-primary' : ''"
          @click="() => {
            currentPresetName = preset.name
            isPresetImageLoaded = false
          }"
        />
      </div>
    </div>

    <div class="w-full px-10 pb-10 flex justify-between items-center md:hidden">
      <UButton class="h-[3.6rem] w-full px-6 text-primary rounded-full bg-transparent border border-primary hover:outline-2 hover:bg-transparent transition-all duration-100" trailing-icon="material-symbols:arrow-outward">
        <p class="mx-auto">
          В конфигуратор
        </p>
      </UButton>
    </div>
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--ui-primary);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--ui-primary);
}

.widget-bg {
  background-color: color-mix(in oklab, v-bind("bgColorHex") v-bind("bgTransparency"), transparent);
}
</style>
