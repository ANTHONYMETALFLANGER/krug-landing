<script setup lang="ts">

</script>

<template>
  <div>
    <!-- Desktop -->
    <div class="hidden xl:flex flex-col gap-5 h-[90svh] min-h-[70rem] max-h-[80rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto text-[5.5rem] leading-[7.2rem] translate-y-[-10%]">
                  <h1 class="animate-hero-main-text-appear font-serif">
                    Новые формы,<br> новый звук,<br><span
                      class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear! text-nowrap"
                    >новый стиль.</span><span class="leading-[9.5rem]">‎ </span>
                  </h1>
                </div>

                <!-- <p>
                  Инструмент для тех, кто не боится <span class="inline-block leading-[0.8rem] p-1 bg-secondary text-inverted">выделиться</span>
                </p> -->
                <HeroTypingText />
              </div>
            </div>
            <div class="bg-primary/10 w-full h-full max-h-[20rem]">
              <HeroProductVideoContainer
                video-url="hero-product-showcase/2-large.mp4"
                poster-url="hero-product-showcase/2-large.jpg"
                :video-aspect-ratio="2.25"
                default-size-by="width"
                appearence="darker"
              />
            </div>
          </div>
        </div>
        <div class="bg-primary/10 w-[56%] h-full">
          <HeroProductVideoContainer
            class="contrast-[95%]"
            video-url="hero-product-showcase/1-large.mp4"
            poster-url="hero-product-showcase/1-large.jpg"
            :video-aspect-ratio="0.6"
            default-size-by="height"
          />
        </div>
      </div>

      <div class="w-full h-full max-h-[14rem] flex gap-5">
        <div class="bg-primary/10 h-full w-full">
          <HeroProductVideoContainer
            class="brightness-110 contrast-[95%]"
            video-url="hero-product-showcase/3-large.mp4"
            poster-url="hero-product-showcase/3-large.jpg"
            :video-aspect-ratio="4.64"
            default-size-by="width"
          />
        </div>
        <div class="bg-primary/10 h-full aspect-square">
          <HeroProductVideoContainer
            video-url="hero-product-showcase/4-small.mp4"
            poster-url="hero-product-showcase/4-small.jpg"
            :video-aspect-ratio="1"
            default-size-by="height"
          />
        </div>
      </div>
    </div>

    <!-- Tablet -->
    <div class="hidden md:flex xl:hidden flex-col gap-5 h-[88svh] min-h-[60rem] lg:min-h-[70rem] max-h-[80rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto lg:translate-y-[-10%]">
                  <h1 class="text-[4rem] leading-[5rem] lg:text-[5.5rem] lg:leading-[6.5rem] animate-hero-main-text-appear">
                    Новые формы,<br> новый звук,<br><span
                      class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear text-nowrap"
                    >новый стиль.</span><span class="leading-[6.6rem] lg:leading-[9rem]">‎ </span>
                  </h1>
                </div>

                <HeroTypingText />
              </div>
            </div>
            <div class="w-full h-full max-h-[20rem] flex gap-5">
              <div class="bg-primary/10 w-full h-full">
                <HeroProductVideoContainer
                  video-url="hero-product-showcase/2-large.mp4"
                  poster-url="hero-product-showcase/2-large.jpg"
                  :video-aspect-ratio="2.25"
                  default-size-by="width"
                  appearence="darker"
                />
              </div>
              <div class="bg-primary/10 w-[50%] h-full">
                <HeroProductVideoContainer
                  class="brightness-125 contrast-[95%]"
                  video-url="hero-product-showcase/1-small.mp4"
                  poster-url="hero-product-showcase/1-small.jpg"
                  :video-aspect-ratio="0.84"
                  default-size-by="height"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-[16rem] flex gap-5">
        <div class="bg-primary/10 h-full w-full">
          <HeroProductVideoContainer
            class="brightness-110 contrast-[95%]"
            video-url="hero-product-showcase/3-large.mp4"
            poster-url="hero-product-showcase/3-large.jpg"
            :video-aspect-ratio="4.64"
            default-size-by="width"
          />
        </div>
        <div class="hidden lg:block bg-primary/10 h-full aspect-square">
          <HeroProductVideoContainer
            video-url="hero-product-showcase/4-small.mp4"
            poster-url="hero-product-showcase/4-small.jpg"
            :video-aspect-ratio="1"
            default-size-by="height"
            appearence="darker"
          />
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

                <HeroTypingText />
              </div>
            </div>
            <div class="w-full h-full max-h-[11rem] flex gap-5">
              <div class="bg-primary/10 w-full h-full">
                <HeroProductVideoContainer
                  video-url="hero-product-showcase/2-small.mp4"
                  poster-url="hero-product-showcase/2-small.jpg"
                  :video-aspect-ratio="1"
                  default-size-by="width"
                  appearence="darker"
                />
              </div>
              <div class="bg-primary/10 w-[56%] h-full">
                <HeroProductVideoContainer
                  video-url="hero-product-showcase/4-small.mp4"
                  poster-url="hero-product-showcase/4-small.jpg"
                  :video-aspect-ratio="1"
                  default-size-by="width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-full max-h-[8.2rem] flex gap-5">
        <div class="bg-primary/10 h-full w-full">
          <HeroProductVideoContainer
            video-url="hero-product-showcase/3-small.mp4"
            poster-url="hero-product-showcase/3-small.jpg"
            :video-aspect-ratio="2.35"
            default-size-by="width"
          />
        </div>
      </div>
    </div>
  </div>
</template>
