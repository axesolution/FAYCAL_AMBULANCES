import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, Truck, Clock, ShieldCheck, ChevronRight, Phone } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-ambulance")
  const fallbackHero = "https://picsum.photos/seed/ambulance-default/1920/1080"
  
  const services = [
    {
      title: "Emergency Transport",
      desc: "Rapid response medical transport with fully equipped modern ambulances.",
      icon: HeartPulse,
      href: "/services"
    },
    {
      title: "Funeral Services",
      desc: "Dignified and respectful transport for your loved ones in Algiers and beyond.",
      icon: Truck,
      href: "/services"
    },
    {
      title: "Medical Assistance",
      desc: "Qualified paramedical teams dedicated to patient care during every journey.",
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
            src={heroImg?.imageUrl || fallbackHero}
            alt={heroImg?.description || "Faycal Ambulance Services"}
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="ambulance emergency"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                24/7 Emergency Response Algiers
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Compassionate Care When It <span className="text-primary">Matters Most</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-2xl">
                Faycal Ambulance provides professional emergency medical transport and funeral services with a commitment to dignity, speed, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-7 rounded-full">
                  <a href="tel:+213123456789">Call Now +213 123 456</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-white hover:bg-white/10 text-lg px-8 py-7 rounded-full">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Brief Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Our Core Services</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-secondary max-w-2xl mx-auto">
                Comprehensive transport solutions tailored to the needs of Algiers' citizens, focusing on professionalism and care.
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
                      Learn More <ChevronRight className="h-4 w-4" />
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
                src={PlaceHolderImages.find(i => i.id === "medical-team")?.imageUrl || "https://picsum.photos/seed/medteam/800/600"}
                alt="Medical Team"
                fill
                className="object-cover"
                data-ai-hint="medical team"
              />
            </div>
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Reliability & Trust</span>
              <h2 className="text-4xl font-bold text-white mb-8 leading-tight">Why Choose Faycal Ambulance?</h2>
              
              <div className="space-y-8">
                {[
                  { title: "24/7 Availability", desc: "Our fleet and staff are on standby every hour of every day to ensure you're never without help.", icon: Clock },
                  { title: "State-of-the-Art Fleet", desc: "Equipped with modern resuscitation and stabilization technology for maximum patient safety.", icon: ShieldCheck },
                  { title: "Professional Staff", desc: "Our team consists of certified emergency responders and compassionate caretakers.", icon: HeartPulse }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-primary flex items-center justify-center rounded-xl">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">In Need of Urgent Assistance?</h2>
            <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Don't wait. Our dispatch team is ready to assist you right now. Professional care is just a call away.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" variant="destructive" className="rounded-full text-xl px-10 py-8 shadow-xl">
                <a href="tel:+213123456789" className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Call Emergency Center
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
