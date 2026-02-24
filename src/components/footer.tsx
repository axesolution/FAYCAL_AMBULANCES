
"use client"

import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary p-2 rounded-lg">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter">{t.brand}</span>
          </div>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            {t.footer.about}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="p-3 bg-white/5 rounded-2xl text-slate-400 hover:text-white hover:bg-primary transition-all">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm">{t.nav.services}</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><Link href="/#services" className="hover:text-primary transition-colors">{t.footer.links.emergencyAmbulance}</Link></li>
            <li><Link href="/#services" className="hover:text-primary transition-colors">{t.footer.links.medicalRepatriation}</Link></li>
            <li><Link href="/#services" className="hover:text-primary transition-colors">{t.footer.links.funeralTransport}</Link></li>
            <li><Link href="/#services" className="hover:text-primary transition-colors">{t.footer.links.icuTransfers}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li><Link href="/about" className="hover:text-primary transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">{t.footer.links.requestQuote}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-sm">{t.footer.contactInfo}</h4>
          <ul className="space-y-6 font-medium">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <span className="text-slate-300">+213 123 456 789<br/><span className="text-xs font-bold text-red-500 uppercase tracking-widest">Available 24/7</span></span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <span className="text-slate-300">contact@faycal-ambulance.dz</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <span className="text-slate-300">District of Algiers,<br/>Algeria</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-white/5 pt-12 text-center text-slate-500 text-sm font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} {t.brand}. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
