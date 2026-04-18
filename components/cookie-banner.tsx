"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      {/* Gold accent line at top */}
      <div className="h-px bg-accent w-full" />
      <div className="bg-primary text-primary-foreground px-4 py-5 shadow-2xl">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex-1 max-w-2xl">
              <p className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-accent mb-1.5">
                Cookie Notice
              </p>
              <p className="text-sm text-primary-foreground/65 leading-relaxed">
                We use cookies to enhance your experience, serve personalised content, and analyse traffic. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={declineAll}
                className="px-5 py-2 text-sm font-sans font-medium text-primary-foreground/60 border border-primary-foreground/20 hover:border-primary-foreground/40 hover:text-primary-foreground transition-all duration-200"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-sans font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 tracking-wide"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
