import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Hawig Ventures
        </p>
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-blue transition-colors text-sm"
          >
            X / Twitter
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-green transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-center text-white/30 text-xs leading-relaxed space-y-2">
        <p>
          Hawig Ventures UG &middot; Herzogin-Juliana-Stra&szlig;e 7, 55469
          Simmern, Germany &middot;{" "}
          <a
            href="mailto:info@hawig.xyz"
            className="hover:text-white/50 transition-colors"
          >
            info@hawig.xyz
          </a>
        </p>
        <p>
          The content on this website is for informational purposes only and
          does not constitute investment advice, a recommendation, or a
          solicitation to buy or sell any assets.
        </p>
      </div>
    </footer>
  );
}
