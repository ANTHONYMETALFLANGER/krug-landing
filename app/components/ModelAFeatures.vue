<script setup lang="ts">
const features = computed(() => [
  {
    title: "Система горячей замены звукоснимателей",
    text: "Уникальный механизм магнитного крепления звукоснимателя. Поддерживается большинство видов и брендов датчиков.",
    imageUrl: "model-a-features/model-a-features-1.jpg",
  },
  {
    title: "Продуманная внутренняя компоновка",
    text: "Быстрый и удобный доступ к темброблоку и прочей внутренней электронике. Возможность замены электроники без использования паяльника.",
    imageUrl: "model-a-features/model-a-features-2.jpg",
  },
  {
    title: "Малый вес и отличная эргономика",
    text: "Корпус изготовлен из специального полимера, что сильно снижает вес (до ~2.5кг). В отличии от дерева данный материал не ведет при перепадах температур и влажности. Идеально для поездок.",
    imageUrl: "model-a-features/model-a-features-3.jpg",
  },
])
</script>

<template>
  <LandingSectionLayout title="Модель А" :trailing-link="{ href: '/modelA-features', text: 'Подробнее' }">
    <div class="grid grid-cols-1 grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 gap-20 md:gap-5">
      <div
        v-for="(feature, index) in features"
        :key="feature.title"
        class="col-span-1 row-span-1" :class="[
          index === features.length - 1 ? 'sm:col-span-2 lg:col-span-1' : '',
        ]"
      >
        <LandingCard
          :title="feature.title"
          :text="feature.text"
          :image-url="feature.imageUrl"
          :image-style="{
            outlined: true,
            padding: true,
          }"
        />
      </div>
    </div>

    <template #title-trailing>
      <Icon name="material-symbols:fiber-new" class="text-secondary size-7" />
    </template>
  </LandingSectionLayout>
</template>
