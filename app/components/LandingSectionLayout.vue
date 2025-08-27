<script setup lang="ts">
defineProps<{
  title: string
  trailingLink?: {
    href: string
    text: string
    disabled?: boolean
  }
}>()
</script>

<template>
  <div class="w-full h-fit flex flex-col gap-5">
    <div class="w-full h-[3.5rem] flex items-center justify-between">
      <h2 class="relative text-2xl">
        {{ title }}
        <div class="absolute right-0 -top-1 translate-x-[130%]">
          <slot name="title-trailing" />
        </div>
      </h2>
      <UButton v-if="trailingLink" variant="link" trailing-icon="material-symbols:arrow-forward" :href="trailingLink.href" :disabled="trailingLink.disabled || false">
        {{ trailingLink.text }}
      </UButton>
    </div>

    <slot />
  </div>
</template>
