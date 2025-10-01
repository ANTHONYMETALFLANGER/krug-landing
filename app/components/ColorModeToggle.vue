<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark"
}

const isDark = computed(() => colorMode.preference === "dark")
</script>

<template>
  <ClientOnly>
    <UButton variant="outline" class="size-[3.6rem] aspect-square! p-0 md:pt-1 rounded-full flex items-center justify-center" @click="toggleTheme">
      <Icon class="w-[40%] aspect-square! h-auto" :name="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'" />
    </UButton>
  </ClientOnly>
</template>
