
"use client"

import type { SVGProps } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Instagram, Clock, ArrowUpRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M216 88a8 8 0 0 1-8 8 64.1 64.1 0 0 1-40-14.2V168a72 72 0 1 1-72-72 8 8 0 0 1 0 16 56 56 0 1 0 56 56V40a8 8 0 0 1 16 0 48.05 48.05 0 0 0 48 48 8 8 0 0 1 8 8Z" />
    </svg>
  )
}

export function Footer() {
  const { t, lang } = useTranslation()

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Ambulance Fayçal"
                  width={48}
                  height={48}
                  className="object-cover scale-110 invert"
                />
              </div>
              <div>
                <span className="text-xl font-bold uppercase tracking-tight block">{t.brand}</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{t.tagline}</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.about}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@ambulance.fayal?_r=1&_t=ZS-94E5sy5qAdz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ambulancefaycal?igsh=MXBlMzV5c2Vqd2ZuNg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              {t.nav.services}
              <div className="w-8 h-px bg-primary" />
            </h4>
            <ul className="space-y-3">
              {[
                t.footer.links.emergencyAmbulance,
                t.footer.links.medicalRepatriation,
                t.footer.links.funeralTransport,
                t.footer.links.icuTransfers,
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href="/#services" className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm">
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              {t.footer.quickLinks}
              <div className="w-8 h-px bg-primary" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: t.nav.about, href: "/about" },
                { name: t.nav.services, href: "/services" },
                { name: t.nav.contact, href: "/contact" },
                { name: t.footer.links.requestQuote, href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm">
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              {t.footer.contactInfo}
              <div className="w-8 h-px bg-primary" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-medium" dir="ltr">+213 780 268 005</p>
                  <p className="text-slate-300 text-sm font-medium" dir="ltr">+213 665 173 733</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 mt-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    24/7
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-slate-300 text-sm">contact@faycal-ambulance.dz</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-slate-300 text-sm">{lang === 'ar' ? "الجزائر العاصمة" : "Alger, Algérie"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <Clock className="h-3 w-3" />
            <span>{lang === 'ar' ? "خدمة على مدار الساعة" : "Service disponible 24h/24"}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
