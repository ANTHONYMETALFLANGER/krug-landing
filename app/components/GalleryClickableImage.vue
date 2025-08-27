<script setup lang="ts">
defineProps<{
  srcLarge: string
  srcSmall: string
  alt: string
  description: string
}>()

const modalOpen = ref(false)
</script>

<template>
  <UModal
    v-model:open="modalOpen" variant="subtle" :ui="{
      content: 'w-[90%] mx-auto max-h-[50rem]! max-w-[80rem]! h-full bg-primary/20 border-primary/40 backdrop-blur-md',
    }"
  >
    <template #content>
      <div class="relative w-full h-full">
        <UButton variant="link" class="absolute top-5 right-5 z-55 text-shadow-lg text-shadow-black/50" icon="material-symbols:close" @click="modalOpen = false" />
        <NuxtImg :src="srcLarge" :alt="alt" class="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full object-contain" />
        <p class="absolute bottom-5 left-5 text-white text-lg text-shadow-lg text-shadow-black/50 z-55">
          {{ description }}
        </p>
      </div>
    </template>
  </UModal>

  <UButton class="w-full h-full p-0 hover:bg-transparent overflow-hidden" variant="ghost" @click="modalOpen = true">
    <NuxtImg :src="srcSmall" :alt="alt" class="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
  </UButton>
</template>
