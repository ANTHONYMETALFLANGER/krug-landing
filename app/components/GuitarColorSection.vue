<script setup lang="ts">
const presets = ref(guitarColorsPresets())

onMounted(() => {
  presets.value.sort(() => Math.random() - 0.5)
})

const currentPresetName = ref<string>(presets.value[0]!.name)

const currentPreset = computed(() => presets.value.find(preset => preset.name === currentPresetName.value))

const bgColorHex = computed<string>(() => {
  if (currentPreset.value?.deck === "#000000") {
    return "#6C6C6C"
  }
  return currentPreset.value?.deck ?? "#6C6C6C"
})
</script>

<template>
  <div v-if="currentPreset" class="flex flex-col widget-bg transition-colors duration-300 lg:flex-row gap-5 lg:gap-0">
    <div class="w-full p-10 lg:py-10 lg:pl-10 lg:pr-0">
      <div class="w-full h-full flex flex-col">
        <div class="w-full h-[3.6rem] flex justify-between items-center">
          <h2 class="text-2xl">
            Ваш стиль → ваш цвет
          </h2>

          <UButton class="hidden md:flex items-center h-full px-6 text-primary rounded-full bg-transparent border border-primary hover:border-3 hover:bg-transparent transition-all duration-100" trailing-icon="material-symbols:arrow-outward">
            В конфигуратор
          </UButton>
        </div>

        <div class="w-full h-[20rem] md:h-[30rem] lg:h-full flex items-center justify-center">
          {{ currentPresetName }}
        </div>
      </div>
    </div>
    <div class="w-full h-[8rem] md:h-[13rem] lg:w-[19rem] lg:h-[46.5rem] overflow-auto">
      <div class="w-full h-full flex lg:flex-col gap-8 items-center justify-start px-10 lg:py-10">
        <TwoColorsCircle
          v-for="preset in presets"
          :key="preset.name"
          :color1="preset.deck"
          :color2="preset.accent"
          class="size-[3.2rem] md:size-[5.2rem] transition-all duration-100"
          :class="currentPresetName === preset.name ? 'outline-3 outline-primary' : ''"
          @click="currentPresetName = preset.name"
        />
      </div>
    </div>

    <div class="w-full px-10 pb-10 flex justify-between items-center md:hidden">
      <UButton class="h-[3.6rem] w-full px-6 text-primary rounded-full bg-transparent border border-primary hover:border-3 hover:bg-transparent transition-all duration-100" trailing-icon="material-symbols:arrow-outward">
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
  background-color: color-mix(in oklab, v-bind("bgColorHex") 10%, transparent);
}
</style>
