
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { HeartPulse, Truck, Activity, Siren, Shield, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function ServicesPage() {
  const ambulanceServices = [
    { title: "Basic Life Support (BLS)", icon: Siren, desc: "Non-critical transport with emergency medical technicians for patients requiring monitoring." },
    { title: "Advanced Life Support (ALS)", icon: HeartPulse, desc: "Critical care transport with specialized equipment and paramedics for cardiac or respiratory emergencies." },
    { title: "ICU Inter-Hospital Transfers", icon: Activity, desc: "Safe transfer of critically ill patients between medical facilities with full ventilator support." },
  ]

  const funeralServices = [
    { title: "National Transport", icon: Truck, desc: "Respectful and dignified transport of deceased persons across all wilayas of Algeria." },
    { title: "Administrative Support", icon: Shield, desc: "Assistance with all necessary permits and legal documentation for transport." },
    { title: "Specialized Fleet", icon: UserCheck, desc: "Climate-controlled vehicles designed specifically for respectful funeral transport." },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="relative py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Our Services</h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Reliable, professional, and empathetic transport solutions for medical and funeral needs in Algiers.
            </p>
          </div>
        </section>

        {/* Medical Transport */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">Medical Ambulance Services</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                <p className="text-secondary text-lg mb-8">
                  Our ambulance fleet is equipped to handle everything from routine medical appointments to critical emergency interventions. Each vehicle is staffed by trained professionals dedicated to patient safety.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {ambulanceServices.map((s, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-card rounded-2xl border border-border">
                      <s.icon className="h-8 w-8 text-primary shrink-0" />
                      <div>
                        <h4 className="text-white font-bold mb-2">{s.title}</h4>
                        <p className="text-secondary text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden">
                <Image
                  src={PlaceHolderImages.find(img => img.id === "hero-ambulance")?.imageUrl || ""}
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
                <h2 className="text-3xl font-bold text-white mb-6">Funeral Transport Services</h2>
                <div className="w-20 h-1 bg-destructive mb-8"></div>
                <p className="text-secondary text-lg mb-8">
                  During times of loss, we provide a quiet, dignified service to return your loved ones home. We handle all logistics with the utmost respect and cultural sensitivity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {funeralServices.map((s, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-background rounded-2xl border border-border">
                      <s.icon className="h-8 w-8 text-destructive shrink-0" />
                      <div>
                        <h4 className="text-white font-bold mb-2">{s.title}</h4>
                        <p className="text-secondary text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden">
                <Image
                  src={PlaceHolderImages.find(img => img.id === "funeral-transport")?.imageUrl || ""}
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
