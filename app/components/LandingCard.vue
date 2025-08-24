<script setup lang="ts">
defineProps<{
  title: string
  text: string
  imageUrl?: string
}>()
</script>

<template>
  <div class="w-full flex flex-col gap-9 md:gap-18">
    <NuxtImg v-if="imageUrl" :src="imageUrl" alt="card-image" class="w-full h-[13rem] md:h-[18rem] lg:h-[20rem]" />
    <USkeleton v-else class="w-full h-[13rem] md:h-[18rem] lg:h-[20rem] rounded-none bg-primary/20" />
    <div class="flex flex-col gap-[2rem]">
      <h2 class="text-2xl">
        {{ title }}
      </h2>
      <p class="text-sm md:text-base">
        {{ text }}
      </p>
    </div>
  </div>
</template>
