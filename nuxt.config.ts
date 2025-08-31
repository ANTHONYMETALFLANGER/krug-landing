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

  icon: {
    customCollections: [
      // {
      //   prefix: "brand-games",
      //   dir: "./layers/shared-ui/app/assets/brand-games",
      // },
    ],
    clientBundle: {
      includeCustomCollections: true,
    },
    serverBundle: {
      collections: ["material-symbols", "material-symbols-light", "ic"],
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
    },
  },

})
