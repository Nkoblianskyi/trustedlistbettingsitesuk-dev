import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | TrustedListBettingSitesUK.com",
  description:
    "Read our privacy policy to understand how we collect, use, and protect your personal data in compliance with UK GDPR and the Data Protection Act 2018.",
}

const sections = [
  {
    title: "1. Information We Collect",
    body: null,
    items: [
      ["Personal Identifiers", "When you subscribe to our newsletter or contact our team, we may collect your name, email address, and any information you voluntarily provide."],
      ["Usage Data", "We automatically collect data about your interactions with our website, including pages viewed, time spent, referring websites, browser type, device information, and IP address."],
      ["Cookies and Tracking Technologies", "We use cookies and similar technologies to enhance your browsing experience. For details, please consult our Cookie Policy."],
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We utilise collected information to: operate and maintain our website; improve user experience through personalisation; send newsletters and betting-related updates (with your consent); respond to enquiries; analyse usage patterns; comply with legal obligations; and detect and prevent fraud or security threats.",
  },
  {
    title: "3. Legal Basis for Processing",
    body: null,
    items: [
      ["Consent", "When you have given explicit permission, such as for newsletter subscriptions."],
      ["Legitimate Interests", "When processing is necessary for our business operations, provided your rights are not overridden."],
      ["Legal Obligation", "When we must comply with UK laws and regulations."],
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    body: "We do not sell, trade, or rent your personal information. We may share data only with: trusted service providers assisting with hosting and analytics (bound by confidentiality agreements); legal authorities when required by UK law; and in the event of a business transfer, subject to the same privacy protections.",
  },
  {
    title: "5. Data Security",
    body: "We implement robust technical and organisational measures to protect your personal information, including SSL encryption, secure servers, access controls, and regular security audits. No internet transmission is 100% secure, but we strive to apply best-practice safeguards at all times.",
  },
  {
    title: "6. Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by UK law. When data is no longer needed, we securely delete or anonymise it according to our retention schedule.",
  },
  {
    title: "7. Your Rights Under UK GDPR",
    body: null,
    items: [
      ["Right of Access", "Request a copy of the personal data we hold about you."],
      ["Right to Rectification", "Correct inaccurate or incomplete personal information."],
      ["Right to Erasure", "Request deletion of your personal data."],
      ["Right to Restrict Processing", "Limit how we use your data in certain circumstances."],
      ["Right to Data Portability", "Receive your data in a structured, commonly used format."],
      ["Right to Object", "Object to processing based on legitimate interests or direct marketing."],
      ["Right to Withdraw Consent", "Withdraw previously given consent at any time."],
    ],
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to external bookmaker sites and third-party services. We are not responsible for the privacy practices of these external sites. We recommend reviewing their privacy policies before providing personal information.",
  },
  {
    title: "9. Children's Privacy",
    body: "Our website is intended exclusively for individuals aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We may periodically update this Privacy Policy to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes by posting the revised policy on this page and updating the date above.",
  },
  {
    title: "11. Contact Us",
    body: "For questions or to exercise your data rights, contact us at: privacy@trustedlistbettingsitesuk.com. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-primary-foreground/50 font-sans">Last updated: January 2025</p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-5">
              At TrustedListBettingSitesUK.com, safeguarding your privacy is our paramount concern. This Privacy Policy outlines how we collect, use, store, and protect your personal information in full compliance with UK GDPR and the Data Protection Act 2018.
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
                  {section.items && (
                    <ul className="space-y-3 pl-4">
                      {section.items.map(([title, desc]) => (
                        <li key={title} className="flex gap-3 text-sm text-muted-foreground border-l border-border pl-4">
                          <span className="font-serif font-semibold text-foreground whitespace-nowrap">{title}:</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
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
