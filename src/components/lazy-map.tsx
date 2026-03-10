"use client"

import { useEffect, useRef, useState } from "react"

interface LazyMapProps {
  src: string
  title: string
  className?: string
}

export function LazyMap({ src, title, className }: LazyMapProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-slate-200 animate-pulse" />
      )}
    </div>
  )
}
