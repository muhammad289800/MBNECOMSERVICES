import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | MBNECOM LLC",
  description:
    "Learn about MBNECOM LLC, our mission, and our CEO Muhammad Muhammad. We are a focused AI automation company building the future of business.",
};

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation First",
    description:
      "We stay at the forefront of AI technology, constantly exploring new tools and frameworks to deliver the most effective solutions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Quality & Reliability",
    description:
      "Every solution we build is production-ready, thoroughly tested, and designed for long-term reliability. We take pride in our craftsmanship.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Client Partnership",
    description:
      "We work closely with every client to understand their unique challenges and goals. Your success is our success — it's a true partnership.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Results Driven",
    description:
      "We measure success by the tangible impact we create — efficiency gains, cost savings, and new revenue streams for your business.",
  },
];

const timeline = [
  {
    year: "Founded",
    title: "MBNECOM LLC Established",
    description:
      "Muhammad Muhammad founded MBNECOM LLC with a vision to democratize AI automation for businesses of all sizes.",
  },
  {
    year: "Growth",
    title: "Expanding AI Services",
    description:
      "Built a portfolio of AI automation solutions, custom applications, and business intelligence tools for diverse clients.",
  },
  {
    year: "Today",
    title: "Leading AI Innovation",
    description:
      "Continuing to push the boundaries of what's possible with AI, delivering transformative solutions that drive real business outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-glow bg-primary top-20 -right-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold">
              The People Behind{" "}
              <span className="gradient-text">MBNECOM</span>
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed">
              We&apos;re a focused, agile team on a mission to bring the power
              of artificial intelligence to businesses that need it most.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-24 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="gradient-border p-10 glow flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full gradient-bg flex items-center justify-center text-5xl font-bold text-white mb-6 shadow-2xl">
                MM
              </div>
              <h3 className="text-2xl font-bold text-white">
                Muhammad Muhammad
              </h3>
              <p className="text-accent font-medium mt-1">
                Founder & CEO
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/mbn-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Leadership
              </span>
              <h2 className="mt-4 text-4xl font-bold">
                Meet Our <span className="gradient-text">CEO</span>
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                Muhammad Muhammad is the visionary founder and CEO of MBNECOM LLC.
                With a deep passion for artificial intelligence and business
                automation, he started the company to bridge the gap between
                cutting-edge AI technology and real-world business applications.
              </p>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                Under his leadership, MBNECOM LLC has grown into a trusted
                partner for businesses looking to leverage AI. Muhammad&apos;s
                hands-on approach means every client gets direct access to
                strategic thinking and technical expertise.
              </p>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                His vision: to make powerful AI tools accessible to businesses
                of every size, enabling them to compete with larger organizations
                through smarter automation and data-driven decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="gradient-border p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              The <span className="gradient-text">MBNECOM</span> Story
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-primary to-transparent mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent text-sm font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Portfolio & Projects */}
      <section className="py-24 border-t border-white/5 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Portfolio
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Engineering <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              We don't just build solutions for clients; we create our own enterprise-grade software to push the boundaries of what's possible with automation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gradient-border glow rounded-2xl overflow-hidden bg-dark/80 p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-48 h-48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm font-semibold mb-6 w-fit border border-green-500/20">
                  Live Product
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">TGAutomation.org</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                  A comprehensive automation suite designed for high-scale marketing on Telegram and WhatsApp. Built with a complex Python/Node.js microservices architecture to handle multi-session management securely.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Multi-backend AI Group Discovery (TGStat, Bing, SearcheeBot)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Automated broadcast scheduling with flood-wait protection</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Keyword-triggered auto-reply monitoring system</span>
                  </div>
                </div>
                <a href="https://tgautomation.org" target="_blank" rel="noopener noreferrer" className="inline-flex px-6 py-3 gradient-bg rounded-lg text-white font-semibold hover:opacity-90 transition-opacity items-center gap-2">
                  Explore TGAutomation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border p-12 md:p-16 text-center glow">
            <h2 className="text-4xl font-bold mb-6">
              Want to Work <span className="gradient-text">With Us</span>?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              We&apos;d love to hear about your project and explore how AI
              can help your business grow.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 gradient-bg rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
