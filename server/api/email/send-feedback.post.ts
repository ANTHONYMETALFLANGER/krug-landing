import { Resend } from "resend"
import * as v from "valibot"

export default defineEventHandler(async (event) => {
  const bodySchema = v.object({
    email: v.pipe(v.string(), v.email()),
    name: v.pipe(v.string(), v.maxLength(100)),
    message: v.pipe(v.string(), v.maxLength(1000)),
  })

  const body = await readValidatedBody<v.InferOutput<typeof bodySchema>>(event, body => v.safeParse(bodySchema, body).success)

  const resend = new Resend(useRuntimeConfig().resend.apiKey)

  await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [useRuntimeConfig().resend.feedbackReciveEmail],
    subject: "Feedback from krug-guitars.ru",
    html: `
<h1>New feedback from krug-guitars.ru (by ${body.email})</h1>
<p>User name: ${body.name}</p>
<p>User email: ${body.email}</p>
<p>Message: ${body.message}</p>
`,
  })
})
