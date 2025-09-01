import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    server: {
      allowedHosts: ["ff-dev-domain.ru.tuna.am"],
    },
    plugins: [
      tailwindcss(),
    ],
  },

  nitro: {
    static: true,
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-svgo",
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },

  icon: {
    clientBundle: {
      includeCustomCollections: true,
    },
    serverBundle: {
      collections: ["material-symbols"],
    },
  },

  fonts: {
    defaults: {
      preload: true,
    },
    providers: {
      google: false,
      googleicons: false,
    },
  },

  svgo: {
    autoImportPath: "./assets/svg/",
    defaultImport: "component",
  },

  runtimeConfig: {
    resend: {
      apiKey: process.env.ERESEND_API_KEY,
      subscribersAudienceId: process.env.RESEND_SUBSCRIBERS_AUDIENCE_ID,
      feedbackReciveEmail: process.env.RESEND_FEEDBACK_RECIVE_EMAIL,
    },
  },

})
