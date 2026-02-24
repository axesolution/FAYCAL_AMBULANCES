
"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <Button
        asChild
        size="lg"
        variant="destructive"
        className="rounded-full h-16 w-16 md:h-20 md:w-20 shadow-2xl p-0 flex items-center justify-center"
      >
        <a href="tel:+213123456789" title="Emergency Call">
          <Phone className="h-8 w-8 md:h-10 md:w-10 text-white" />
        </a>
      </Button>
    </div>
  )
}
