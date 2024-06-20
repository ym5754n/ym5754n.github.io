"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/read"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/read")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Read
        </Link>
        <Link
          href="/work"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/work")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Work
        </Link>
      </nav>
    </div>
  )
}