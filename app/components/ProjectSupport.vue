<template>
  <div class="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between pl-2 md:pl-3 lg:pl-5 overflow-hidden">
    <LandingSectionLayout title="Поддержка проекта" class="w-full lg:max-w-[33rem]">
      <div class="space-y-[1.5rem] text-sm md:text-base">
        <p>
          Проект создан при поддержке Федерального государственного бюджетного учреждения "Фонд содействия развитию
          малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального
          проекта "Платформа университетского технологического предпринимательства".
        </p>
        <p>Проект пользуется всесторонней поддержкой РГЭУ (РИНХ).</p>
        <div class="flex gap-8 h-[6rem] md:h-[9.3rem] max-w-[21.5rem] md:max-w-[33rem]">
          <div class="w-[53%] h-full">
            <NuxtImg src="fond_sodeystviya_inov.webp" class="w-full h-full object-cover" />
          </div>
          <div class="w-[37%] h-full">
            <NuxtImg src="rgeu.webp" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </LandingSectionLayout>
    <div class="w-full h-[11rem] lg:h-[30rem] lg:w-[46%] opacity-30">
      <NuxtImg src="flowers-pattern/large.webp" class="hidden lg:block w-full h-full object-cover" />
      <NuxtImg src="flowers-pattern/medium.webp" class="lg:hidden w-full h-full object-cover" />
    </div>
  </div>
</template>
