<script setup lang="ts">
</script>

<template>
  <LandingSectionLayout title="Галерея разработок" :trailing-link="{ href: '#', text: 'Больше новостей' }">
    <!-- Desktop -->
    <div class="hidden lg:flex w-full h-[43rem] gap-5">
      <div class="w-[45%] h-full flex flex-col gap-5">
        <div class="w-full h-[40%] bg-primary/20">
          s
        </div>

        <div class="w-full h-[60%] bg-primary/20">
          s
        </div>
      </div>

      <div class="w-[55%] h-full flex flex-col gap-5">
        <div class="w-full h-[70%] flex gap-5">
          <div class="w-[40%] h-full bg-primary/20">
            s
          </div>
          <div class="w-[60%] h-full flex flex-col gap-5">
            <div class="w-full h-[45%] bg-primary/20">
              s
            </div>
            <div class="w-full h-[55%] bg-primary/20">
              s
            </div>
          </div>
        </div>

        <div class="w-full h-[30%] bg-primary/20">
          s
        </div>
      </div>
    </div>

    <!-- Tablet -->
    <div class="hidden md:flex lg:hidden flex-col gap-5 h-[47rem] w-full">
      <div class="w-full h-1/3 flex gap-5">
        <div class="w-[65%] h-full bg-primary/20">
          s
        </div>

        <div class="w-[35%] h-full bg-primary/20">
          s
        </div>
      </div>

      <div class="w-full h-1/3 bg-primary/20">
        s
      </div>

      <div class="w-full h-1/3 flex gap-5">
        <div class="w-[45%] h-full bg-primary/20">
          s
        </div>

        <div class="w-[55%] h-full bg-primary/20">
          s
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="flex md:hidden flex-col gap-5 h-[40rem] w-full">
      <div class="w-full h-1/3 bg-primary/20">
        s
      </div>

      <div class="w-full h-1/3 flex gap-5">
        <div class="w-1/2 h-full bg-primary/20">
          s
        </div>

        <div class="w-1/2 h-full bg-primary/20">
          s
        </div>
      </div>

      <div class="w-full h-1/3 bg-primary/20">
        s
      </div>
    </div>
  </LandingSectionLayout>
</template>
