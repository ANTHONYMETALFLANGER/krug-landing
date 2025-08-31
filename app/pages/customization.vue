<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})
</script>

<template>
  <div class="space-y-10">
    <PageTitleSection title="Кастомизация" />
    <NuxtImg src="customization/general.jpg" alt="title" class="w-full h-[20rem] md:h-[20rem] lg:h-[30rem] object-cover" />

    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
      <LandingSectionLayout title="Цвет">
        <div class="space-y-10">
          <p class="text-sm md:text-base">
            В качестве расцветки гитары (в частности модели А) мы предлагаем выбрать:
          </p>
          <div class="flex gap-5">
            <div class="w-1/2 space-y-5">
              <NuxtImg src="customization/body.jpg" alt="title" class="w-full h-[10rem] object-cover brightness-125" />
              <p class="text-sm md:text-base">
                Основной цвет — покрывает деку и гриф, формирует общий облик инструмента.
              </p>
            </div>

            <div class="w-1/2 space-y-5">
              <NuxtImg src="customization/accent.jpg" alt="title" class="w-full h-[10rem] object-cover brightness-125" />
              <p class="text-sm md:text-base">
                Акцентный цвет — используется для крышек звукоснимателей, элементов темброблока, ручек и переключателей, а также, при желании, накладки.
              </p>
            </div>
          </div>
        </div>
      </LandingSectionLayout>

      <LandingSectionLayout title="Количество ладов">
        <div class="space-y-10">
          <p class="text-sm md:text-base">
            Для модели А (и большинства последующих моделей) предполагается выбор из двух конфигураций 24 и 27. Конструкция изначально проектируется под обе конфигурации, а благодаря 3д печати стоимость обеих конфигураций отличается не сильно.
          </p>

          <NuxtImg src="customization/frets.jpg" alt="title" class="w-full h-[10rem] object-cover" />
        </div>
      </LandingSectionLayout>

      <LandingSectionLayout title="Версии для левшей - правшей">
        <p class="text-sm md:text-base">
          Если вы левша - достаточно указать желаемую версию в конфигураторе, мы изначально проектируем инструмент как для левшей так и для правшей
        </p>
      </LandingSectionLayout>

      <LandingSectionLayout title="Количество струн">
        <div class="bg-violet-600/50 px-2 py-1 rounded-full w-fit">
          Планируется
        </div>
        <p class="text-sm md:text-base">
          В проекте модели А заложена возможность изменения количества струн. Но в данный момент версии с количеством струн более 6 все еще в разработке.
        </p>
      </LandingSectionLayout>
    </div>

    <div class="w-full flex justify-center mt-20">
      <UButton
        class="w-fit max-w-[30rem] px-6 py-4 mt-3 text-primary rounded-full bg-transparent border outline-primary border-primary hover:outline-2 hover:bg-transparent transition-all duration-100"
        trailing-icon="material-symbols:arrow-forward"
        href="/configurator"
      >
        <p>Возможность кастомизировать ваш заказ появится на старте продаж, вместе с <span class="font-bold">конфигуратором</span></p>
      </UButton>
    </div>
  </div>
</template>
