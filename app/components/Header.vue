<template>
    <div class="bg-cyan-500/10 w-full h-[8.2rem] transition-all flex items-center justify-between"
        :class="{ 'h-[5.2rem]!': y > scrollBreakpoint }">
        <div class="size-[3.6rem] bg-amber-500">Logos</div>

        <div class="flex items-center w-full max-w-[64rem]">
            <nav class="grid grid-cols-4 w-full">
                <a href="#">Модель А</a>
                <a href="#">Звукосниматели</a>
                <a href="#">Кастомизация</a>
                <a href="#">О компании</a>
            </nav>
            <ColorModeButton/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const scrollBreakpoint = 10
const isScrolled = computed(() => y.value > scrollBreakpoint)


watch(y, (prev, next) => {
    const direction = prev > next // true - down, false - up
    console.log("direction", direction, prev, next)
    if (!direction) {
        if (y.value < scrollBreakpoint) {
            y.value = 0
        }
    }
})
</script>