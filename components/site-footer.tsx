import Link from "next/link"
import Image from "next/image"
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold rule */}
      <div className="h-px bg-accent" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
                <Image src="/favicon.ico" alt="TrustedListBettingSitesUK Logo" width={40} height={40} className="w-10 h-10" />
              <div className="flex flex-col gap-0">
                <span className="text-sm font-serif font-bold leading-tight tracking-widest uppercase text-primary-foreground group-hover:text-accent transition-colors duration-300">
                  TrustedList
                </span>
                <span className="text-[10px] font-sans font-medium text-accent/80 leading-none tracking-[0.2em] uppercase">
                  Betting Sites UK
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Britain&apos;s most trusted betting comparison platform. We analyse every UKGC-licensed bookmaker to deliver unbiased reviews and exclusive offers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-accent/40 group-hover:w-4 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="md:col-span-6">
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Responsible Gambling
            </h3>
            <div className="border border-primary-foreground/10 p-4 mb-4">
              <p className="text-xs text-primary-foreground/55 leading-relaxed">
                All bookmakers listed hold valid UK Gambling Commission licences. Gambling is strictly prohibited for anyone under 18. Bet responsibly — never wager more than you can afford to lose. For support call{" "}
                <strong className="text-primary-foreground/80">0808 8020 133</strong>.
              </p>
            </div>
            <p className="text-xs text-accent/70">When the fun stops, STOP.</p>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-b border-primary-foreground/10">
          {[
            { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/" },
            { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/" },
            { src: "/gordon.png", alt: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
            { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
            { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/" },
          ].map((logo) => (
            <Link
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-80 transition-opacity duration-200"
            >
              <Image src={logo.src} alt={logo.alt} width={90} height={28} className="object-contain h-7" />
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-8 border-b border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-primary-foreground/60">trustedlistbettingsitesuk.com</strong> operates as an independent comparison service. We may receive commission when you register through our links. All featured bookmakers hold valid UKGC licences. 18+ only. T&amp;Cs apply.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/35">
            &copy; {new Date().getFullYear()} trustedlistbettingsitesuk.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-accent/50 tracking-wide">UKGC Licensed</span>
            <span className="text-xs text-primary-foreground/25">|</span>
            <span className="text-xs text-primary-foreground/35">18+</span>
            <span className="text-xs text-primary-foreground/25">|</span>
            <span className="text-xs text-primary-foreground/35">BeGambleAware.org</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
