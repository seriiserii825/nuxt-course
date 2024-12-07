export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss", "~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
});

