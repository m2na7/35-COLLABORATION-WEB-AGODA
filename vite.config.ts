import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "slick-carousel/slick/slick.css": "slick-carousel/slick/slick.css",
      "slick-carousel/slick/slick-theme.css":
        "slick-carousel/slick/slick-theme.css",
    },
  },
});
