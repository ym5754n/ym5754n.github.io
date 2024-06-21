import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Read",
      href: "/read",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "GitHub",
      href: "https://github.com/ym5754n",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/ym5754n",
      external: true,
    },
  ],
}