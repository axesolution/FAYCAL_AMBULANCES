"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EmergencyCTA } from "@/components/emergency-cta"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useTranslation } from "@/components/language-provider"

export default function ContactPage() {
  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t.contact.form.success)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        <section className="relative py-24 bg-card border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{t.contact.title}</h1>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
              {t.contact.desc}
            </p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t.contact.direct}</h2>
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
            </div>

            {/* Inquiry Form */}
            <div className="bg-card p-10 rounded-3xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">{t.contact.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input id="name" className="bg-background border-border" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input id="phone" className="bg-background border-border" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input id="email" type="email" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input id="subject" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea id="message" className="bg-background border-border min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6 rounded-full font-bold uppercase tracking-widest">
                  {t.contact.form.submit}
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
