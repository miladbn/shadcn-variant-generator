'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold inline-block">Shadcn Variant Generator</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <nav className="flex items-center">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 px-0 hover:bg-accent hover:text-accent-foreground rounded-md"
            >

              {""}
              <div className="flex h-9 w-9 items-center justify-center">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
