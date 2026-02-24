"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, Truck, Clock, ShieldCheck } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import heroLocal from "../../Hero_Section.jpg"
import whyUs from "../../Why_Us.jpg"

export default function Home() {
  const { t } = useTranslation()
  
  const services = [
    {
      title: t.services.emergency.title,
      desc: t.services.emergency.desc,
      icon: HeartPulse,
      href: "/#services",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: t.services.funeral.title,
      desc: t.services.funeral.desc,
      icon: Truck,
      href: "/#services",
      color: "text-slate-600",
      bg: "bg-slate-100"
    },
    {
      title: t.services.medical.title,
      desc: t.services.medical.desc,
      icon: ShieldCheck,
      href: "/#services",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden bg-black">
          <Image
            src={heroLocal}
            alt={"Ambulance sur l'autoroute"}
            fill
            className="object-cover object-center brightness-75"
            priority
            unoptimized
            data-ai-hint="ambulance highway"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-full md:max-w-3xl pt-24 md:pt-32">
              <div className="hidden sm:inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-[clamp(1.75rem,3.8vw,3rem)] font-bold text-white mb-6 leading-snug md:leading-tight uppercase tracking-normal sm:tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-white/90 mb-4 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-[clamp(0.95rem,1.4vw,1.125rem)] px-[clamp(1rem,2.2vw,2rem)] py-[clamp(0.9rem,2vw,1.4rem)] rounded-full shadow-xl">
                  <a href="tel:+213123456789">{t.hero.callNow}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Brief Section */}
        <section id="services" className="py-24 bg-slate-50 scroll-mt-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-extrabold text-slate-900 mb-4 uppercase tracking-tight">{t.services.title}</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Intervention 24/7 à Alger: urgences médicales, transferts inter‑hospitaliers et transport funéraire, avec réactivité et respect des patients et des familles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="bg-white border-none shadow-sm hover:shadow-xl transition-all group overflow-hidden rounded-3xl">
                  <CardContent className="p-10">
                    <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-[clamp(1.125rem,2.2vw,1.5rem)] font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us / About */}
        <section id="about" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-slate-50">
              <Image
                src={whyUs}
                alt="Équipe Médicale"
                fill
                fetchPriority="high"
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover object-center"
                unoptimized
              />
            </div>
            <div>
              <span className="text-primary font-black text-sm uppercase tracking-[0.3em] mb-6 block">{t.whyUs.badge}</span>
              <h2 className="text-[clamp(2rem,3.6vw,3rem)] font-extrabold text-slate-900 mb-10 leading-tight">{t.whyUs.title}</h2>
              
              <div className="space-y-10">
                {t.whyUs.items.map((item, idx) => {
                  const Icon = idx === 0 ? Clock : idx === 1 ? ShieldCheck : HeartPulse;
                  return (
                    <div key={idx} className="flex gap-8 group">
                      <div className="shrink-0 w-14 h-14 bg-primary/5 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors">
                        <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section / Contact */}
        <section id="contact" className="py-24 relative bg-primary text-white overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_5s_infinite]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">{t.cta.title}</h2>
            <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto font-medium">
              {t.cta.desc}
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
