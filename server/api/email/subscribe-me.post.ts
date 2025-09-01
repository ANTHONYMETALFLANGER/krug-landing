import { Resend } from "resend"
import * as v from "valibot"

export default defineEventHandler(async (event) => {
  const emailSchema = v.object({ email: v.pipe(v.string(), v.email()) })

  const query = await getValidatedQuery<v.InferOutput<typeof emailSchema>>(event, body => v.safeParse(emailSchema, body).success)

  const resend = new Resend(useRuntimeConfig().resend.apiKey)

  resend.contacts.create({
    email: query.email,
    unsubscribed: false,
    audienceId: useRuntimeConfig().resend.subscribersAudienceId,
  })
})
