import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function lottiePlugin() {
  return {
    name: "lottie-plugin",
    resolveId(id) {
      console.log(id, "ARUN");
      if (id.endsWith(".lottie")) {
        // Replace .lottie with .json for resolving
        const jsonId = id.replace(/\.lottie$/, ".json");
        return jsonId;
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), lottiePlugin()],
  root: "frontend/src",
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Enable inline JavaScript in Less styles
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "lib",
        replacement: path.resolve(__dirname, "./frontend/src/lib"),
      },
      {
        find: "scenes",
        replacement: path.resolve(__dirname, "./frontend/src/scenes"),
      },
      {
        find: "@posthog/apps-common",
        replacement: path.resolve(
          __dirname,
          "./frontend/@posthog/apps-common/src/index"
        ),
      },
      {
        find: "@posthog/apps-common/",
        replacement: path.resolve(
          __dirname,
          "./frontend/@posthog/apps-common/src/"
        ),
      },

      {
        find: "@posthog/lemon-ui/",
        replacement: path.resolve(
          __dirname,
          "./frontend/@posthog/lemon-ui/src/"
        ),
      },
      {
        find: "@posthog/lemon-ui",
        replacement: path.resolve(
          __dirname,
          "./frontend/@posthog/lemon-ui/src"
        ),
      },
      { find: "storybook", replacement: "../.storybook" },
      { find: "~", replacement: path.resolve(__dirname, "./frontend/src") },
      { find: "public", replacement: path.resolve(__dirname, "./public") },
    ],
  },
});
