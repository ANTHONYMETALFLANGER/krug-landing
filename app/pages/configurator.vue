<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui"
import * as v from "valibot"

definePageMeta({
  layout: "header-content-footer",
})

const emailFormSchema = v.object({
  email: v.pipe(v.string(), v.email()),
})

const state = reactive({
  email: undefined,
})

function validate(state: any): FormError[] {
  const errors = []
  if (!state.email) {
    if (!state.email)
      errors.push({ name: "email", message: "Введите корректный email" })
  }
  else {
    const parsingOutput = v.safeParse(emailFormSchema, state)

    parsingOutput.issues?.forEach((issue) => {
      issue.path?.forEach((pathItem) => {
        switch (pathItem.key) {
          case "email":
            errors.push({ name: "email", message: "Введите корректный email" })
            break
        }
      })
    })
  }

  return errors
}

const feedbackSuccessModalOpen = ref(false)
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  feedbackSuccessModalOpen.value = true
  console.log(event.data)
}
</script>

<template>
  <div class="space-y-10">
    <PageTitleSection title="Конфигуратор" />

    <div class="w-full flex justify-center">
      <div class="max-w-xl flex flex-col md:items-center gap-5">
        <Icon name="mdi:cog" class="size-[4rem] md:size-[6rem] xl:size-[10rem] animate-spin" />
        <h2 class="text-2xl font-serif md:text-center">
          Конфигуратор в разработке
        </h2>
        <p class="text-sm md:text-base md:text-center">
          Он появится здесь когда мы начнем продажи. Подпишитесь на рассылку, чтобы быть в курсе.
        </p>

        <UForm :validate="validate" :validate-on="['input']" :state="state" class="max-w-[30rem] w-full flex flex-col items-center gap-3 mt-[5rem]" @submit="onSubmit">
          <UFormField :ui="{ label: ['text-inverted text-base font-normal'] }" name="email" class="w-full">
            <UInput v-model="state.email" class="w-full" placeholder="Ваш email" :ui="{ base: 'min-h-13 rounded-none' }" />
          </UFormField>

          <UButton
            class="h-[3.6rem] w-full px-6 mt-3 text-primary rounded-full bg-transparent border border-primary hover:outline-2 hover:bg-transparent transition-all duration-100"
            type="submit"
            trailing-icon="material-symbols:add-alert"
          >
            <p class="w-full">
              Уведомить о старте продаж
            </p>
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
