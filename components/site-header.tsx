import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full bg-primary shadow-[0_1px_0_0_hsl(var(--gold)/0.3)]"
    >
      {/* Gold top rule */}
      <div className="h-px bg-accent w-full" />

      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="TrustedListBettingSitesUK Home">
          {/* Crest icon */}
          <Image src="/favicon.ico" alt="TrustedListBettingSitesUK Logo" width={40} height={40} className="w-10 h-10" />

          <div className="flex flex-col gap-0">
            <span className="text-sm font-serif font-bold text-primary-foreground leading-tight tracking-widest uppercase group-hover:text-accent transition-colors duration-300">
              TrustedList
            </span>
            <span className="text-[10px] font-sans font-medium text-accent/80 leading-none tracking-[0.2em] uppercase">
              Betting Sites UK
            </span>
          </div>
        </Link>
      </div>

      {/* Bottom rule */}
      <div className="h-px bg-accent/20 w-full" />
    </header>
  )
}
