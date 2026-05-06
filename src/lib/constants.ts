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
    title: "The Human Layer",
    description:
      "AI increases individual capability, but humans still need agency, trust, and ownership. Web3 gives people the infrastructure to coordinate, prove value, and stay in control of what they build.",
    color: COLORS.pink,
  },
  {
    number: "04",
    title: "The Convergence",
    description:
      "The next generation of projects will emerge where humans, AI, and Web3 meet: humans providing intent and creativity, AI expanding what is possible, and Web3 creating the ownership and coordination layer between them.",
    color: COLORS.yellow,
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/davidhawig",
  github: "https://github.com/Noc2",
};
