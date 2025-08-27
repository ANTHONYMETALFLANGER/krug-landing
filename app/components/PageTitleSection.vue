<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full h-[12rem] md:h-[20rem] md:pb-8 lg:h-[24rem] lg:pb-10 flex items-end justify-between">
    <div class="text-[2.5rem] md:text-[4rem] md:leading-[5rem] lg:text-[5.5rem] lg:leading-[6.5rem] animate-hero-main-text-appear">
      <UButton title="На главную" icon="material-symbols:arrow-back" variant="link" class="pl-0" href="/">
        На главную
      </UButton>
      <h1 class="animate-hero-main-text-appear">
        {{ title }}
      </h1>
    </div>
  </div>
</template>
