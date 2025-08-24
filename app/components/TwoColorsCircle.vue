<script setup lang="ts">
defineProps<{ color1: string, color2: string }>()

const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <button class="aspect-square rounded-full border-none cursor-pointer two-colors-bg" @click="emit('click')" />
</template>

<style scoped>
.two-colors-bg {
  background: conic-gradient(
    from -45deg,
    v-bind("color1") 0deg 180deg,
    v-bind("color2") 180deg 360deg
  );
}
</style>
