<template>
    <div class="relative w-full px-[1rem] md:px-[2rem] bg-amber-50 dark:bg-black transition-colors">
        <div class="max-w-[100rem] flex flex-col mx-auto">
            <div class="sticky top-0 z-50 w-full">
                <Header />
            </div>
            <div class="pb-[7rem] md:pb-[7rem] lg:pb-[12rem] pt-[1.2rem]">
                <slot />
            </div>
            <div class="bg-white w-full h-[7rem]">
                <!-- <Footer /> -->
            </div>
        </div>
    </div>
</template>