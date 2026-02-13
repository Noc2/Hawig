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
            Building at the{" "}
            <span className="text-gradient">Edge</span> of Web3
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-large text-white/70 mt-10 max-w-3xl">
            Hawig Ventures is a personal venture company that invests in and
            actively contributes to Web3 projects. We believe the decentralized
            web represents a fundamental shift in how we build, own, and interact
            with technology.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="body-large text-white/70 mt-6 max-w-3xl">
            We take a hands-on approach &mdash; not just providing capital, but
            contributing code, governance participation, and strategic guidance.
            Our focus is on long-term alignment with teams and communities
            building open, resilient infrastructure.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
