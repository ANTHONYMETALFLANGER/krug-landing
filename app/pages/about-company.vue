<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})

const membersList = [
  {
    name: "Павлович",
    position: "Руководитель",
    image: "/gallery/small/sjnmxoklas.jpg",
  },
  {
    name: "Правая рука павловича",
    position: "Руководитель",
    image: "/gallery/small/5237888698702491982_121.jpg",
  },
  {
    name: "Правая нога павловича",
    position: "Руководитель",
    image: "/gallery/small/IMG_20250808_132705408.jpg",
  },
  {
    name: "Левая нога павловича",
    position: "Руководитель",
    image: "IRzWRCdBCkI.jpg",
  },
]
</script>

<template>
  <div>
    <PageTitleSection title="О компании" />

    <div class="space-y-16 lg:space-y-20">
      <p class="max-w-[60rem]">
        Наша компания была основана в 2025 году и специализируется на разработке, продаже современных звуковых устройств.
      </p>

      <div class="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div v-for="member in membersList" :key="member.name" class="w-full h-full flex flex-col items-center gap-5">
          <div class="w-full aspect-square rounded-full overflow-hidden">
            <NuxtImg :src="member.image" :alt="member.name" class="w-full h-full object-cover" />
          </div>

          <h2 class="text-lg md:text-xl text-center font-semibold">
            {{ member.name }}
          </h2>
          <p class="text-sm md:text-base text-center">
            {{ member.position }}
          </p>
        </div>
      </div>

      <div class="w-full flex flex-col gap-16 md:flex-row md:gap-5">
        <LandingSectionLayout title="Юридическая информация" class="w-full">
          <div class="space-y-[1.5rem] text-sm md:text-base">
            <p>
              Для модели А (и большинства последующих моделей) предполагается выбор из двух конфигураций 24 и 27. Конструкция изначально проектируется под обе конфигурации, а благодаря 3д печати стоимость обеих конфигураций отличается не сильно.
            </p>
          </div>
        </LandingSectionLayout>

        <!-- Support -->
        <LandingSectionLayout title="Поддержка проекта" class="w-full">
          <div class="space-y-[1.5rem] text-sm md:text-base">
            <p>
              Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию
              малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального
              проекта "Платформа университетского технологического предпринимательства".
            </p>
            <p>Проект пользуется всесторонней поддержкой РГЭУ (РИНХ).</p>
            <div class="flex gap-8 h-[6rem] md:h-[9.3rem] max-w-[21.5rem] md:max-w-[33rem]">
              <div class="w-[53%] h-full">
                <NuxtImg src="fond_sodeystviya_inov.webp" class="w-full h-full object-contain" />
              </div>
              <div class="w-[37%] h-full">
                <NuxtImg src="rgeu.webp" class="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </LandingSectionLayout>
      </div>
    </div>
  </div>
</template>
