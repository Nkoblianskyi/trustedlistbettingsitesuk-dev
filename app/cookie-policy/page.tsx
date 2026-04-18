import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | TrustedListBettingSitesUK.com",
  description:
    "Understand how trustedlistbettingsitesuk.com uses cookies and tracking technologies, and how to manage your preferences.",
}

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites function efficiently, provide a better user experience, and supply website owners with valuable analytics. Cookies typically contain a unique identifier and may include information about your preferences and interactions with the site.",
  },
  {
    title: "2. Types of Cookies We Use",
    body: null,
    subsections: [
      {
        title: "2.1 Strictly Necessary Cookies",
        body: "These cookies are essential for website functionality and cannot be disabled. They activate in response to actions such as setting privacy preferences or completing forms. Without these cookies, certain services you have requested cannot be provided.",
      },
      {
        title: "2.2 Performance and Analytics Cookies",
        body: "These cookies help us understand how visitors interact with our website by collecting anonymous statistical information. They enable us to count visits, identify traffic sources, and determine which content is most popular.",
      },
      {
        title: "2.3 Functional Cookies",
        body: "These cookies enable enhanced functionality and personalisation, such as remembering your language selections or region. If you decline these cookies, some site features may not function optimally.",
      },
      {
        title: "2.4 Targeting and Advertising Cookies",
        body: "Our advertising partners may deploy these cookies to build a profile of your interests and display relevant advertisements elsewhere. They do not store directly identifiable personal information.",
      },
    ],
  },
  {
    title: "3. First-Party vs Third-Party Cookies",
    body: "First-party cookies are set directly by trustedlistbettingsitesuk.com and are used primarily for site functionality and analytics. Third-party cookies are set by external services such as Google Analytics, social media platforms, and advertising networks, each governed by their own privacy policies.",
  },
  {
    title: "4. How to Manage Cookies",
    body: null,
    subsections: [
      {
        title: "4.1 Through Our Cookie Banner",
        body: "When you first visit our site, a cookie consent banner allows you to accept or decline non-essential cookies. You can update your preferences at any time via the Cookie Policy link in our footer.",
      },
      {
        title: "4.2 Through Your Browser Settings",
        body: "Most web browsers allow you to control cookies through their settings — you can view and delete existing cookies, block third-party cookies, or block all cookies. Note that blocking all cookies may impair website functionality.",
      },
      {
        title: "4.3 Advertising Opt-Out",
        body: "To opt out of interest-based advertising from participating companies, visit the Digital Advertising Alliance at www.youronlinechoices.com/uk.",
      },
    ],
  },
  {
    title: "5. Third-Party Services We Use",
    body: "We use cookies from the following trusted third-party services: Google Analytics (website traffic analysis), social media platforms (content sharing), advertising networks (relevant advertisements and campaign measurement), and affiliate partners (referral tracking).",
  },
  {
    title: "6. Cookie Lifespan",
    body: "Session cookies are temporary and deleted when you close your browser. Persistent cookies remain on your device for a predetermined period — from days to years — or until manually deleted.",
  },
  {
    title: "7. Updates to This Policy",
    body: "We may periodically update this Cookie Policy to reflect changes in our practices, technologies, or legal requirements. We will notify you of significant changes by updating the date at the top of this page.",
  },
  {
    title: "8. Contact Us",
    body: "If you have questions about our cookie practices or wish to exercise your data rights, please contact us at cookies@trustedlistbettingsitesuk.com.",
  },
]

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-primary text-primary-foreground">
        <div className="h-px bg-accent" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Legal</p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary-foreground mb-3 text-balance">
              Cookie Policy
            </h1>
            <p className="text-sm text-primary-foreground/50 font-sans">Last updated: 2026</p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-5">
              This Cookie Policy explains how TrustedListBettingSitesUK.com uses cookies and similar tracking technologies when you visit our website, in compliance with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-foreground mb-1">{section.title}</h2>
                    <div className="h-px bg-border" />
                  </div>
                  {section.body && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                  {section.subsections && (
                    <div className="space-y-4 pl-4">
                      {section.subsections.map((sub) => (
                        <div key={sub.title} className="border-l border-border pl-4">
                          <h3 className="font-serif font-semibold text-sm text-foreground mb-1.5">{sub.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
