
"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyCTA() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-none md:animate-bounce hover:animate-none" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <Button
        asChild
        size="lg"
        variant="destructive"
        className="rounded-full h-14 w-14 md:h-[clamp(3.5rem,3.5vw,5rem)] md:w-[clamp(3.5rem,3.5vw,5rem)] shadow-2xl p-0 flex items-center justify-center"
      >
        <a href="tel:+213123456789" title="Emergency Call" aria-label="Appeler le numéro d'urgence">
          <Phone className="h-7 w-7 md:h-[clamp(1.75rem,1.8vw,2.5rem)] md:w-[clamp(1.75rem,1.8vw,2.5rem)] text-white" />
        </a>
      </Button>
    </div>
  )
}
