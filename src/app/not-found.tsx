import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Cette page n&apos;existe pas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
