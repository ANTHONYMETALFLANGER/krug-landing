<template>
  <div class="relative w-full px-[1rem] md:px-[2rem] bg-default transition-colors">
    <div class="max-w-[90rem] flex flex-col mx-auto">
      <div class="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <div class="pb-[5rem] md:pb-[6rem] lg:pb-[7rem] pt-[1.2rem]">
        <slot />
      </div>
      <div class="w-full">
        <Footer />
      </div>
    </div>
  </div>
</template>
