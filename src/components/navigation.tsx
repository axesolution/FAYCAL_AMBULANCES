
"use client"

import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
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
  const brandRef = useRef<HTMLSpanElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const [taglineMaxWidth, setTaglineMaxWidth] = useState<number>()
  const [taglineFontSize, setTaglineFontSize] = useState<number>()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const brandEl = brandRef.current
    const tagEl = taglineRef.current
    if (!brandEl || !tagEl) return
    const baseSize = 12 // px approx for 0.75rem
    const measure = () => {
      const brandW = Math.ceil(brandEl.getBoundingClientRect().width)
      setTaglineMaxWidth(brandW)
      // Reset to base size before measuring scroll width
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
    // also observe tagline content changes
    ro.observe(tagEl)
    // initial measure
    measure()
    return () => ro.disconnect()
  }, [lang])

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.contact, href: "/#contact" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-[clamp(3rem,4vw,3.5rem)] md:h-[clamp(3rem,4vw,3.5rem)] overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Ambulance Fayçal"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className={cn("flex flex-col", lang === 'ar' ? "gap-[3px]" : "")}>
                <span className={cn(
                  "text-[clamp(1.125rem,2vw,1.5rem)] font-black uppercase leading-none whitespace-nowrap",
                  scrolled ? "text-slate-900" : "text-white md:text-white" 
                )} ref={brandRef}>{t.brand}</span>
                <span className={cn(
                  "hidden sm:block uppercase tracking-[0.3em] font-bold whitespace-nowrap",
                  scrolled ? "text-primary" : "text-white/80"
                )} ref={taglineRef} style={{ maxWidth: taglineMaxWidth ? `${taglineMaxWidth}px` : undefined, fontSize: taglineFontSize ? `${taglineFontSize}px` : undefined }}>{t.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[clamp(0.8rem,1vw,0.95rem)] font-bold uppercase md:tracking-tight lg:tracking-wide transition-colors px-1.5 md:px-2 py-4 whitespace-nowrap",
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
                    className="block px-4 py-3 text-[clamp(1rem,2.2vw,1.125rem)] font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
