"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Shield, Users, Heart, Award } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useTranslation()
  const ambulanceImg = PlaceHolderImages.find(i => i.id === "hero-ambulance")?.imageUrl || "https://picsum.photos/seed/ambulance-about/800/600"

  const valueIcons = [Shield, Heart, Award, Users]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{t.about.title}</h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              {t.about.subtitle}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{t.about.mission.title}</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.about.mission.desc1}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.mission.desc2}
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={ambulanceImg}
                alt="Our Fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-tight">{t.about.values.title}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.about.values.items.map((value, idx) => {
                const Icon = valueIcons[idx] || Shield
                return (
                  <div key={idx} className="bg-white border border-border p-8 rounded-3xl text-center group hover:border-primary/50 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
