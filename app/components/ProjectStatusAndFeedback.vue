<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui"
import { UTextarea } from "#components"
import * as v from "valibot"

const feedbackFormSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  message: v.string(),
})

const state = reactive({
  email: undefined,
  message: undefined,
})

function validate(state: any): FormError[] {
  const errors = []
  if (!state.email && !state.message) {
    if (!state.email)
      errors.push({ name: "email", message: "Нам нужен ваш email для связи" })
    if (!state.message) {
      errors.push({ name: "message", message: "Опишите вашу идею или пожелание" })
    }
  }
  else {
    const parsingOutput = v.safeParse(feedbackFormSchema, state)

    parsingOutput.issues?.forEach((issue) => {
      issue.path?.forEach((pathItem) => {
        switch (pathItem.key) {
          case "email":
            errors.push({ name: "email", message: "Введите корректный email" })
            break
          case "message":
            errors.push({ name: "message", message: "Сообщение содержит данные, которые не получается обработать" })
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
  <UModal v-model:open="feedbackSuccessModalOpen" variant="subtle">
    <template #content>
      <div class="flex flex-col gap-5 items-end p-8">
        <div class="flex gap-[1rem] items-center w-full">
          <Icon name="material-symbols:check-circle-outline" class="text-[3rem]" />
          <h2 class="w-full text-2xl">
            Спасибо!
          </h2>
        </div>

        <p class="w-full">
          Мы рассмотрим ваше сообщение и, если необходимо, свяжемся с вами
        </p>
        <UButton variant="solid" class="w-fit px-5 py-3 rounded-full" @click="feedbackSuccessModalOpen = false">
          Ок
        </UButton>
      </div>
    </template>
  </UModal>

  <div class="bg-primary w-full px-[1.2rem] py-[3rem] md:px-[2rem] md:py-[4rem] lg:px-[5rem] flex flex-col gap-16 lg:flex-row md:gap-20 lg:justify-between text-inverted">
    <div class="w-full lg:w-[37%] space-y-[1.5rem] md:space-y-[3rem] lg:space-y-[8rem]">
      <div class="w-full space-y-[1.5rem] md:space-y-[0.5rem] lg:space-y-[2rem]">
        <h2 class="text-2xl">
          Статус проекта
        </h2>
        <h1 class="hidden md:block md:text-[3rem] xl:text-[4rem] text-purple-400 dark:text-purple-800">
          В разработке
        </h1>

        <div class="md:hidden bg-purple-400 dark:bg-purple-800 rounded-full px-4 py-3">
          <h2 class="text-base text-default">
            В разработке
          </h2>
        </div>
      </div>

      <p class="w-full text-sm md:text-base md:w-[80%] lg:w-full">
        Проект находится в стадии разработки и пока не готов к полноценному выходу на рынок. Вы можете связаться с нами и оставить свои пожелания.
      </p>
    </div>

    <div class="w-full lg:w-[37%] space-y-[3rem]">
      <div class="space-y-[1rem]">
        <h2 class="text-2xl">
          Обратная связь
        </h2>
        <p class="text-sm md:text-base w-full md:w-[80%] lg:w-full">
          Свяжитесь с нами если хотите уточнить что либо, касательно наших продуктов. Мы постараемся ответить как можно скорее
        </p>
      </div>

      <!-- Feedback form -->
      <UForm :validate="validate" :state="state" class="flex flex-col gap-3" @submit="onSubmit">
        <UFormField :ui="{ label: ['text-inverted text-base font-normal'] }" name="email">
          <UInput v-model="state.email" class="w-full" placeholder="Ваш email" :ui="{ base: 'min-h-13 rounded-none' }" />
        </UFormField>

        <UFormField :ui="{ label: ['text-inverted text-base font-normal'] }" name="message">
          <UTextarea v-model="state.message" class="w-full" placeholder="Сообщение" :ui="{ base: 'min-h-32 rounded-none' }" />
        </UFormField>

        <UButton
          class="h-[3.6rem] w-fit px-6 mt-3 text-inverted rounded-full bg-transparent border border-bg hover:border-3 hover:bg-transparent transition-all duration-100"
          type="submit"
          trailing-icon="material-symbols:send-outline"
        >
          Отправить
        </UButton>
      </UForm>
    </div>
  </div>
</template>
