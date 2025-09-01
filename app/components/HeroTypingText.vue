<script setup lang="ts">
// Мне надо менять этот текст
const instrumentFor = [
  { text: "кто не боится", highligted: "выделиться", colorClass: "bg-secondary/40" },
  { text: "кто любит", highligted: "эксперименты", colorClass: "bg-teal-600/40" },
  { text: "кто хочет", highligted: "просто играть", colorClass: "bg-amber-600/40" },
]

const pauseBetweenStrings = 50 // steps

const currentStringIndex = ref(0)
const currentString = computed(() => instrumentFor[currentStringIndex.value]!)
const currentTypedBaseString = ref("")
const currentTypedHighlightedString = ref("")

onMounted(() => {
  let mode: "type" | "remove" | "pause" = "type"
  let pauseStepsCounter = 0

  setInterval(() => {
    function nextIndex() {
      if (currentStringIndex.value === instrumentFor.length - 1) {
        currentStringIndex.value = 0
      }
      else {
        currentStringIndex.value += 1
      }
    }

    function type() {
      if (currentTypedBaseString.value.length === currentString.value.text.length) {
        if (currentTypedHighlightedString.value.length === currentString.value.highligted.length) {
          mode = "pause"
        }
        else {
          currentTypedHighlightedString.value = currentString.value.highligted.slice(0, currentTypedHighlightedString.value.length + 1)
        }
      }
      else {
        currentTypedBaseString.value = currentString.value.text.slice(0, currentTypedBaseString.value.length + 1)
      }
    }

    function remove() {
      if (currentTypedHighlightedString.value.length === 0) {
        if (currentTypedBaseString.value.length === 0) {
          nextIndex()
          mode = "type"
        }
        else {
          currentTypedBaseString.value = currentString.value.text.slice(0, currentTypedBaseString.value.length - 1)
        }
      }
      else {
        currentTypedHighlightedString.value = currentString.value.highligted.slice(0, currentTypedHighlightedString.value.length - 1)
      }
    }

    if (mode !== "pause") {
      pauseStepsCounter = 0
      switch (mode) {
        case "type":
          type()
          break
        case "remove":
          remove()
          break
      }
    }
    else {
      if (pauseStepsCounter === pauseBetweenStrings) {
        mode = "remove"
      }
      pauseStepsCounter++
    }
  }, 100)
})
</script>

<template>
  <p class="md:text-xl">
    Инструмент для тех, {{ currentTypedBaseString }} <span
      v-if="currentTypedHighlightedString.length > 0"
      class="inline-block leading-[0.8rem] p-1 animate-pulse"
      :class="currentString.colorClass"
    >{{ currentTypedHighlightedString }}
    </span><span class="leading-[0.8rem] bg-primary">||</span>
  </p>
</template>
