"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { HeartPulse, Truck, Clock, ShieldCheck, Award, Phone } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import heroLocal from "../../Hero_Section.jpg"
import whyUs from "../../Why_Us.jpg"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Home() {
  const { t, lang } = useTranslation()
  
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

  const hospitals = [
    {
      nameFr: "Hôpital de Aïn Taya",
      nameAr: "مستشفى عين طاية",
      area: "Aïn Taya",
      embed: "https://www.google.com/maps?q=H%C3%B4pital+Ain+Taya+Alger&output=embed"
    },
    {
      nameFr: "Hôpital de Rouiba",
      nameAr: "مستشفى رويبة",
      area: "Rouiba",
      embed: "https://www.google.com/maps?q=H%C3%B4pital+Rouiba+Alger&output=embed"
    },
    {
      nameFr: "CHU Nefissa Hamoud (Parnet)",
      nameAr: "مستشفى نفيسة حمود (بارني سابقاً)",
      area: "Hussein Dey",
      embed: "https://www.google.com/maps?q=CHU+Nefissa+Hamoud+Parnet+Alger&output=embed"
    },
    {
      nameFr: "Hôpital Militaire Aïn Naadja",
      nameAr: "المستشفى العسكري عين النعجة",
      area: "Djasr Kasentina",
      embed: "https://www.google.com/maps?q=H%C3%B4pital+Militaire+Ain+Naadja+Alger&output=embed"
    },
    {
      nameFr: "CHU Mustapha Pacha",
      nameAr: "مستشفى مصطفى باشا الجامعي",
      area: "Sidi M’Hamed",
      embed: "https://www.google.com/maps?q=CHU+Mustapha+Pacha+Alger&output=embed"
    },
    {
      nameFr: "CHU Lamine Debaghine (Maillot)",
      nameAr: "مستشفى لمين دباغين (مايو سابقاً)",
      area: "Bab El Oued",
      embed: "https://www.google.com/maps?q=CHU+Lamine+Debaghine+Bab+El+Oued&output=embed"
    },
    {
      nameFr: "CHU Issad Hassani",
      nameAr: "مستشفى اسعد حساني",
      area: "Beni Messous",
      embed: "https://www.google.com/maps?q=CHU+Issad+Hassani+Beni+Messous&output=embed"
    },
    {
      nameFr: "Clinique Clairval",
      nameAr: "عيادة كليرفال",
      area: "Dely Brahim",
      embed: "https://www.google.com/maps?q=Clinique+Clairval+Dely+Brahim&output=embed"
    },
    {
      nameFr: "Hôpital de Zéralda",
      nameAr: "مستشفى زرالدة",
      area: "Zéralda",
      embed: "https://www.google.com/maps?q=H%C3%B4pital+Zeralda+Alger&output=embed"
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-full md:max-w-3xl pt-24 md:pt-32">
              <div className="hidden sm:inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse"></span>
                {t.hero.badge}
              </div>
              <h1 className="text-[clamp(1.5rem,4.8vw,2.5rem)] font-bold text-white mb-6 leading-snug md:leading-tight md:uppercase tracking-normal sm:tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-[clamp(0.9rem,1.2vw,1.2rem)] text-white/90 mb-4 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto text-[clamp(0.95rem,1.4vw,1.125rem)] px-[clamp(1rem,2.2vw,2rem)] py-[clamp(0.9rem,2vw,1.4rem)] rounded-full shadow-xl">
                      {t.hero.callNow}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-2xl">
                    <DialogHeader>
                      <DialogTitle className={lang === 'ar' ? "font-arabic" : ""}>
                        {lang === 'ar' ? "اختر رقم الاتصال" : "Choisir un numéro"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-3">
                      <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
                        <a href="tel:+213780268005" dir="ltr">+213 780 268 005</a>
                      </Button>
                      <Button asChild size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-xl">
                        <a href="tel:+213665173733" dir="ltr">+213 665 173 733</a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Services Brief Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-28">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-slate-900 mb-4 md:uppercase tracking-tight">{t.services.title}</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                {t.services.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden rounded-3xl">
                  <CardContent className="p-10">
                    <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-[clamp(1.125rem,2.2vw,1.5rem)] font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {lang === 'ar' ? "المزيد →" : "En savoir plus →"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold text-slate-900 mb-4 md:uppercase tracking-tight">{t.coverage.title}</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                {t.coverage.desc}
              </p>
            </div>
            <div className="relative">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {hospitals.map((h, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="rounded-3xl border border-slate-100 h-full bg-white">
                        <div className="aspect-[4/3] sm:aspect-[16/10] bg-slate-100 relative rounded-t-3xl overflow-hidden">
                          <iframe
                            src={h.embed}
                            className="absolute inset-0 w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Carte ${h.nameFr}`}
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-bold text-slate-900">
                                {lang === 'ar' ? h.nameAr : h.nameFr}
                              </h3>
                              <p className="text-slate-600 text-sm">{h.area}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  variant="ghost"
                  className="top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 border-none backdrop-blur-sm"
                />
                <CarouselNext
                  variant="ghost"
                  className="top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 border-none backdrop-blur-sm"
                />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Why Choose Us / About */}
        <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 scroll-mt-28">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={whyUs}
                alt="Équipe Médicale"
                fill
                fetchPriority="high"
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
              <span className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-[0.2em] mb-6 px-4 py-2 bg-primary/5 rounded-full">
                <Award className="h-4 w-4" />
                {t.whyUs.badge}
              </span>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold text-slate-900 mb-8 leading-tight">{t.whyUs.title}</h2>

              <div className="space-y-8">
                {t.whyUs.items.map((item, idx) => {
                  const Icon = idx === 0 ? Clock : idx === 1 ? ShieldCheck : HeartPulse;
                  return (
                    <div key={idx} className="flex gap-6 md:gap-8 group p-4 -mx-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/5 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-colors duration-300">
                        <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section / Contact */}
        <section id="contact" className="py-24 relative bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_5s_infinite]"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Clock className="h-4 w-4" />
              {lang === 'ar' ? "متاح 24/7" : "Disponible 24h/24 et 7j/7"}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{t.cta.title}</h2>
            <p className="text-white/90 text-xl mb-12 max-w-3xl mx-auto font-medium">
              {t.cta.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <a href="tel:+213780268005" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    +213 780 268 005
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <a href="tel:+213665173733" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    +213 665 173 733
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
