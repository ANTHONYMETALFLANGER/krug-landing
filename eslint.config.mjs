import antfu from "@antfu/eslint-config"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  antfu({
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: "double", // or 'double'
    },

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,
    rules: {
      "node/prefer-global/process": "off",
      "n/handle-callback-err": "off",
      "ts/ban-ts-comment": "off",
      "no-console": "off",
    },
  }),
)