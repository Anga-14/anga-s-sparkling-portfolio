import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  profile,
  projects,
  skills,
  education,
  qualifications,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anga Jonas | Marketing Intern & Practical Trainee" },
      {
        name: "description",
        content:
          "Portfolio of Anga Jonas, a Marketing Intern and Practical Trainee in Khayelitsha, Cape Town. Marketing Management N6, AI Bootcamp, and live project work.",
      },
      {
        property: "og:title",
        content: "Anga Jonas | Marketing Intern & Practical Trainee",
      },
      {
        property: "og:description",
        content:
          "Marketing Intern and Practical Trainee in Cape Town. Skills, qualifications, CV and live projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Anga Jonas | Marketing Intern & Practical Trainee",
      },
      {
        name: "twitter:description",
        content:
          "Marketing Intern and Practical Trainee in Cape Town. Skills, qualifications, CV and live projects.",
      },
    ],
  }),
  component: Index,
});

const serif = { fontFamily: "'Fraunces', serif" } as const;

function Index() {
  return (
    <main
      className="min-h-screen bg-cream text-ink"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand">
        <div aria-hidden="true" className="hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6 pt-14 pb-16">
          <div className="reveal flex items-center gap-5 sm:gap-7">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="size-32 shrink-0 rounded-full object-cover shadow-xl ring-4 ring-cream/25 sm:size-40"
              />
            ) : (
              <span
                className="flex size-32 shrink-0 items-center justify-center rounded-full bg-brand-2 text-2xl font-semibold text-cream ring-4 ring-cream/20 sm:size-40"
                aria-label="Profile photo placeholder"
              >
                AJ
              </span>
            )}

            <div>
              <h1
                className="text-balance font-semibold text-cream"
                style={{ ...serif, fontSize: "clamp(2rem, 9vw, 2.75rem)", lineHeight: 1.05 }}
              >
                {profile.name}
              </h1>
              <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-cream/70">
                {profile.role}
              </p>
            </div>
          </div>

          <p
            className="reveal mt-6 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-medium text-cream/85 ring-1 ring-cream/20"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="size-2 rounded-full bg-brand-accent" aria-hidden="true" />
            Open to internships · {profile.location}
          </p>

          <p className="reveal mt-4 max-w-2xl leading-relaxed text-cream/80" style={{ animationDelay: "0.1s" }}>
            I am a motivated Marketing Intern / Practical Trainee based in {profile.location}, with a
            Marketing Management N6 qualification and hands-on experience across AI, digital
            communication and customer-focused projects. I bring strong computer literacy, clear
            communication and calm time management — and I am eager to contribute to a marketing
            team while growing my practical skills.
          </p>


          <div className="reveal mt-7 flex flex-wrap gap-3" style={{ animationDelay: "0.18s" }}>
            <a href="#contact" className="btn-accent">
              Get in touch
            </a>
            <a
              href={profile.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View GitHub
            </a>
            <a
              href={profile.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View LinkedIn
            </a>
            <a href="#cv" className="btn-outline">
              View CV
            </a>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-mist">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Selected work
          </p>
          <h2
            className="reveal mt-2 text-[1.75rem] font-semibold text-brand"
            style={{ ...serif, lineHeight: 1.1 }}
          >
            Projects
          </h2>

          <p className="mt-2 text-sm text-mute">
            Each project opens in a new tab — the live app, or the code behind it.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="reveal lift group relative flex flex-col overflow-hidden rounded-2xl bg-surface p-6 ring-1 ring-black/5"
                style={{ animationDelay: `${0.08 + i * 0.06}s` }}
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-brand-accent" />
                <span
                  className="pointer-events-none absolute -right-4 -top-3 select-none text-[5rem] font-bold leading-none text-brand/5"
                  style={serif}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-ink" style={serif}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.blurb}</p>
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent-soft"
                  >
                    GitHub Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Strengths
          </p>
          <h2 className="reveal mt-2 text-[1.75rem] font-semibold text-brand" style={{ ...serif, lineHeight: 1.1 }}>
            What I bring
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {skills.map((s, i) => (
              <div
                key={s.title}
                className="reveal lift rounded-[10px] bg-surface p-4 ring-1 ring-black/5"
                style={{ animationDelay: `${0.08 + i * 0.06}s` }}
              >
                <p className="text-base font-semibold text-ink">
                  {s.title}
                </p>
                <p className="mt-1 text-sm text-mute">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            On paper
          </p>
          <h2 className="reveal mt-2 text-[1.75rem] font-semibold text-brand" style={{ ...serif, lineHeight: 1.1 }}>
            Curriculum Vitae
          </h2>


          <div className="mt-6 rounded-xl bg-cream p-5 ring-1 ring-black/5">
            <p className="text-lg font-semibold text-ink">{profile.name}</p>
            <p className="text-sm text-mute">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-1 text-sm text-mute break-all">
              {profile.phoneDisplay} · {profile.personalEmail} · {profile.workEmail}
            </p>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Profile
            </h3>

            <p className="mt-2 text-sm text-ink">
              I am a dedicated Marketing Intern / Practical Trainee with a Marketing Management N6
              qualification and practical experience in AI, digital communication and
              customer-focused projects. I work well under pressure, manage my time effectively and
              communicate clearly in person and in writing. I am looking for an opportunity to
              grow within a marketing team while adding value from day one.
            </p>


            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Education
            </h3>

            <ul className="mt-2 space-y-2">
              {education.map((e) => (
                <li key={e.school} className="text-sm">
                  <span className="font-semibold text-ink">{e.school}</span>
                  <span className="text-mute"> — {e.detail} ({e.period})</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Qualifications
            </h3>

            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-ink">
              {qualifications.map((q) => (
                <li key={q.title}>
                  {q.title}
                  {q.certificateUrl && (
                    <a
                      href={q.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-1 rounded-full bg-brand-accent px-2 py-0.5 text-xs font-medium text-cream hover:opacity-90"
                    >
                      View certificate
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              Key skills
            </h3>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink">
              {skills.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          {profile.cvFile && (
            <div className="mt-5">
              <a
                href={profile.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                download
              >
                Download CV (PDF)
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Education */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Background
          </p>
          <h2 className="reveal mt-2 text-[1.75rem] font-semibold text-brand" style={{ ...serif, lineHeight: 1.1 }}>
            Education
          </h2>

          <ol className="mt-6 space-y-5 border-l border-brand/15 pl-5">
            {education.map((e, i) => (
              <li key={e.school} className="reveal relative" style={{ animationDelay: `${0.08 + i * 0.08}s` }}>
                <span className="absolute -left-[26px] top-1 size-3 rounded-full bg-brand-accent ring-4 ring-mist"></span>
                <p className="text-xs uppercase tracking-[0.15em] text-mute">{e.period}</p>
                <p className="mt-1 text-base font-semibold text-ink">{e.school}</p>
                <p className="mt-1 text-sm text-mute">{e.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 pb-16">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Certificates
          </p>
          <h2 className="reveal mt-2 text-[1.75rem] font-semibold text-brand" style={{ ...serif, lineHeight: 1.1 }}>
            Qualifications
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {qualifications.map((q, i) => (
              <div
                key={q.title}
                className="reveal lift rounded-[10px] bg-surface p-4 ring-1 ring-black/5"
                style={{ animationDelay: `${0.08 + i * 0.06}s` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="text-base font-semibold text-ink">{q.title}</p>
                  {q.certificateUrl && (
                    <a
                      href={q.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent text-xs"
                    >
                      View certificate
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-mute">{q.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-brand">
        <div aria-hidden="true" className="hero-glow" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <h2 className="reveal text-[1.85rem] font-semibold text-cream" style={{ ...serif, lineHeight: 1.1 }}>
            Let&apos;s talk
          </h2>
          <p className="reveal mt-2 text-cream/75">
            Based in {profile.location}. Reach me directly and I&apos;ll reply fast.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href={`tel:${profile.phone}`}
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-2 px-4 py-3 ring-1 ring-cream/15"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/60">Phone</span>
                <span className="block text-base text-cream">{profile.phoneDisplay}</span>
              </span>
              <span className="text-xs text-cream/50">tap to call</span>
            </a>
            <a
              href={`mailto:${profile.personalEmail}`}
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-2 px-4 py-3 ring-1 ring-cream/15"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/60">
                  Personal email
                </span>
                <span className="block text-base text-cream break-all">{profile.personalEmail}</span>
              </span>
              <span className="text-xs text-cream/50">tap to email</span>
            </a>
            <a
              href={`mailto:${profile.workEmail}`}
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-2 px-4 py-3 ring-1 ring-cream/15"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/60">Work email</span>
                <span className="block text-base text-cream break-all">{profile.workEmail}</span>
              </span>
              <span className="text-xs text-cream/50">tap to email</span>
            </a>
            <a
              href={profile.linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-accent px-4 py-3"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/80">LinkedIn</span>
                <span className="block text-base font-semibold text-cream">
                  View my LinkedIn profile
                </span>
              </span>
              <span className="text-xs text-cream/70">opens LinkedIn</span>
            </a>
            <a
              href={profile.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal lift flex items-center justify-between gap-3 rounded-[10px] bg-brand-accent px-4 py-3"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.15em] text-cream/80">GitHub</span>
                <span className="block text-base font-semibold text-cream">
                  View my GitHub profile
                </span>
              </span>
              <span className="text-xs text-cream/70">opens new tab</span>
            </a>

          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cream/10 bg-brand">
        <div className="mx-auto max-w-3xl px-6 py-6 text-center text-xs text-cream/55">
          © {new Date().getFullYear()} {profile.name} · {profile.role} · {profile.location}
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const valid =
    name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    message.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    const subject = `Portfolio message from ${name.trim().slice(0, 80)}`;
    const body = `${message.trim().slice(0, 1500)}\n\n— ${name.trim().slice(0, 80)}\nReply to: ${email.trim().slice(0, 120)}`;
    window.location.href = `mailto:${profile.personalEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-[10px] bg-brand-2 px-4 py-3 text-cream placeholder:text-cream/45 ring-1 ring-cream/15 outline-none focus:ring-2 focus:ring-brand-accent";

  return (
    <form onSubmit={handleSubmit} className="reveal mt-8 space-y-3">
      <h3 className="text-base font-semibold text-cream">Send me a message</h3>
      <label className="sr-only" htmlFor="cf-name">
        Your name
      </label>
      <input
        id="cf-name"
        className={field}
        placeholder="Your name"
        maxLength={100}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="sr-only" htmlFor="cf-email">
        Your email
      </label>
      <input
        id="cf-email"
        type="email"
        className={field}
        placeholder="Your email"
        maxLength={255}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="sr-only" htmlFor="cf-message">
        Your message
      </label>
      <textarea
        id="cf-message"
        className={`${field} min-h-32 resize-y`}
        placeholder="Your message"
        maxLength={1500}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="btn-accent" disabled={!valid}>
        Send message
      </button>
      {sent && (
        <p className="text-sm text-cream/75">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
  );
}
