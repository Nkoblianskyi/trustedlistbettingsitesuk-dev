"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-5 h-5">
            <Star className="w-5 h-5 text-muted-foreground/25" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="relative w-full max-w-sm bg-card animate-scale-in shadow-2xl">
        {/* Gold top rule */}
        <div className="h-px bg-accent" />

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-0.5">
              Exclusive Offer
            </p>
            <h2 className="font-serif font-bold text-lg text-primary-foreground leading-tight">
              Top UK Betting Pick
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="w-full bg-muted border border-border flex items-center justify-center p-6 h-32">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              width={240}
              height={90}
              className="object-contain max-h-full w-full"
            />
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-1.5">
            <p className="font-serif font-bold text-4xl text-foreground leading-none">{topSite.score.toFixed(1)}</p>
            <StarRating rating={topSite.score} />
            <p className="text-xs text-muted-foreground font-sans">{topSite.reviews.toLocaleString()} verified reviews</p>
          </div>

          {/* Bonus */}
          <div className="w-full border border-accent/40 bg-accent/5 px-5 py-3 text-center">
            <p className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-accent mb-1">
              Welcome Bonus
            </p>
            <p className="font-serif font-bold text-xl text-foreground">{topSite.bonus}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 text-sm font-sans font-semibold tracking-wide hover:bg-accent/90 transition-colors duration-200"
          >
            Claim Bonus Now
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[10px] text-muted-foreground/60 font-sans text-center leading-relaxed">
            18+ | Terms &amp; Conditions Apply | BeGambleAware.org | Please Gamble Responsibly
          </p>
        </div>

        {/* Bottom gold rule */}
        <div className="h-px bg-accent/30" />
      </div>
    </div>
  )
}
