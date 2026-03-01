import type {Metadata, Viewport} from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Ambulance Fayçal | Transport médical et funéraire à Alger 24/7",
  description: "Ambulance Fayçal assure le transport médical d’urgence, les transferts inter-hospitaliers et le transport funéraire à Alger, 24h/24 et 7j/7, avec une équipe paramédicale qualifiée.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:9002"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ambulance Fayçal | Transport médical et funéraire à Alger 24/7",
    description:
      "Ambulance Faycal assure le transport médical d’urgence, les transferts inter-hospitaliers et le transport funéraire à Alger, 24h/24 et 7j/7.",
    url: "/",
    siteName: "Ambulance Fayçal",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Ambulance Fayçal - Alger 24/7",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambulance Fayçal | Transport médical & funéraire à Alger",
    description:
      "Urgence 24/7, transferts inter-hospitaliers, transport funéraire. Équipe paramédicale qualifiée.",
    images: ["/og"],
    creator: "@ambulance_faycal",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F36AA" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="application-name" content="Ambulance Fayçal" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmergencyService",
          name: "Ambulance Fayçal",
              url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:9002") + "/",
              telephone: "+213123456789",
              areaServed: "Alger",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Alger",
                addressCountry: "DZ",
              },
              openingHours: "Mo-Su 00:00-23:59",
              image: "https://picsum.photos/seed/ambulance-highway/1200/630",
              sameAs: [],
              serviceType: [
                "Transport médical d'urgence",
                "Transferts inter-hospitaliers",
                "Transport funéraire",
              ],
            }),
          }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
