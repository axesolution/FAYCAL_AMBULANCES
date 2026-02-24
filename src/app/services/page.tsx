"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { HeartPulse, Truck, Activity, Siren, Shield, UserCheck } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "@/components/language-provider"

export default function ServicesPage() {
  const { t } = useTranslation()

  const medicalIcons = [Siren, HeartPulse, Activity]
  const funeralIcons = [Truck, Shield, UserCheck]

  const ambulanceImg = PlaceHolderImages.find(img => img.id === "hero-ambulance")?.imageUrl || "https://picsum.photos/seed/ambulance-services/800/600"
  const funeralImg = PlaceHolderImages.find(img => img.id === "funeral-transport")?.imageUrl || "https://picsum.photos/seed/funeral-services/800/600"

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="relative py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{t.services.title}</h1>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              {t.services.desc}
            </p>
          </div>
        </section>

        {/* Medical Transport */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">{t.services.medicalSection.title}</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                <p className="text-secondary text-lg mb-8">
                  {t.services.medicalSection.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {t.services.medicalSection.items.map((s, i) => {
                    const Icon = medicalIcons[i] || Siren
                    return (
                      <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border border-border">
                        <Icon className="h-8 w-8 text-primary shrink-0" />
                        <div>
                          <h4 className="text-white font-bold mb-2">{s.title}</h4>
                          <p className="text-secondary text-sm">{s.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden">
                <Image
                  src={ambulanceImg}
                  alt="Medical Ambulance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Funeral Transport */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">{t.services.funeralSection.title}</h2>
                <div className="w-20 h-1 bg-destructive mb-8"></div>
                <p className="text-secondary text-lg mb-8">
                  {t.services.funeralSection.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {t.services.funeralSection.items.map((s, i) => {
                    const Icon = funeralIcons[i] || Truck
                    return (
                      <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-border">
                        <Icon className="h-8 w-8 text-destructive shrink-0" />
                        <div>
                          <h4 className="text-white font-bold mb-2">{s.title}</h4>
                          <p className="text-secondary text-sm">{s.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden">
                <Image
                  src={funeralImg}
                  alt="Funeral Transport"
                  fill
                  className="object-cover"
                  data-ai-hint="funeral transport"
                />
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
