
"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useTranslation } from "@/components/language-provider"

export function EmergencyCTA() {
  const { lang } = useTranslation()
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 pointer-events-auto" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="relative">
        {/* Pulse animation rings */}
        <div className="absolute inset-0 rounded-full bg-destructive/30 animate-ping" />
        <div className="absolute inset-0 rounded-full bg-destructive/20 animate-pulse" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              variant="destructive"
              className="relative rounded-full h-14 w-14 md:h-16 md:w-16 shadow-2xl p-0 flex items-center justify-center border-4 border-white/20 hover:scale-110 transition-transform"
              title={lang === 'ar' ? "اتصل" : "Appeler"}
              aria-label={lang === 'ar' ? "اتصل" : "Appeler"}
            >
              <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />

              {/* Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl sm:max-w-md">
            <DialogHeader>
              <DialogTitle className={`${lang === 'ar' ? "font-arabic" : ""} text-center text-xl`}>
                {lang === 'ar' ? "اختر رقم الاتصال" : "Choisir un numéro"}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 pt-4">
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg">
                <a href="tel:+213780268005" dir="ltr" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  +213 780 268 005
                </a>
              </Button>
              <Button asChild size="lg" className="w-full bg-slate-800 hover:bg-slate-700 text-white rounded-xl h-14 text-lg">
                <a href="tel:+213665173733" dir="ltr" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  +213 665 173 733
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
