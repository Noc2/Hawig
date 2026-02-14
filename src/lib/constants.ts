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
    title: "Web3 Composability",
    description:
      "Permissionless protocols and open smart contracts create a composable foundation where anyone can build on top of existing infrastructure \u2014 no gatekeepers, no vendor lock-in.",
    color: COLORS.blue,
  },
  {
    number: "02",
    title: "AI as the Great Equalizer",
    description:
      "AI is removing the barriers of capital and engineering capacity. A single contributor with the right tools can now build what once required entire teams \u2014 shifting power from institutions to individuals.",
    color: COLORS.green,
  },
  {
    number: "03",
    title: "Social Value as the New Currency",
    description:
      "From memecoins to social tokens to meme stocks, markets increasingly price attention, community, and cultural relevance. Social value is becoming a fundamental economic force.",
    color: COLORS.pink,
  },
  {
    number: "04",
    title: "The Convergence",
    description:
      "The most transformative projects will sit at the intersection of all three \u2014 composable Web3 infrastructure, AI-augmented development, and community-driven value. This is where we contribute.",
    color: COLORS.yellow,
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/davidhawig",
  github: "https://github.com/Noc2",
};
