
"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for form submission
    alert("Inquiry sent. We will contact you shortly.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="relative py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Contact Us</h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              Reach out to us for non-urgent inquiries, quotes, or to learn more about our specialized services.
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Direct Contact</h2>
              <p className="text-secondary mb-12 text-lg">
                For immediate medical emergencies or urgent funeral transport requests, please use our 24/7 phone line.
              </p>

              <div className="space-y-8">
                {[
                  { title: "24/7 Hotline", val: "+213 123 456 789", icon: Phone },
                  { title: "Email Support", val: "contact@faycal-ambulance.dz", icon: Mail },
                  { title: "Office Location", val: "District of Algiers, Algiers Center", icon: MapPin },
                  { title: "Operational Hours", val: "24 Hours / 7 Days", icon: Clock },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider text-xs">{item.title}</h4>
                      <p className="text-secondary font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-muted rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all border border-border">
                 <div className="absolute inset-0 flex items-center justify-center text-secondary/50 flex-col gap-4">
                    <MapPin className="h-10 w-10" />
                    <span className="font-semibold uppercase tracking-widest text-xs">Algiers Operational Center Map</span>
                 </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-card p-10 rounded-3xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-background border-border" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+213..." className="bg-background border-border" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g. Funeral Transport Quote" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your requirements..." className="bg-background border-border min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6 rounded-full font-bold uppercase tracking-widest">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EmergencyCTA />
    </div>
  )
}
