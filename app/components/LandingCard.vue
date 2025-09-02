<script setup lang="ts">
defineProps<{
  title: string
  text: string
  imageUrl?: string
}>()
</script>

<template>
  <div class="w-full flex flex-col gap-9 md:gap-18">
    <div v-if="imageUrl" class="bg-default w-full h-[13rem] md:h-[16rem] lg:h-[18rem] scale-100 border border-primary overflow-hidden">
      <NuxtImg placeholder :src="imageUrl" alt="card-image" class="w-full h-full object-cover mix-blend-difference" />
    </div>
    <USkeleton v-else class="w-full h-[13rem] md:h-[18rem] lg:h-[20rem] rounded-none bg-primary/20" />
    <div class="flex flex-col gap-[2rem]">
      <h2 class="text-2xl font-serif">
        {{ title }}
      </h2>
      <p class="text-sm md:text-base">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
