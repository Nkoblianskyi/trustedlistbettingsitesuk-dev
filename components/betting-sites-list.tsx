"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const rankLabels = ["#1 Top Pick", "#2 Recommended", "#3 Top Rated", "#4 Popular", "#5 Trusted", "#6 Editor's Choice"]

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  // score is out of 10, convert to 0–5 with 0.2 step
  const raw = (rating / 10) * 5
  const stepped = Math.round(raw / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  const starSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className={`relative inline-block ${starSize}`}>
            <Star className={`${starSize} text-muted-foreground/25`} fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${starSize} text-accent`} fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-4 md:py-4 bg-[hsl(40,20%,94%)]">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Section heading */}
        <div className="mb-4 text-center">
          <p className="text-[12px] font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-2">UKGC Licensed & Verified</p>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {bettingSites.map((site, index) => {
            const isTop = index === 0

            return (
              <div
                key={site.id}
                className="relative bg-card border border-accent animate-fade-in-up shadow-[0_0_0_1px_hsl(var(--accent)/0.2)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Rank chip */}
                <div className="absolute -top-[18px] left-4 z-10">
                  <span
                    className={`inline-block text-[10px] font-sans font-semibold tracking-[0.15em] uppercase px-3 py-[3px] ${isTop ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                      }`}
                  >
                    {rankLabels[index] ?? `#${index + 1}`}
                  </span>
                </div>

                {/* ── DESKTOP: 4 columns — Logo | Bonus | Score+Stars | CTA ── */}
                <div className="hidden md:flex items-stretch min-h-[110px]">

                  {/* Col 1 — Logo */}
                  <div className="w-52 flex-shrink-0 bg-muted flex items-center justify-center p-6 border-r border-accent/30">
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={180}
                      height={68}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>

                  {/* Col 2 — Bonus */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 border-r border-accent/30 bg-accent/5 gap-1.5">
                    <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-muted-foreground">Welcome Offer</p>
                    <p className="font-serif font-bold text-xl text-accent text-center leading-tight">{site.bonus}</p>
                  </div>

                  {/* Col 3 — Score + Stars + Reviews */}
                  <div className="w-48 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 border-r border-accent/30 gap-2">
                    <span className="font-serif font-bold text-4xl text-foreground leading-none">{site.score.toFixed(1)}</span>
                    <StarRating rating={site.score} size="lg" />
                    <span className="text-[10px] text-muted-foreground font-sans">{site.reviews.toLocaleString()} reviews</span>
                  </div>

                  {/* Col 4 — CTA Button + disclaimer */}
                  <div className="w-40 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 gap-3">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-1.5 py-3 text-sm font-sans font-bold tracking-wide transition-colors ${isTop
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                    >
                      Claim Offer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-[9px] text-muted-foreground/55 font-sans text-center">18+ | T&amp;Cs Apply</p>
                  </div>

                </div>

                {/* ── DESKTOP: disclaimer strip ── */}
                <div className="hidden md:flex items-center justify-center px-6 py-1.5 bg-muted/40 border-t border-accent/20">
                  <p className="text-[9px] text-muted-foreground/55 font-sans text-center">
                    18+ | T&amp;Cs Apply | BeGambleAware.org | GamStop.co.uk | GamblingTherapy.org
                  </p>
                </div>

                {/* ── MOBILE: 3 rows ── */}
                <div className="md:hidden flex flex-col">

                  {/* Row 1 — Logo + Bonus */}
                  <div className="flex items-stretch border-b border-accent/40 min-h-[80px]">
                    <div className="w-[42%] bg-muted flex items-center justify-center px-4 py-4 border-r border-accent/30">
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={150}
                        height={56}
                        className="object-contain max-h-14 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 bg-accent/5">
                      <p className="text-[9px] font-sans font-semibold tracking-widest uppercase text-muted-foreground mb-1">Welcome Offer</p>
                      <p className="font-serif font-bold text-base text-accent leading-snug text-center">{site.bonus}</p>
                    </div>
                  </div>

                  {/* Row 2 — Score + Stars + Reviews (centred) + CTA */}
                  <div className="flex items-stretch border-b border-accent/40 min-h-[64px]">
                    <div className="flex-1 flex items-center justify-center gap-3 px-4 py-3">
                      <span className="font-serif font-bold text-3xl text-foreground leading-none">{site.score.toFixed(1)}</span>
                      <div className="flex flex-col items-start gap-1">
                        <StarRating rating={site.score} size="md" />
                        <span className="text-[9px] text-muted-foreground font-sans">{site.reviews.toLocaleString()} reviews</span>
                      </div>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-6 text-sm font-sans font-bold tracking-wider uppercase transition-colors border-l border-accent/30 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Claim
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Row 3 — Disclaimer */}
                  <div className="px-4 py-2 bg-muted/40">
                    <p className="text-[9px] text-muted-foreground/55 font-sans text-center">
                      18+ | T&amp;Cs Apply | BeGambleAware.org
                    </p>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-muted-foreground/55 mt-10 font-sans leading-relaxed">
          All listed bookmakers hold valid UKGC licences. Rankings are based on independent editorial assessment. Affiliate commissions may apply.
        </p>
      </div>
    </section>
  )
}
