export const COLORS = {
  pink: "#EF476F",
  blue: "#359EEE",
  green: "#03CEA4",
  yellow: "#FFC43D",
} as const;

export const ORB_COLORS = [
  COLORS.blue,
  COLORS.yellow,
  COLORS.pink,
  COLORS.green,
];

export const THESIS_ITEMS = [
  {
    number: "01",
    title: "AI-Native Web3",
    description:
      "Small, focused teams augmented by AI can build decentralized applications that compete with well-funded, centralized incumbents.",
    color: COLORS.blue,
  },
  {
    number: "02",
    title: "Decentralized from Day One",
    description:
      "No large funding rounds. No corporate control over tokens. Web3 enables projects to launch permissionless and resilient from inception.",
    color: COLORS.green,
  },
  {
    number: "03",
    title: "Open Source Public Goods",
    description:
      "Investing in open-source tools, protocols, and infrastructure that create value for the entire ecosystem \u2014 not just shareholders.",
    color: COLORS.pink,
  },
  {
    number: "04",
    title: "Removing Barriers to Entry",
    description:
      "AI eliminates the capital and talent constraints of building. Web3 eliminates the regulatory and incumbency advantages of launching. Together, they unlock a new paradigm.",
    color: COLORS.yellow,
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/hawig",
  github: "https://github.com/hawig",
};
