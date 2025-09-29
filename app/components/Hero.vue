<script setup lang="ts">
import { useElementSize, useWindowSize } from "@vueuse/core"

const heroContainerRef = useTemplateRef("heroContainerRef")
const { height: heroContainerHeight } = useElementSize(heroContainerRef)
const { height: windowHeight } = useWindowSize()

const diffHeightsFactor = computed(() => windowHeight.value / heroContainerHeight.value)
</script>

<template>
  <div ref="heroContainerRef">
    <!-- Desktop -->
    <div class="hidden xl:flex flex-col gap-5 h-[90svh] min-h-[70rem] max-h-[80rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full border-2 border-primary/50 border-dashed p-2">
                <div
                  class="relative bg-[url('/hero-gradient-1.webp')] fade-animated bg-cover w-full h-full flex flex-col items-start justify-center p-8 overflow-hidden after:invert dark:after:invert-0 cover-noise cover-noise-semi-lighter"
                >
                  <div class="my-auto text-[4.5rem] leading-[5.5rem] translate-y-[-10%]">
                    <h1 class="animate-hero-main-text-appear font-serif">
                      Новые формы,<br> новый звук,<br><span
                        class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear! text-nowrap"
                      >новый стиль.</span><span class="leading-[6.3rem]">‎ </span>
                    </h1>
                  </div>

                  <!-- <p>
                  Инструмент для тех, кто не боится <span class="inline-block leading-[0.8rem] p-1 bg-secondary text-inverted">выделиться</span>
                </p> -->
                  <HeroTypingText />
                </div>
              </div>
            </div>
            <div class="bg-primary/10 w-full h-full max-h-[20rem]">
              <HeroProductVideoContainer
                video-url="hero-product-showcase/2-large.mp4"
                poster-url="hero-product-showcase/2-large.jpg"
                class="contrast-[105%] saturate-[80%]"
                :video-aspect-ratio="2.25"
                default-size-by="width"
                appearence="darker"
                :scroll-fade-multiplier="diffHeightsFactor"
              />
            </div>
          </div>
        </div>
        <div class="bg-primary/10 w-[56%] h-full">
          <HeroProductVideoContainer
            class="contrast-[103%] dark:contrast-[108%] brightness-[150%] dark:brightness-[120%]"
            video-url="hero-product-showcase/1-large.mp4"
            poster-url="hero-product-showcase/1-large.jpg"
            :video-aspect-ratio="0.6"
            default-size-by="height"
            :scroll-fade-multiplier="diffHeightsFactor"
          />
        </div>
      </div>

      <div class="w-full h-full max-h-[14rem] flex gap-5">
        <div class="bg-primary/10 h-full w-full">
          <HeroProductVideoContainer
            class="brightness-180 dark:brightness-130 contrast-[110%]"
            video-url="hero-product-showcase/3-large.mp4"
            poster-url="hero-product-showcase/3-large.jpg"
            :video-aspect-ratio="4.64"
            default-size-by="width"
            :scroll-fade-multiplier="diffHeightsFactor"
          />
        </div>
        <div class="h-full aspect-square outline-2 outline-primary/50 p-2 outline-dashed">
          <HeroProductVideoContainer
            video-url="hero-product-showcase/4-small.mp4"
            poster-url="hero-product-showcase/4-small.jpg"
            :video-aspect-ratio="1"
            class="contrast-[105%]"
            default-size-by="height"
            :scroll-fade-multiplier="diffHeightsFactor"
            appearence="darker"
          />
        </div>
      </div>
    </div>

    <!-- Tablet -->
    <div class="hidden md:flex xl:hidden flex-col gap-5 h-[88svh] min-h-[45rem] lg:min-h-[70rem] max-h-[70rem] lg:max-h-[80rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center outline-dashed outline-2 outline-primary/50 p-2">
                <div
                  class="relative bg-[url('/hero-gradient-1.webp')] fade-animated bg-cover w-full h-full flex flex-col items-start justify-center p-8 overflow-hidden after:invert dark:after:invert-0 cover-noise cover-noise-semi-lighter"
                >
                  <div class="my-auto translate-y-[-10%]">
                    <h1 class="text-[4rem] leading-[5rem] lg:text-[4rem] lg:leading-[5rem] animate-hero-main-text-appear font-serif">
                      Новые формы,<br> новый звук,<br><span
                        class="inline-block bg-black text-amber-50 dark:bg-amber-50 dark:text-black leading-none animate-hero-selected-text-appear text-nowrap"
                      >новый стиль.</span><span class="leading-[6.6rem] lg:leading-[7rem]">‎ </span>
                    </h1>
                  </div>

                  <HeroTypingText />
                </div>
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
                  class="contrast-[105%] saturate-[80%]"
                  :scroll-fade-multiplier="diffHeightsFactor"
                />
              </div>
              <div class="bg-primary/10 w-[50%] h-full">
                <HeroProductVideoContainer
                  class="contrast-[103%] dark:contrast-[108%] brightness-[150%] dark:brightness-[120%]"
                  video-url="hero-product-showcase/1-small.mp4"
                  poster-url="hero-product-showcase/1-small.jpg"
                  :video-aspect-ratio="0.84"
                  default-size-by="height"
                  :scroll-fade-multiplier="diffHeightsFactor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-[16rem] flex gap-5">
        <div class="bg-primary/10 h-full w-full">
          <HeroProductVideoContainer
            class="brightness-180 dark:brightness-130 contrast-[110%]"
            video-url="hero-product-showcase/3-large.mp4"
            poster-url="hero-product-showcase/3-large.jpg"
            :video-aspect-ratio="4.64"
            default-size-by="width"
            :scroll-fade-multiplier="diffHeightsFactor"
          />
        </div>
        <div class="hidden lg:block bg-primary/10 h-full aspect-square">
          <HeroProductVideoContainer
            video-url="hero-product-showcase/4-small.mp4"
            poster-url="hero-product-showcase/4-small.jpg"
            :video-aspect-ratio="1"
            default-size-by="height"
            :scroll-fade-multiplier="diffHeightsFactor"
            appearence="darker"
          />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex md:hidden flex-col gap-5 h-[39rem] w-full">
      <div class="flex gap-5 h-full">
        <div class="w-full h-full">
          <div class="flex flex-col gap-5 h-full">
            <div class="h-full w-full">
              <div class="w-full h-full flex flex-col items-start justify-center">
                <div class="my-auto">
                  <h1 class="text-[2.8rem] leading-[3.5rem] translate-y-[-10%] animate-hero-main-text-appear font-serif">
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
                  :scroll-fade-multiplier="diffHeightsFactor"
                />
              </div>
              <div class="bg-primary/10 w-[56%] h-full">
                <HeroProductVideoContainer
                  video-url="hero-product-showcase/4-small.mp4"
                  poster-url="hero-product-showcase/4-small.jpg"
                  :video-aspect-ratio="1"
                  default-size-by="width"
                  :scroll-fade-multiplier="diffHeightsFactor"
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
            class="brightness-130 dark:brightness-110 contrast-[90%] dark:contrast-[100%]"
            :scroll-fade-multiplier="diffHeightsFactor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.hero-noise-light-theme::after {
  @apply cover-noise cover-noise-semi-lighter;
}

.dark .hero-noise-dark-theme::after {
  @apply cover-noise cover-noise-semi-darker;
}
</style>
