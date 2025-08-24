<script setup lang="ts">
defineProps<{
  title: string
  trailingLink?: {
    href: string
    text: string
  }
}>()
</script>

<template>
  <div class="w-full h-fit flex flex-col gap-5">
    <div class="w-full h-[3.5rem] flex items-center justify-between">
      <h2 class="text-2xl">
        {{ title }}
      </h2>
      <UButton v-if="trailingLink" variant="link" trailing-icon="material-symbols:arrow-forward" :href="trailingLink.href">
        {{ trailingLink.text }}
      </UButton>
    </div>

    <slot />
  </div>
</template>
