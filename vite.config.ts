import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      pwaAssets: {
        image: "public/favicon.svg",
        preset: "minimal-2023",
        overrideManifestIcons: true,
      },
      manifest: {
        name: "Count PWA",
        short_name: "Count",
        description: "Count PWA",
        theme_color: "#863bff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,webmanifest}"],
      },
    }),
  ],
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
