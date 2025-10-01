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
    class="w-full h-[5.6rem] md:h-[6.2rem] flex justify-center bg-default/70 backdrop-blur-2xl"
  >
    <div class="w-full h-full max-w-[100rem] pl-[1rem] pr-[0.8rem] md:pl-[2rem] md:pr-[1.5rem] flex items-center justify-between transition-all" :class="{ 'pl-[2rem] pr-[1.7rem] md:pl-[3rem] md:pr-[2.8rem]': y > scrollBreakpoint }">
      <a href="/">
        <Logo class="w-full min-w-[3.4rem] max-w-[3.4rem] aspect-square fill-primary" />
      </a>

      <!-- Desktop menu -->
      <nav class="hidden lg:flex justify-between w-full px-[6rem] xl:px-[10rem]">
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
      <div class="flex gap-5 pl-5">
        <UPopover
          :content="{
            align: 'start',
            side: 'right',
            sideOffset: 16,
          }" class="hidden md:block lg:hidden" mode="hover"
        >
          <UButton variant="outline" class="h-[3.6rem] px-6 rounded-full">
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
      </div>

      <!-- Mobile menu -->
      <div class="w-full md:hidden" />
      <UDrawer class="md:hidden">
        <UButton variant="outline" class="h-[3.6rem] px-6 rounded-full">
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

      <div class="w-full hidden md:block lg:hidden" />
      <ColorModeToggle class="hidden md:block" />
      <UButton
        icon="material-symbols:chat-outline"
        class="h-[3.6rem] px-6 rounded-full ml-4 md:text-nowrap"
        href="/#project-status-and-feedback"
      >
        Обратная связь
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.header-bg {
    background: linear-gradient(180deg, color-mix(in oklab, var(--ui-bg) 40%, transparent) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
