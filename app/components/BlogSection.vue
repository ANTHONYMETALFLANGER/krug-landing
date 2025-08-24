<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"

const breakpoints = useBreakpoints(breakpointsTailwind, { ssrWidth: 1920 })

const largerThanMd = breakpoints.greater("md") // only larger than md
const largerThanLg = breakpoints.greater("lg") // lg and smaller

const blogs = computed(() => [
  {
    title: "Здесь будет какая то новость, но пока непонятно какая",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    imageUrl: undefined,
  },
  {
    title: "Здесь будет какая то новость, но пока непонятно какая",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    imageUrl: undefined,
  },
  {
    title: "Здесь будет какая то новость, но пока непонятно какая",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    imageUrl: undefined,
  },
])

const visibleBlogsCount = computed(() => {
  if (largerThanLg.value) {
    return 3
  }
  else if (largerThanMd.value) {
    return 2
  }
  return 1
})

const actualElements = computed(() => blogs.value.slice(0, visibleBlogsCount.value))
</script>

<template>
  <LandingSectionLayout title="Блог" :trailing-link="{ href: '#', text: 'Больше новостей' }">
    <div
      class="grid grid-cols-1 grid-rows-1 md:grid-rows-1 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-20 md:gap-5"
    >
      <div
        v-for="blog in actualElements"
        :key="blog.title"
        class="col-span-1 row-span-1"
      >
        <LandingCard
          :title="blog.title"
          :text="blog.text"
          :image-url="blog.imageUrl"
        />
      </div>
    </div>
  </LandingSectionLayout>
</template>
