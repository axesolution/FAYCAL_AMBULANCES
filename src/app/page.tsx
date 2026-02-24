"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, Truck, Clock, ShieldCheck, ChevronRight, Phone } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "@/components/language-provider"

export default function Home() {
  const { t, lang } = useTranslation()
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-ambulance")
  const medicalTeamImg = PlaceHolderImages.find(i => i.id === "medical-team")
  
  const services = [
    {
      title: t.services.emergency.title,
      desc: t.services.emergency.desc,
      icon: HeartPulse,
      href: "/services"
    },
    {
      title: t.services.funeral.title,
      desc: t.services.funeral.desc,
      icon: Truck,
      href: "/services"
    },
    {
      title: t.services.medical.title,
      desc: t.services.medical.desc,
      icon: ShieldCheck,
      href: "/services"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <Image
            src={heroImg?.imageUrl || "https://picsum.photos/seed/ambulance1/1920/1080"}
            alt={heroImg?.description || "Ambulance"}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-7 rounded-full">
                  <a href="tel:+213123456789">{t.hero.callNow}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-white hover:bg-white/10 text-lg px-8 py-7 rounded-full">
                  <Link href="/services">{t.hero.ourServices}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Brief Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">{t.services.title}</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-secondary max-w-2xl mx-auto">
                {t.services.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href={service.href} className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                      {t.services.learnMore} <ChevronRight className={`h-4 w-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={medicalTeamImg?.imageUrl || "https://picsum.photos/seed/medteam/800/600"}
                alt="Medical Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">{t.whyUs.badge}</span>
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">{t.whyUs.title}</h2>
              
              <div className="space-y-8">
                {t.whyUs.items.map((item, idx) => {
                  const Icon = idx === 0 ? Clock : idx === 1 ? ShieldCheck : HeartPulse;
                  return (
                    <div key={idx} className="flex gap-6">
                      <div className="shrink-0 w-12 h-12 bg-primary flex items-center justify-center rounded-xl">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
            <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
              {t.cta.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" variant="destructive" className="rounded-full text-xl px-10 py-8 shadow-xl">
                <a href="tel:+213123456789" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  {t.cta.button}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
