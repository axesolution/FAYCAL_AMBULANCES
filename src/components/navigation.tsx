"use client"

import Link from "next/link"
import { Shield, Phone, Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang, t } = useTranslation()

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Shield className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white uppercase">{t.brand}</span>
                <span className="text-[10px] text-secondary uppercase tracking-[0.2em]">{t.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-secondary hover:text-white">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang('fr')} className={lang === 'fr' ? 'bg-primary/20' : ''}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('ar')} className={lang === 'ar' ? 'bg-primary/20' : ''}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 font-semibold rounded-full px-6">
              <a href="tel:+213123456789" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.emergency}
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-secondary hover:text-white">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang('fr')}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('ar')}>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-secondary hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-secondary hover:text-white hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-4">
              <Button asChild variant="destructive" className="w-full font-bold">
                <a href="tel:+213123456789" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  {t.nav.emergency}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
