import Link from "next/link";

export const metadata = {
  title: "Legal Notice & Privacy Policy | Hawig Ventures",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-white/40 hover:text-white/70 transition-colors text-sm mb-12 inline-block"
        >
          &larr; Back
        </Link>

        <h1 className="heading-section mb-16">
          Legal <span className="text-gradient">Notice</span>
        </h1>

        {/* Impressum */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}>
            Impressum
          </h2>
          <div className="text-white/70 space-y-4 leading-relaxed">
            <p>
              <strong className="text-white">Hawig Ventures UG (haftungsbeschr&auml;nkt)</strong>
            </p>
            <p>
              Herzogin-Juliana-Stra&szlig;e 7<br />
              55469 Simmern<br />
              Germany
            </p>
            <p>
              <strong className="text-white/90">Managing Director:</strong> David Hawig
            </p>
            <p>
              <strong className="text-white/90">Commercial Register:</strong> HRB 24975, Amtsgericht Bad Kreuznach
            </p>
            <p>
              <strong className="text-white/90">Email:</strong>{" "}
              <a
                href="mailto:info@hawig.xyz"
                className="text-brand-blue hover:text-white transition-colors"
              >
                info@hawig.xyz
              </a>
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}>
            Disclaimer
          </h2>
          <div className="text-white/70 space-y-4 leading-relaxed">
            <p>
              The content on this website is for informational purposes only and
              does not constitute investment advice, a recommendation, or a
              solicitation to buy or sell any assets. Any investment decisions
              should be made based on your own research and consultation with a
              qualified financial advisor.
            </p>
            <p>
              While we strive to keep the information on this website accurate
              and up to date, we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy,
              reliability, or suitability of the information provided.
            </p>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}>
            Privacy Policy (Datenschutzerkl&auml;rung)
          </h2>
          <div className="text-white/70 space-y-4 leading-relaxed">
            <h3 className="text-white/90 font-semibold mt-6">
              1. Responsible Party
            </h3>
            <p>
              The responsible party for data processing on this website is:
            </p>
            <p>
              Hawig Ventures UG (haftungsbeschr&auml;nkt)<br />
              Herzogin-Juliana-Stra&szlig;e 7<br />
              55469 Simmern, Germany<br />
              Email: info@hawig.xyz
            </p>

            <h3 className="text-white/90 font-semibold mt-6">
              2. Data Collection
            </h3>
            <p>
              This website does not collect, store, or process any personal data.
              We do not use cookies, analytics tools, tracking technologies, or
              any form of user monitoring. No data is transmitted to third
              parties.
            </p>

            <h3 className="text-white/90 font-semibold mt-6">
              3. Hosting
            </h3>
            <p>
              This website is hosted by a third-party provider. When you access
              this website, the hosting provider may automatically collect and
              store server log files that your browser transmits. These may
              include your IP address, browser type, operating system, referrer
              URL, and time of access. This data is collected on the basis of
              Art. 6(1)(f) GDPR (legitimate interest in ensuring the secure and
              efficient operation of the website) and is not combined with other
              data sources. Server log files are typically deleted automatically
              after a short period.
            </p>

            <h3 className="text-white/90 font-semibold mt-6">
              4. Your Rights
            </h3>
            <p>
              Under the General Data Protection Regulation (GDPR), you have the
              right to access, rectification, deletion, restriction of
              processing, data portability, and objection regarding your personal
              data. Since this website does not collect personal data beyond
              what is technically necessary for hosting, these rights are
              generally not applicable. If you have questions, please contact us
              at info@hawig.xyz.
            </p>

            <h3 className="text-white/90 font-semibold mt-6">
              5. External Links
            </h3>
            <p>
              This website may contain links to external websites. We have no
              control over the content and privacy practices of those sites and
              accept no responsibility for them.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
