import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anga Jonas | Marketing & AI Graduate" },
      {
        name: "description",
        content:
          "Portfolio of Anga Jonas, a Marketing Management N6 graduate based in Khayelitsha, Cape Town. Skilled in communication, computer literacy, time management, and working under pressure.",
      },
      {
        property: "og:title",
        content: "Anga Jonas | Marketing & AI Graduate",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Anga Jonas, a Marketing Management N6 graduate based in Khayelitsha, Cape Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Anga Jonas | Marketing & AI Graduate",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Anga Jonas, a Marketing Management N6 graduate based in Khayelitsha, Cape Town.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream text-ink" style={{ fontFamily: "'Work Sans', sans-serif" }}>
      {/* Hero */}
      <section className="bg-brand-2">
        <div className="mx-auto max-w-[56ch] px-6 pt-10 pb-14">
          <p
            className="reveal text-xs font-medium uppercase tracking-[0.2em] text-accent"
            style={{ animationDelay: "0s" }}
          >
            Portfolio · Khayelitsha, Cape Town
          </p>
          <h1
            className="reveal mt-4 max-w-[12ch] text-balance font-serif font-semibold text-cream"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.5rem, 11vw, 3.25rem)",
              lineHeight: 1.02,
              animationDelay: "0.08s",
            }}
          >
            Anga Jonas
          </h1>
          <p
            className="reveal mt-3 max-w-[22ch] text-cream/80"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.25rem",
              lineHeight: 1.3,
              animationDelay: "0.16s",
            }}
          >
            Marketing graduate, confident and approachable, ready for real work.
          </p>
          <div className="reveal mt-7" style={{ animationDelay: "0.24s" }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-primary ring-1 ring-accent/60"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[56ch] px-6 py-12">
          <h2
            className="reveal text-balance font-serif text-[1.75rem] font-semibold text-brand"
            style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.1, animationDelay: "0.05s" }}
          >
            What I bring
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3">
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-base font-semibold text-ink">Computer literacy</p>
              <p className="mt-1 text-sm text-mute">
                Comfortable across everyday tools and quick to learn new software.
              </p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.16s" }}
            >
              <p className="text-base font-semibold text-ink">Excellent communication</p>
              <p className="mt-1 text-sm text-mute">
                Clear in writing and in person, whether explaining or listening.
              </p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.22s" }}
            >
              <p className="text-base font-semibold text-ink">Works well under pressure</p>
              <p className="mt-1 text-sm text-mute">
                Stays steady and focused when the deadline closes in.
              </p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.28s" }}
            >
              <p className="text-base font-semibold text-ink">Strong time management</p>
              <p className="mt-1 text-sm text-mute">
                Plans ahead and keeps commitments without dropping the ball.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[56ch] px-6 pb-12">
          <h2
            className="reveal text-balance font-serif text-[1.75rem] font-semibold text-brand"
            style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.1, animationDelay: "0.05s" }}
          >
            Education
          </h2>
          <ol className="mt-6 space-y-5 border-l border-brand/15 pl-5">
            <li className="reveal relative" style={{ animationDelay: "0.1s" }}>
              <span className="absolute -left-[26px] top-1 size-3 rounded-full bg-accent ring-4 ring-cream"></span>
              <p className="text-xs uppercase tracking-[0.15em] text-mute">2025 Jan – 2026 Jun</p>
              <p className="mt-1 text-base font-semibold text-ink">Northlink TVET College</p>
              <p className="mt-1 text-sm text-mute">Marketing Management N6.</p>
            </li>
            <li className="reveal relative" style={{ animationDelay: "0.18s" }}>
              <span className="absolute -left-[26px] top-1 size-3 rounded-full bg-brand-2 ring-4 ring-cream"></span>
              <p className="text-xs uppercase tracking-[0.15em] text-mute">2019 – 2023</p>
              <p className="mt-1 text-base font-semibold text-ink">Zonnebloeom High School</p>
              <p className="mt-1 text-sm text-mute">Completed Matric.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[56ch] px-6 pb-12">
          <h2
            className="reveal text-balance font-serif text-[1.75rem] font-semibold text-brand"
            style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.1, animationDelay: "0.05s" }}
          >
            Qualifications
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3">
            <div
              className="reveal lift rounded-[10px] bg-brand p-4 text-cream"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-base font-semibold">Matric</p>
              <p className="mt-1 text-sm text-cream/70">National Senior Certificate.</p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.16s" }}
            >
              <p className="text-base font-semibold text-ink">Marketing Management N6</p>
              <p className="mt-1 text-sm text-mute">Northlink TVET College.</p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.22s" }}
            >
              <p className="text-base font-semibold text-ink">Google Essentials Certificate</p>
              <p className="mt-1 text-sm text-mute">Foundations of digital marketing.</p>
            </div>
            <div
              className="reveal lift rounded-[10px] bg-cream p-4 ring-1 ring-black/5"
              style={{ animationDelay: "0.28s" }}
            >
              <p className="text-base font-semibold text-ink">AI Bootcamp</p>
              <p className="mt-1 text-sm text-mute">Practical intro to applied AI tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-brand">
        <div className="mx-auto max-w-[56ch] px-6 py-14">
          <h2
            className="reveal text-balance font-serif text-[1.85rem] font-semibold text-cream"
            style={{ fontFamily: "'Fraunces', serif", lineHeight: 1.1, animationDelay: "0.05s" }}
          >
            Let&apos;s talk
          </h2>
          <p className="reveal mt-2 text-cream/75" style={{ animationDelay: "0.1s" }}>
            Based in Khayelitsha, Cape Town. Reach me directly and I&apos;ll reply fast.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href="tel:0679932081"
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-2 px-4 py-3 ring-1 ring-accent/25"
              style={{ animationDelay: "0.14s" }}
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-accent">Phone</span>
                <span className="block text-base text-cream">067 993 2081</span>
              </span>
              <span className="text-xs text-cream/50">tap to call</span>
            </a>
            <a
              href="mailto:angajonas14@gmail.com"
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-2 px-4 py-3 ring-1 ring-accent/25"
              style={{ animationDelay: "0.2s" }}
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-accent">
                  Personal email
                </span>
                <span className="block text-base text-cream break-all">angajonas14@gmail.com</span>
              </span>
              <span className="text-xs text-cream/50">tap to email</span>
            </a>
            <a
              href="mailto:anga.jonas@capaciti.org.za"
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-accent px-4 py-3 ring-1 ring-accent ring-inset"
              style={{ animationDelay: "0.26s" }}
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-brand">Work email</span>
                <span className="block text-base font-semibold text-brand break-all">
                  anga.jonas@capaciti.org.za
                </span>
              </span>
              <span className="text-xs text-brand/70">tap to email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
