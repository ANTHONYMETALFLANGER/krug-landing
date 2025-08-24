<script setup lang="ts">
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark"
}

const isDark = computed(() => colorMode.preference === "dark")
</script>

<template>
  <ClientOnly>
    <UButton class="size-[3.6rem] rounded-full" @click="toggleTheme">
      <Icon class="size-[70%] mt-[10%] m-auto" :name="isDark ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'" />
    </UButton>
  </ClientOnly>
</template>
