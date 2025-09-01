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

const notifySuccessModalOpen = ref(false)
const notifyErrorModalOpen = ref(false)
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  try {
    await $fetch("/api/email/subscribe-me", {
      method: "POST",
      query: { email: event.data.email },
    })
    notifySuccessModalOpen.value = true
  }
  catch (error) {
    console.error(error)
    notifyErrorModalOpen.value = true
  }
}
</script>

<template>
  <UModal v-model:open="notifySuccessModalOpen" variant="subtle">
    <template #content>
      <div class="flex flex-col gap-5 items-end p-8">
        <div class="flex gap-[1rem] items-center w-full">
          <Icon name="material-symbols:check-circle-outline" class="text-[3rem]" />
          <h2 class="w-full text-2xl">
            Спасибо!
          </h2>
        </div>

        <p class="w-full">
          Мы уведомим вас как только конфигуратор будет доступен
        </p>
        <UButton variant="solid" class="w-fit px-5 py-3 rounded-full" @click="notifySuccessModalOpen = false">
          Ок
        </UButton>
      </div>
    </template>
  </UModal>

  <UModal v-model:open="notifyErrorModalOpen" variant="subtle">
    <template #content>
      <div class="flex flex-col gap-5 items-end p-8">
        <div class="flex gap-[1rem] items-center w-full">
          <Icon name="material-symbols:error-outline" class="text-[3rem] text-error" />
          <h2 class="w-full text-2xl">
            Ошибка!
          </h2>
        </div>

        <p class="w-full">
          Не получилось подключиться к серверу, попробуйте позже
        </p>
        <UButton variant="solid" class="w-fit px-5 py-3 rounded-full" @click="notifyErrorModalOpen = false">
          Ок
        </UButton>
      </div>
    </template>
  </UModal>

  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="space-y-10">
    <PageTitleSection title="Конфигуратор" />

    <div class="w-full flex justify-center">
      <div class="max-w-xl flex flex-col items-center gap-5">
        <Icon name="mdi:cog" class="size-[4rem] md:size-[6rem] xl:size-[10rem] animate-spin" />
        <h2 class="text-2xl font-serif text-center">
          Конфигуратор в разработке
        </h2>
        <p class="text-sm md:text-base text-center">
          Он появится здесь когда мы начнем продажи. Подпишитесь на рассылку, чтобы быть в курсе.
        </p>

        <UForm :validate="validate" :validate-on="['input']" :state="state" class="max-w-[30rem] w-full flex flex-col items-center gap-3 md:mt-[5rem]" @submit="onSubmit">
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
