"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-destructive mb-4">500</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Une erreur est survenue.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-colors"
        >
          Reessayer
        </button>
      </div>
    </div>
  )
}
