<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})

const features = [
  {
    title: "Форма",
    text: "В последние годы веб стремительно развивается: появляются новые стандарты, меняется подход к созданию интерфейсов, а пользователи ожидают от сайтов не только красивого дизайна, но и высокой скорости работы. ",
    imageUrl: "model-a/shape.jpg",
  },
  {
    title: "Фишки",
    text: "В последние годы веб стремительно развивается: появляются новые стандарты, меняется подход к созданию интерфейсов, а пользователи ожидают от сайтов не только красивого дизайна, но и высокой скорости работы. ",
    imageUrl: "model-a/features.jpg",
  },
  {
    title: "Материалы",
    text: "В последние годы веб стремительно развивается: появляются новые стандарты, меняется подход к созданию интерфейсов, а пользователи ожидают от сайтов не только красивого дизайна, но и высокой скорости работы. ",
    imageUrl: "model-a/materials.jpg",
  },
  {
    title: "Электроника",
    text: "В последние годы веб стремительно развивается: появляются новые стандарты, меняется подход к созданию интерфейсов, а пользователи ожидают от сайтов не только красивого дизайна, но и высокой скорости работы. ",
    imageUrl: "model-a/electronics.jpg",
  },
]
</script>

<template>
  <div class="space-y-10">
    <PageTitleSection title="Модель А" />
    <div class="outline-2 outline-dashed outline-primary/50 p-2 h-[13rem] md:h-[20rem] lg:h-[30rem] mb-10 md:mb-20 lg:mb-30 ">
      <NuxtImg src="model-a/general.webp" alt="title" class="w-full h-full object-contain" />
    </div>

    <h2 class="text-2xl font-serif">
      Об инструменте
    </h2>

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
      <div v-for="feature in features" :key="feature.title" class="w-full flex flex-col gap-8 md:h-[30rem] md:flex-row md:gap-10">
        <NuxtImg :src="feature.imageUrl" :alt="feature.title" class="w-full md:w-1/2 h-[20rem] md:h-full object-cover" placeholder />

        <LandingSectionLayout :title="feature.title" class="w-full md:w-1/2">
          <p class="text-sm md:text-base">
            {{ feature.text }}
          </p>
        </LandingSectionLayout>
      </div>
    </div>

    <div class="w-full flex justify-center">
      <UButton
        class="w-fit px-6 py-4 mt-3 text-primary rounded-full bg-transparent border outline-primary border-primary hover:outline-2 hover:bg-transparent transition-all duration-100"
        trailing-icon="material-symbols:arrow-forward"
        href="/gallery"
      >
        Больше примеров формы в галерее
      </UButton>
    </div>
  </div>
</template>
