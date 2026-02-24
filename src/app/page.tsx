
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
      href: "/services",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: t.services.funeral.title,
      desc: t.services.funeral.desc,
      icon: Truck,
      href: "/services",
      color: "text-slate-400",
      bg: "bg-slate-400/10"
    },
    {
      title: t.services.medical.title,
      desc: t.services.medical.desc,
      icon: ShieldCheck,
      href: "/services",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <Image
            src={heroImg?.imageUrl || "https://picsum.photos/seed/ambulance-road-1/1920/1080"}
            alt={heroImg?.description || "Ambulance sur la route"}
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="ambulance road"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-full transition-all hover:scale-105 border-none">
                  <a href="tel:+213123456789">{t.hero.callNow}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-7 rounded-full backdrop-blur-sm">
                  <Link href="/services">{t.hero.ourServices}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Brief Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-tight">{t.services.title}</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-secondary max-w-2xl mx-auto text-lg">
                {t.services.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="bg-card border border-border/50 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all group overflow-hidden rounded-3xl">
                  <CardContent className="p-10">
                    <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-secondary text-base leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Link href={service.href} className="inline-flex items-center text-primary font-bold text-sm hover:gap-3 transition-all uppercase tracking-wider">
                      {t.services.learnMore} <ChevronRight className={`h-5 w-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-border/50">
              <Image
                src={medicalTeamImg?.imageUrl || "https://picsum.photos/seed/medteam/800/600"}
                alt="Équipe Médicale"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-black text-sm uppercase tracking-[0.3em] mb-6 block">{t.whyUs.badge}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight">{t.whyUs.title}</h2>
              
              <div className="space-y-10">
                {t.whyUs.items.map((item, idx) => {
                  const Icon = idx === 0 ? Clock : idx === 1 ? ShieldCheck : HeartPulse;
                  return (
                    <div key={idx} className="flex gap-8 group">
                      <div className="shrink-0 w-14 h-14 bg-primary/10 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                        <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-secondary text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-primary/10 border-y border-border/50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">{t.cta.title}</h2>
            <p className="text-secondary text-xl mb-12 max-w-3xl mx-auto font-medium">
              {t.cta.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-white rounded-full text-2xl px-12 py-10 shadow-2xl transition-all hover:scale-105 border-none">
                <a href="tel:+213123456789" className="flex items-center gap-4">
                  <Phone className="h-8 w-8 animate-bounce" />
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
