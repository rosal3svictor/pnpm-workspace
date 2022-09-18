import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    // Vite plugin to help us generate the type definitions for our module.
    dts({
      insertTypesEntry: true,
    }),
  ],
  root: "./",
  publicDir: "src",
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "frontend-module",
      fileName: (format) => `frontend-module.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "styled-components"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
