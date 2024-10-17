import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import electron from "vite-plugin-electron/simple";

export default defineConfig({
  plugins: [
    svelte(),
    electron({
      main: {
        entry: "electron/main.ts",
      }, // Path to Electron's main process file,
      preload: {
        // Shortcut of `build.rollupOptions.input`
        input: "electron/preload.ts",
      },
    }),
  ],
});
