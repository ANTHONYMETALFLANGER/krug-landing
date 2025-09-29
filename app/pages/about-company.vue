<script setup lang="ts">
definePageMeta({
  layout: "header-content-footer",
})

const membersList = [
  {
    name: "Унчиков Андрей",
    position: "???",
    image: "/faces/1.jpeg",
  },
  {
    name: "Кононов Дмитрий",
    position: "Разработка электроники, 3D моделирование и проектирование, работа с производственным оборудованием",
    image: "/faces/2.jpeg",
  },
  {
    name: "Колесников Михаил",
    position: "Генеральный директор",
    image: "/faces/3.jpeg",
  },
  {
    name: "Беспяткин Владимир",
    position: "Дизайн бренда, программирование микроконтроллеров, 3D моделирование и визуализация",
    image: "/faces/4.jpeg",
  },
  {
    name: "Самозанятый 1",
    position: "???",
    image: "/faces/3.jpeg",
  },
  {
    name: "Самозанятый 2",
    position: "???",
    image: "/faces/3.jpeg",
  },
]
</script>

<template>
  <div>
    <PageTitleSection title="О компании" />

    <div class="mt-8 md:mt-0 space-y-16 lg:space-y-20">
      <p class="max-w-[50rem]">
        Наша компания была основана в 2025 году и специализируется на разработке, продаже современных и необычных звуковых устройств.
      </p>

      <div class="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        <div v-for="member in membersList" :key="member.name" class="w-full h-full flex flex-col items-center gap-5">
          <div class="w-full aspect-square rounded-full overflow-hidden">
            <NuxtImg :src="member.image" :alt="member.name" class="w-full h-full object-cover" placeholder />
          </div>

          <h2 class="text-lg md:text-xl text-center font-semibold">
            {{ member.name }}
          </h2>
          <p class="text-sm md:text-base text-center">
            {{ member.position }}
          </p>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <LandingSectionLayout title="Юридическая информация" class="w-full">
          <div class="space-y-[1.5rem] text-sm md:text-base">
            <p>
              ООО «ГНП»<br>
              Юр. адрес: 398007, РОССИЯ, ЛИПЕЦКАЯ ОБЛАСТЬ, Г.О. ГОРОД ЛИПЕЦК, Г ЛИПЕЦК, УЛ САФОНОВА, Д. 1, КВ. 2<br>
              ИНН: 4800019135<br>
              ОГРН: 1244800008100
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
                <NuxtImg src="fond_sodeystviya_inov.webp" class="w-full h-full object-contain" placeholder />
              </div>
              <div class="w-[37%] h-full">
                <NuxtImg src="rgeu.webp" class="w-full h-full object-contain" placeholder />
              </div>
            </div>
          </div>
        </LandingSectionLayout>

        <LandingSectionLayout title="Контакты" class="w-full">
          <div class="space-y-[0.8rem] text-sm md:text-base">
            <p>
              <Icon name="material-symbols:alternate-email" />
              Email: mikhail_0914@mail.com
            </p>
            <p>
              <Icon name="material-symbols:phone-enabled-sharp" />
              Телефон: +7 (920) 523-49-56
            </p>
          </div>
        </LandingSectionLayout>
      </div>
    </div>
  </div>
</template>
