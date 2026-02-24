
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Shield, Users, Heart, Award } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="relative py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">About Us</h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Dedicated to providing the highest standard of emergency transport and funeral care in the heart of Algiers.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-secondary text-lg leading-relaxed mb-6">
                Founded with the vision of bridging the gap in quality medical transport, Faycal Ambulance Services has grown to become a cornerstone of the Algiers community. We believe that every patient deserves dignified, professional, and rapid care during their most vulnerable moments.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                Whether it's a life-saving emergency transfer or the final journey of a loved one, our commitment remains unwavering: to serve with compassion, excellence, and absolute integrity.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={PlaceHolderImages.find(i => i.id === "hero-ambulance")?.imageUrl || ""}
                alt="Our Fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Our Core Values</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Integrity", icon: Shield, desc: "We maintain the highest ethical standards in all our interactions." },
                { title: "Compassion", icon: Heart, desc: "Empathy is at the core of everything we do, treating every patient like family." },
                { title: "Excellence", icon: Award, desc: "Continuously improving our skills and fleet to stay at the cutting edge." },
                { title: "Teamwork", icon: Users, desc: "Collaborating seamlessly with hospitals and families for the best outcomes." }
              ].map((value, idx) => (
                <div key={idx} className="bg-background border border-border p-8 rounded-3xl text-center group hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
