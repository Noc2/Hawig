import { THESIS_ITEMS } from "@/lib/constants";
import FadeIn from "./FadeIn";

export default function Thesis() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-sm tracking-widest text-white/40 uppercase mb-6 block">
            02
          </span>
          <h2 className="heading-section">
            Contribution{" "}
            <span className="text-gradient">Thesis</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
          {THESIS_ITEMS.map((item) => (
            <FadeIn key={item.number} delay={Number(item.number) * 0.1}>
              <div
                className="border-l-2 pl-6 py-2"
                style={{ borderColor: item.color }}
              >
                <span
                  className="text-sm font-mono"
                  style={{ color: item.color }}
                >
                  {item.number}
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold mt-2"
                  style={{
                    fontFamily: "var(--font-heading), system-ui, sans-serif",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
