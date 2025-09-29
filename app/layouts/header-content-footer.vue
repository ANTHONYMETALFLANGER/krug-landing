<template>
  <div class="relative w-full bg-default transition-colors">
    <div class="sticky top-0 z-50 w-full">
      <Header />
    </div>

    <div class="max-w-[100rem] flex flex-col mx-auto px-[1rem] md:px-[2rem]">
      <div class="pb-[5rem] md:pb-[6rem] lg:pb-[7rem] pt-[1.2rem]">
        <slot />
      </div>

      <div class="w-full">
        <Footer />
      </div>
    </div>
  </div>
</template>
