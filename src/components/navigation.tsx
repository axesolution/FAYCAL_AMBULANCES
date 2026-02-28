
"use client"

import Link from "next/link"
import { Menu, X, Globe, Phone } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
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
  const [mounted, setMounted] = useState(false)
  const { lang, setLang, t } = useTranslation()
  const brandRef = useRef<HTMLSpanElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const [taglineMaxWidth, setTaglineMaxWidth] = useState<number>()
  const [taglineFontSize, setTaglineFontSize] = useState<number>()
  const pathname = usePathname()

  // Mark as mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    // Check initial scroll position
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const brandEl = brandRef.current
    const tagEl = taglineRef.current
    if (!brandEl || !tagEl) return
    const baseSize = 12
    const measure = () => {
      const brandW = Math.ceil(brandEl.getBoundingClientRect().width)
      setTaglineMaxWidth(brandW)
      tagEl.style.fontSize = `${baseSize}px`
      const tagScrollW = tagEl.scrollWidth
      if (tagScrollW > brandW) {
        const ratio = brandW / tagScrollW
        const newSize = Math.max(10, Math.floor(baseSize * ratio * 0.98))
        setTaglineFontSize(newSize)
        tagEl.style.fontSize = `${newSize}px`
      } else {
        setTaglineFontSize(baseSize)
        tagEl.style.fontSize = `${baseSize}px`
      }
    }
    const ro = new ResizeObserver(() => measure())
    ro.observe(brandEl)
    ro.observe(tagEl)
    measure()
    return () => ro.disconnect()
  }, [lang])

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold uppercase text-white">FAYCAL</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md py-2"
          : pathname === "/"
            ? "bg-transparent py-3"
            : "bg-slate-900/80 backdrop-blur-sm py-3"
      )} style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all",
                scrolled ? "bg-primary/10" : "bg-white/10"
              )}>
                <Image
                  src="/logo.png"
                  alt="Ambulance Fayçal"
                  width={48}
                  height={48}
                  className={cn(
                    "object-cover scale-110 transition-all",
                    scrolled ? "brightness-100" : "invert brightness-0"
                  )}
                />
              </div>
              <div className={cn("flex flex-col", lang === 'ar' ? "gap-[3px]" : "")}>
                <span className={cn(
                  "text-[clamp(1rem,1.7vw,1.375rem)] font-bold uppercase leading-none whitespace-nowrap transition-colors",
                  scrolled ? "text-slate-900" : "text-white"
                )} ref={brandRef}>{t.brand}</span>
                <span className={cn(
                  "hidden sm:block uppercase tracking-[0.2em] font-medium whitespace-nowrap transition-colors",
                  scrolled ? "text-primary" : "text-white/70"
                )} ref={taglineRef} style={{ maxWidth: taglineMaxWidth ? `${taglineMaxWidth}px` : undefined, fontSize: taglineFontSize ? `${taglineFontSize}px` : undefined }}>{t.tagline}</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-all rounded-lg",
                    scrolled ? "text-slate-700 hover:text-primary hover:bg-slate-100" : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className={cn("h-6 w-px mx-2", scrolled ? "bg-slate-200" : "bg-white/20")} />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={lang === 'ar' ? "اللغة" : "Langue"} className={cn(
                    "rounded-lg",
                    scrolled ? "text-slate-600 hover:text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
                  )}>
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl border-none shadow-2xl">
                  <DropdownMenuItem onClick={() => setLang('fr')} className={cn("rounded-lg m-1 cursor-pointer", lang === 'fr' ? 'bg-primary text-white' : '')}>
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('ar')} className={cn("rounded-lg m-1 cursor-pointer font-arabic", lang === 'ar' ? 'bg-primary text-white' : '')}>
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button asChild size="sm" className={cn(
                "rounded-full px-5 font-semibold hidden lg:flex items-center gap-2 ml-2",
                scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-primary hover:bg-white/90"
              )}>
                <a href="tel:+213780268005">
                  <Phone className="h-4 w-4" />
                  {lang === 'ar' ? "اتصل" : "Appeler"}
                </a>
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={lang === 'ar' ? "اللغة" : "Langue"}
                    className={cn("rounded-lg", scrolled ? "text-slate-900" : "text-white")}
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl">
                  <DropdownMenuItem onClick={() => setLang('fr')}>Français</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLang('ar')} className="font-arabic">العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? (lang === 'ar' ? "إغلاق القائمة" : "Fermer le menu") : (lang === 'ar' ? "فتح القائمة" : "Ouvrir le menu")}
                className={cn("h-10 w-10 flex items-center justify-center rounded-xl transition-colors", scrolled ? "text-slate-900" : "text-white")}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center h-12 px-4 text-base font-semibold text-slate-900 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-semibold">
                  <a href="tel:+213780268005" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    +213 780 268 005
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl h-12 font-semibold">
                  <a href="tel:+213665173733" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    +213 665 173 733
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className={cn(
        pathname === "/"
          ? (scrolled ? "h-16 md:h-20" : "h-0")
          : "h-16 md:h-20"
      )} />
    </>
  )
}
