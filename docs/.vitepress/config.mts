import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "golang",
    description: "This docs is made so that I can track my learnings in Go.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Learn", link: "/getting-started" },
        ],

        sidebar: [
            {
                text: "Introduction",
                collapsed: false,
                items: [
                    { text: "Getting Started", link: "/getting-started" },
                    { text: "Hello World", link: "/hello-world" },
                    { text: "Go Module", link: "/go-module" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/prabeshstha11" }],
    },
});
