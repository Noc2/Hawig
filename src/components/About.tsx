import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-sm tracking-widest text-white/40 uppercase mb-6 block">
            01
          </span>
          <h2 className="heading-section">
            Web3 is Dead,{" "}
            <span className="text-gradient">Long Live Web3</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-large text-white/70 mt-10 max-w-3xl">
            The current landscape presents a paradox. Token valuations have
            declined, Web3 social platforms have struggled to gain traction,
            and many emerging projects trend toward centralization &mdash;
            adopting the very structures this technology was designed to replace.
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="body-large text-white/70 mt-6 max-w-3xl">
            Yet the underlying thesis has never been stronger. AI is
            eliminating the traditional barriers of capital and engineering
            capacity. What remains are regulatory friction and incumbency
            advantages &mdash; precisely the barriers that decentralized
            architecture is built to overcome.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="body-large text-white/70 mt-6 max-w-3xl">
            Web3 enables the creation of truly decentralized projects from
            inception &mdash; without large funding rounds or corporate
            governance over tokens. A small group of dedicated contributors,
            augmented by AI, can now build applications that rival those of
            well-resourced incumbents.
          </p>
        </FadeIn>
        <FadeIn delay={0.45}>
          <p className="body-large text-white/70 mt-6 max-w-3xl">
            This is why we remain convicted. Hawig Ventures invests in and
            actively contributes to projects at this intersection &mdash;
            hands-on, long-term, and open source first.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
