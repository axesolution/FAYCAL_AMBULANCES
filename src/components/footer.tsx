"use client"

import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-white uppercase tracking-tight">{t.brand}</span>
          </div>
          <p className="text-secondary text-sm leading-relaxed mb-6">
            {t.footer.about}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-muted rounded-full text-secondary hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="p-2 bg-muted rounded-full text-secondary hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t.nav.services}</h4>
          <ul className="space-y-4 text-sm text-secondary">
            <li><Link href="/services" className="hover:text-white transition-colors">Emergency Ambulance</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Medical Repatriation</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Funeral Transport</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">ICU Transfers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t.footer.quickLinks}</h4>
          <ul className="space-y-4 text-sm text-secondary">
            <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t.footer.contactInfo}</h4>
          <ul className="space-y-4 text-sm text-secondary">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+213 123 456 789<br/>24/7</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contact@faycal-ambulance.dz</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>District of Algiers,<br/>Algeria</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 border-t border-border pt-8 text-center text-secondary text-xs">
        <p>&copy; {new Date().getFullYear()} {t.brand}. {t.footer.rights}</p>
      </div>
    </footer>
  )
}
