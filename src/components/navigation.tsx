
"use client"

import Link from "next/link"
import { Shield, Phone, Menu, X, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-primary p-2 rounded-xl shadow-lg transition-transform group-hover:rotate-12">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-2xl font-black tracking-tighter uppercase leading-none",
                  scrolled ? "text-slate-900" : "text-white md:text-white" 
                )}>{t.brand}</span>
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-bold",
                  scrolled ? "text-primary" : "text-white/80"
                )}>{t.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-colors",
                  scrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  "rounded-full",
                  scrolled ? "text-slate-600 hover:text-primary" : "text-white hover:bg-white/10"
                )}>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl border-none shadow-2xl">
                <DropdownMenuItem onClick={() => setLang('fr')} className={cn("rounded-xl m-1", lang === 'fr' ? 'bg-primary text-white' : '')}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('ar')} className={cn("rounded-xl m-1 font-arabic", lang === 'ar' ? 'bg-primary text-white' : '')}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-black rounded-full px-8 py-6 shadow-xl transition-all hover:scale-105 border-none">
              <a href="tel:+213123456789" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                {t.nav.emergency}
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className={scrolled ? "text-slate-900" : "text-white"}>
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl">
                <DropdownMenuItem onClick={() => setLang('fr')}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('ar')}>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("p-2 rounded-xl transition-colors", scrolled ? "text-slate-900" : "text-white")}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-8 rounded-2xl text-xl shadow-lg">
                <a href="tel:+213123456789" className="flex items-center justify-center gap-3">
                  <Phone className="h-6 w-6" />
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
