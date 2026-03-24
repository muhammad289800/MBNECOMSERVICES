import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | MBNECOM LLC",
  description:
    "Explore our AI automation services, custom app development, business intelligence, API integrations, and more.",
};

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Automation",
    description:
      "Automate your business workflows with intelligent AI systems. We design custom automation pipelines that handle repetitive tasks, process data, and make smart decisions — freeing your team to focus on what matters most.",
    features: [
      "Workflow automation & orchestration",
      "AI-powered data processing",
      "Intelligent document handling",
      "Email and communication automation",
      "Scheduled task management",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom App Development",
    description:
      "From idea to launch, we build powerful applications tailored to your specific needs. Web apps, mobile apps, SaaS platforms, and enterprise tools — all built with cutting-edge technology and best practices.",
    features: [
      "Web application development",
      "Mobile app development",
      "SaaS platform creation",
      "Enterprise tools & dashboards",
      "MVP development & prototyping",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Business Intelligence & Analytics",
    description:
      "Transform raw data into actionable insights. Our AI-powered analytics solutions help you understand trends, forecast outcomes, and make data-driven decisions with confidence.",
    features: [
      "Custom analytics dashboards",
      "AI-powered forecasting",
      "Real-time data visualization",
      "Performance tracking & KPIs",
      "Automated reporting",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 9.879" />
      </svg>
    ),
    title: "API Development & Integrations",
    description:
      "Connect your systems seamlessly. We build robust APIs and integrate third-party services to create a unified, efficient tech ecosystem for your business.",
    features: [
      "RESTful & GraphQL API development",
      "Third-party service integrations",
      "Payment gateway setup",
      "CRM & ERP integrations",
      "Webhook & event-driven systems",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "AI Consulting & Strategy",
    description:
      "Not sure where to start with AI? We provide strategic consulting to help you identify the right opportunities, create a roadmap, and implement AI solutions that deliver measurable results.",
    features: [
      "AI readiness assessment",
      "Technology roadmap planning",
      "Tool & platform selection",
      "Implementation strategy",
      "Team training & knowledge transfer",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Secure & Scalable Infrastructure",
    description:
      "We build solutions with security and scalability at the core. From cloud architecture to data protection, we ensure your systems are robust, compliant, and ready to grow.",
    features: [
      "Cloud architecture design",
      "Security best practices",
      "Scalable infrastructure setup",
      "Data encryption & compliance",
      "Performance optimization",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, challenges, and goals. Through detailed discussions, we identify the best opportunities for AI and automation.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "We create a tailored plan with clear milestones. Our designs focus on user experience, scalability, and long-term value.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our team builds your solution using modern technologies and AI best practices. We keep you involved with regular updates and demos.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your solution, provide training, and offer ongoing support. Your success is our priority — we're here for the long term.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="hero-glow bg-accent top-20 -left-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold">
              AI Solutions That{" "}
              <span className="gradient-text">Deliver Results</span>
            </h1>
            <p className="mt-6 text-xl text-muted leading-relaxed">
              From automation to custom app development, we provide
              comprehensive AI services designed to transform your business
              operations and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="gradient-border p-8 md:p-10 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-accent text-xs font-bold uppercase tracking-widest">
                          Service {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-6 text-muted text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-muted"
                        >
                          <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="mt-6 text-muted text-lg">
              A proven process that delivers results — from discovery to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="gradient-border p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Products & Projects */}
      <section className="py-24 border-t border-white/5 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Software That <span className="gradient-text">Scales</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Beyond client services, we build and maintain our own suite of powerful software products designed to solve complex business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* TGAutomation Project */}
            <div className="gradient-border glow rounded-2xl overflow-hidden bg-dark">
              <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-white">TGAutomation.org</h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider border border-green-500/20">Live</span>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    An advanced, AI-powered automation platform for Telegram and WhatsApp. We engineered this suite to handle massive scale marketing, intelligent group discovery, and seamless multi-account session management.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        Discovery Engine
                      </h4>
                      <p className="text-sm text-slate-400">Multi-backend AI search using DuckDuckGo, Bing, TGStat, and SearcheeBot to find high-value target groups.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Smart Scheduling
                      </h4>
                      <p className="text-sm text-slate-400">Automated broadcast campaigns with precise flood-wait management and customizable intervals.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                        Keyword Triggers
                      </h4>
                      <p className="text-sm text-slate-400">Active monitoring of chats to send immediate, relevant replies when users mention specific keywords.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Secure Architecture
                      </h4>
                      <p className="text-sm text-slate-400">End-to-end security for Telegram string sessions and WhatsApp Web device pairings.</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mr-2">Tech Stack:</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium">Python</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium">Flask</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium">Telethon</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-medium">Baileys WA</span>
                  </div>
                </div>
                
                <div className="md:col-span-2 bg-gradient-to-br from-primary/20 to-accent/10 border-l border-white/5 flex flex-col items-center justify-center p-8 min-h-[300px]">
                  <div className="w-24 h-24 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(108,99,255,0.4)]">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-2">Automate at Scale</h4>
                  <p className="text-slate-400 text-center text-sm mb-8">Reach thousands of targeted users across messaging platforms automatically.</p>
                  <a href="https://tgautomation.org" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-colors w-full text-center">
                    View Project
                  </a>
                </div>
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
              Have a Project in <span className="gradient-text">Mind</span>?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let&apos;s turn your idea into reality. Reach out today and
              let&apos;s discuss how we can help.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 gradient-bg rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
