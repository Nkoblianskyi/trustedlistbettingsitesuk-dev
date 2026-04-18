export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
    {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    score: 9.8,
    bonus: "Get £30 Free Bets",
    features: ["Competitive Odds", "Cash Out", "Bet Builder"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/en-gb/",
    reviews: 5718,
  },
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    score: 9.7,
    bonus: "Get £50 Free Bets",
    features: ["Fast Payouts", "Best Odds Guaranteed", "Live Streaming"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/sports",
    reviews: 4375,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    score: 9.5,
    bonus: "£40 Welcome Offer – New Customers Only",
    features: ["UK Presence", "Football Specials", "Local Support"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.boylesports.com",
    reviews: 6074,
  },

  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    score: 9.4,
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    features: ["Live Betting", "Cash Out", "Best Odds"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/en/sports",
    reviews: 6851,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    score: 9.2,
    bonus: "Get £30 in Free Bets",
    features: ["Esports Focus", "Modern Interface", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com",
    reviews: 4271,
  },
  {
    id: "spreadex",
    name: "Spreadex",
    logo: "/spreadex.webp",
    score: 9.1,
    bonus: "Bet £10, Get £60 in Free Bets",
    features: ["Live Streaming", "In-Play", "Cash Out"],
    paymentMethods: ["Visa/Mastercard", "Bank Transfer"],
    link: "https://www.spreadex.com/sports",
    reviews: 5276,
  },
]
