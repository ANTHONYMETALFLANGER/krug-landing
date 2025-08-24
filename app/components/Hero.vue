<template>
  <div>
    <!-- Desktop -->
    <div class="hidden xl:flex flex-col gap-5 h-[76rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto text-[6rem] leading-[7.8rem] translate-y-[-10%]">
                  <h1 class="animate-hero-main-text-appear">
                    Новые формы,<br> новый звук,<br><span
                      class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear text-nowrap"
                    >новый стиль.</span><span class="leading-[10rem]">‎ </span>
                  </h1>
                </div>

                <p>Инструмент для тех, кто не боится <span class="text-secondary">выделиться</span></p>
              </div>
            </div>
            <div class="bg-primary/20 w-full h-full max-h-[20rem]">
              render
            </div>
          </div>
        </div>
        <div class="bg-primary/20 w-[56%] h-full">
          render4
        </div>
      </div>

      <div class="w-full h-full max-h-[14rem] flex gap-5">
        <div class="bg-primary/20 h-full w-full">
          render
        </div>
        <div class="bg-primary/20 h-full aspect-square">
          render
        </div>
      </div>
    </div>

    <!-- Tablet -->
    <div class="hidden md:flex xl:hidden flex-col gap-5 h-[64rem] lg:h-[76rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto lg:translate-y-[-10%]">
                  <h1 class="text-[4rem] leading-[5rem] lg:text-[6rem] lg:leading-[7.8rem] animate-hero-main-text-appear">
                    Новые формы,<br> новый звук,<br><span
                      class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear text-nowrap"
                    >новый стиль.</span><span class="leading-[6.6rem] lg:leading-[10rem]">‎ </span>
                  </h1>
                </div>

                <p>Инструмент для тех, кто не боится <span class="text-secondary">выделиться</span></p>
              </div>
            </div>
            <div class="w-full h-full max-h-[20rem] flex gap-5">
              <div class="bg-primary/20 w-full h-full">
                render1
              </div>
              <div class="bg-primary/20 w-[50%] h-full">
                render4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-[16rem] flex gap-5">
        <div class="bg-primary/20 h-full w-full">
          render2
        </div>
        <div class="hidden lg:block bg-primary/20 h-full aspect-square">
          render3
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex md:hidden flex-col gap-5 h-[42rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto">
                  <h1 class="text-[2.8rem] leading-[3.5rem] animate-hero-main-text-appear">
                    Новые формы,<br> новый звук,<br><span
                      class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear text-nowrap"
                    >новый стиль.</span><span class="leading-[4.2rem]">‎ </span>
                  </h1>
                </div>

                <p class="text-sm">
                  Инструмент для тех, кто не боится <span class="text-secondary">выделиться</span>
                </p>
              </div>
            </div>
            <div class="w-full h-full max-h-[11rem] flex gap-5">
              <div class="bg-primary/20 w-full h-full">
                render1
              </div>
              <div class="bg-primary/20 w-[56%] h-full">
                render4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-full max-h-[8.2rem] flex gap-5">
        <div class="bg-primary/20 h-full w-full">
          render2
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
