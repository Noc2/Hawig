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
    title: "Infrastructure & Protocols",
    description:
      "Backing the foundational layers that power the decentralized web \u2014 from consensus mechanisms to cross-chain interoperability.",
    color: COLORS.blue,
  },
  {
    number: "02",
    title: "Decentralized Governance",
    description:
      "Supporting DAOs and governance frameworks that enable transparent, community-driven decision making at scale.",
    color: COLORS.green,
  },
  {
    number: "03",
    title: "Open Source Public Goods",
    description:
      "Contributing to open-source tools, libraries, and protocols that benefit the entire ecosystem.",
    color: COLORS.pink,
  },
  {
    number: "04",
    title: "AI \u00d7 Crypto",
    description:
      "Exploring the convergence of artificial intelligence and blockchain \u2014 decentralized compute, verifiable inference, and autonomous agents.",
    color: COLORS.yellow,
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/hawig",
  github: "https://github.com/hawig",
};
