<script setup lang="ts">
import Logo from "~/assets/svg/logo.svg"

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
</script>

<template>
  <div class="w-full py-5 flex gap-5 flex-col-reverse md:flex-row md:justify-between">
    <div class="flex gap-6 items-center">
      <Logo class="hidden md:block w-full min-w-[2rem] max-w-[2rem] aspect-square fill-primary opacity-40" />
      <p>© ООО «ТРЕШГЕЙНПАНК», 2025</p>
    </div>

    <UButton
      class="h-[3.6rem] w-full md:w-fit px-6 mt-3 text-default rounded-full bg-transparent border hover:outline-2 hover:bg-transparent transition-all duration-100"
      type="submit"
      trailing-icon="material-symbols:arrow-upward"
      @click="scrollToTop"
    >
      Наверх
    </UButton>
  </div>
</template>
