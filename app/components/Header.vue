<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core"
import Logo from "~/assets/svg/logo.svg"

const { y } = useWindowScroll()
const scrollBreakpoint = 10

watch(y, (prev, next) => {
  const direction = prev > next // true - down, false - up
  if (!direction) {
    if (y.value < scrollBreakpoint) {
      y.value = 0
    }
  }
})

const menuEntries = computed(() => [
  { title: "Модель А", href: "/modelA-features" },
  { title: "Звукосниматели", href: "#", comingSoon: true },
  { title: "Кастомизация", href: "/customization" },
  { title: "О компании", href: "/about-company" },
])
</script>

<template>
  <div
    class="w-full h-[7.2rem] md:h-[6.2rem] transition-all flex items-center justify-between gap-[8rem] bg-default"
    :class="{ 'h-[6.2rem]! px-[1rem]': y > scrollBreakpoint }"
  >
    <a href="/">
      <Logo class="w-full min-w-[3.4rem] max-w-[3.4rem] aspect-square fill-primary" />
    </a>

    <!-- Navigation in header -->
    <div class="flex md:gap-[1.16rem] lg:gap-0 items-center lg:w-full lg:max-w-[74.8rem]">
      <nav class="hidden lg:grid grid-cols-4 w-full">
        <template v-for="entry in menuEntries" :key="entry.title">
          <a v-if="!entry.comingSoon" class="hover:text-secondary transition-colors duration-200" :href="entry.href">{{ entry.title }}</a>
          <UTooltip
            v-else :content="{
              align: 'start',
              side: 'bottom',
              sideOffset: 8,
            }"
            :ui="{
              content: 'p-4',
              text: 'text-base',
            }"
            class="text-default!"
            text="Раздел в разработке..."
          >
            <a class="opacity-45 cursor-not-allowed" :disabled="true">{{ entry.title }}</a>
          </UTooltip>
        </template>
      </nav>

      <!-- Tablet menu -->
      <UPopover
        :content="{
          align: 'start',
          side: 'left',
          sideOffset: 16,
        }" class="hidden md:block lg:hidden" mode="hover"
      >
        <UButton class="h-[3.6rem] w-[6rem] rounded-full">
          Меню
        </UButton>

        <template #content>
          <div class="flex flex-col gap-5 items-center w-full max-w-[64rem] p-6">
            <nav class="flex flex-col gap-5 w-full">
              <template v-for="entry in menuEntries" :key="entry.title">
                <a v-if="!entry.comingSoon" class="hover:text-secondary transition-colors duration-200" :href="entry.href">{{ entry.title }}</a>
                <UTooltip
                  v-else :content="{
                    align: 'start',
                    side: 'bottom',
                    sideOffset: 8,
                  }"
                  :ui="{
                    content: 'p-4',
                    text: 'text-base',
                  }"
                  class="text-default!"
                  text="Раздел в разработке..."
                >
                  <a class="opacity-45 cursor-not-allowed" :disabled="true">{{ entry.title }}</a>
                </UTooltip>
              </template>
            </nav>
          </div>
        </template>
      </UPopover>

      <!-- Mobile menu -->
      <UDrawer class="md:hidden">
        <UButton class="h-[3.6rem] w-[6rem] rounded-full flex items-center justify-center">
          Меню
        </UButton>

        <template #content>
          <div class="flex flex-col gap-5 items-start w-full max-w-[64rem] p-6">
            <nav class="flex flex-col gap-5 w-full">
              <template v-for="entry in menuEntries" :key="entry.title">
                <a v-if="!entry.comingSoon" class="hover:text-secondary transition-colors duration-200" :href="entry.href">{{ entry.title }}</a>
                <UTooltip
                  v-else :content="{
                    align: 'start',
                    side: 'bottom',
                    sideOffset: 8,
                  }"
                  :ui="{
                    content: 'p-4',
                    text: 'text-base',
                  }"
                  class="text-default!"
                  text="Раздел в разработке..."
                >
                  <a class="opacity-45 cursor-not-allowed" :disabled="true">{{ entry.title }}</a>
                </UTooltip>
              </template>
            </nav>
            <USeparator class="w-full" />
            <ColorModeToggle class="size-[3rem]" />
          </div>
        </template>
      </UDrawer>

      <ColorModeToggle class="hidden md:block" />
    </div>
  </div>
</template>

<style scoped>
.header-bg {
    background: linear-gradient(180deg, color-mix(in oklab, var(--ui-bg) 40%, transparent) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
