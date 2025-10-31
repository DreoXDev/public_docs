import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "DreoX's Docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          // Sfondo della pagina (Light Mode)
          light: "#ffffff", // Sfondo principale: Bianco puro
          lightgray: "#f0f0f0", // Sfondo Sidebar/Box: Grigio molto chiaro
          gray: "#c2c2c2", // Linee/Bordi: Grigio medio
          // Testo (Light Mode)
          darkgray: "#3d3d3d", // Testo Headers/Accenti: Grigio scuro
          dark: "#1a1a1a", // Testo principale: Nero quasi puro
          // Accenti Rossi (Light Mode)
          secondary: "#dc2626", // Link/Accenti: Rosso Intenso (simil-Shadcn Red 600)
          tertiary: "#f87171", // Link secondari/Hover: Rosso Chiaro (simil-Shadcn Red 400)
          highlight: "rgba(220, 38, 38, 0.1)", // Sfondo di evidenziazione leggero
          textHighlight: "#fef08a", // Evidenziazione testo (giallo chiaro, Hex con trasparenza per i blocchi di testo)
        },
        darkMode: {
          // Sfondo della pagina (Dark Mode)
          light: "#0a0a0a", // Sfondo principale: Quasi nero (molto scuro)
          lightgray: "#1c1c1c", // Sfondo Sidebar/Box: Grigio scuro
          gray: "#404040", // Linee/Bordi: Grigio medio
          // Testo (Dark Mode)
          darkgray: "#e5e5e5", // Testo Headers/Accenti: Grigio molto chiaro
          dark: "#fafafa", // Testo principale: Bianco quasi puro
          // Accenti Rossi (Dark Mode)
          secondary: "#f87171", // Link/Accenti: Rosso Chiaro (visibilità su sfondo scuro)
          tertiary: "#ef4444", // Link secondari/Hover: Rosso leggermente più scuro
          highlight: "rgba(248, 113, 113, 0.15)", // Sfondo di evidenziazione (Rosso chiaro con trasparenza)
          textHighlight: "#b3aa0288", // Evidenziazione testo (mantenuto)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
