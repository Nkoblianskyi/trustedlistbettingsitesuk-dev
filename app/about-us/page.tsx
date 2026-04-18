import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | TrustedListBettingSitesUK.com — Expert UK Betting Reviews",
  description:
    "Learn about our editorial mission, review methodology, and commitment to helping UK punters find the finest UKGC-licensed bookmakers.",
}

const pillars = [
  {
    title: "UKGC Licensed Only",
    body: "Every bookmaker we feature holds a valid UK Gambling Commission licence, guaranteeing the highest standards of player protection and fair gaming.",
  },
  {
    title: "UK Punter Focused",
    body: "We prioritise bookmakers that understand British betting culture, accept GBP, offer UK payment methods, and provide localised customer support.",
  },
  {
    title: "Expert Reviews",
    body: "Our experienced team of betting analysts conduct thorough, hands-on testing of every platform, examining odds quality, bonus terms, and withdrawal speeds.",
  },
  {
    title: "Exclusive Bonuses",
    body: "We negotiate enhanced welcome offers and exclusive promotions unavailable elsewhere, maximising value for UK customers.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-primary text-primary-foreground">
        <div className="h-px bg-accent" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              Who We Are
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-primary-foreground mb-5 text-balance">
              About TrustedListBettingSitesUK
            </h1>
            <div className="h-px bg-accent/30 w-32 mx-auto mb-5" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK betting — dedicated to helping British punters find the finest UKGC-licensed bookmakers through independent, expert-led analysis.
            </p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Clarity in a Complex Market
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                At TrustedListBettingSitesUK.com, we have established ourselves as the UK&apos;s premier destination for bookmaker evaluation and comparison. In today&apos;s crowded betting marketplace, our specialist team cuts through the marketing noise to identify genuinely exceptional betting experiences tailored specifically for British punters.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you are passionate about Premier League football, horse racing at Cheltenham, cricket, rugby, or any sport close to British hearts, we help you find bookmakers that deliver outstanding value, competitive odds, and first-class customer service.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {pillars.map((p, i) => (
                <div key={i} className="border border-border p-6 hover:border-accent/40 transition-colors duration-200">
                  <div className="h-px bg-accent w-8 mb-4" />
                  <h3 className="font-serif font-bold text-base text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Behind every recommendation lies a comprehensive evaluation process developed by industry veterans. We scrutinise each bookmaker across multiple critical dimensions:
              </p>
              <ul className="space-y-3">
                {[
                  ["Licensing & Security", "UKGC licence verification, SSL encryption, and fund segregation"],
                  ["Welcome Bonuses", "Value assessment, wagering requirements, and realistic completion terms"],
                  ["Sports Coverage", "Market depth for football, horse racing, cricket, rugby, tennis, and niche sports"],
                  ["Odds Quality", "Competitiveness across major markets and value for UK customers"],
                  ["Payment Methods", "UK-friendly options, deposit and withdrawal speeds"],
                  ["Mobile Experience", "App quality, responsive website, in-play betting functionality"],
                  ["Customer Support", "Live chat availability, email response times, UK-based support teams"],
                  ["Responsible Gambling", "Deposit limits, self-exclusion tools, links to BeGambleAware and GamCare"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm text-muted-foreground border-l border-border pl-4">
                    <span className="font-serif font-semibold text-foreground whitespace-nowrap">{title}:</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <div className="space-y-4">
                {[
                  ["Transparency", "We clearly explain our testing methodology and ranking criteria, ensuring you understand exactly how we evaluate bookmakers."],
                  ["Editorial Independence", "Our reviews remain completely impartial. Whilst we earn affiliate commissions, these never influence our honest assessments."],
                  ["Continuous Updates", "The betting landscape evolves constantly, and so do our reviews. We regularly reassess platforms to reflect current offers and features."],
                  ["Responsible Gambling", "We actively promote responsible gambling practices and prominently feature links to BeGambleAware, GamCare, and GamStop."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-l-2 border-accent pl-5">
                    <p className="font-serif font-semibold text-sm text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="h-px bg-accent mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">
                How We Are Funded
              </p>
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">
                Free for All UK Punters
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
                Our platform is sustained through affiliate partnerships with bookmakers, who compensate us when visitors register through our links. This business model allows us to operate without subscription fees or restricted content.
              </p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Crucially, these commercial relationships never compromise our editorial integrity. Our rankings are determined solely by platform quality, customer satisfaction, and objective performance metrics.
              </p>
              <div className="h-px bg-accent/30 mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
