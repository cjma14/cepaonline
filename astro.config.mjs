import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import node from "@astrojs/node";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://cepaonline.cl",
  image: {
    domains: ["images.unsplash.com"]
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "es",
      // All urls that don't contain `fr` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        es: "es",
        // The `defaultLocale` value must present in `locales` keys
        en: "en"
      }
    }
  }), compressor({
    gzip: false,
    brotli: true
  }), db()],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: node({
    mode: "standalone"
  })
});