import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "AI Automation",
    description:
      "Automate repetitive tasks with intelligent AI systems. From workflow automation to smart decision-making pipelines, we build solutions that save time and reduce costs.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom App Development",
    description:
      "We design and build powerful applications tailored to your business needs. Web apps, mobile apps, and enterprise tools — crafted with modern technology.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights. Our AI-powered analytics help you understand trends, predict outcomes, and make smarter business decisions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 9.879" />
      </svg>
    ),
    title: "API Integrations",
    description:
      "Seamlessly connect your systems with third-party services. We build robust API integrations that keep your tech stack unified and your data flowing.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "AI Consulting",
    description:
      "Not sure where to start with AI? We offer strategic consulting to help you identify opportunities and create a roadmap for AI adoption in your business.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Secure Solutions",
    description:
      "Security-first approach to every solution. We implement best practices in data protection, authentication, and compliance to keep your business safe.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "10x", label: "Efficiency Gains" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="hero-glow bg-primary top-1/4 -left-40" />
        <div className="hero-glow bg-accent top-1/3 right-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                AI-Powered Business Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up-delay-1">
              Automate. Innovate.
              <br />
              <span className="gradient-text">Scale Your Business.</span>
            </h1>

            <p className="mt-8 text-xl text-muted max-w-2xl leading-relaxed animate-fade-in-up-delay-2">
              MBNECOM LLC leverages cutting-edge artificial intelligence to build
              automation systems, custom applications, and intelligent solutions
              that transform how businesses operate.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/contact"
                className="px-8 py-4 gradient-bg rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Services That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              From AI automation to custom app development, we provide
              end-to-end solutions that help businesses innovate and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="gradient-border p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Featured Project Section */}
      <section className="py-24 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Featured Product
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
              Telegram & WhatsApp <span className="gradient-text">Automation Hub</span>
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Meet our flagship product: a powerful, multi-platform marketing and discovery engine designed to scale your community outreach on autopilot.
            </p>
          </div>

          <div className="gradient-border p-1 glow bg-dark/40 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm font-semibold mb-6 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Live in Production
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">TGAutomation.org</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  The ultimate marketing suite for Telegram and WhatsApp. Discover high-value groups, automate broadcasts, and manage multiple accounts from a single, beautiful dashboard.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-slate-200 block mb-1">Smart Group Discovery</strong>
                      <span className="text-slate-400 text-sm leading-relaxed">Find hyper-relevant Telegram groups using AI relevance scoring, DuckDuckGo, Bing, TGStat, and SearcheeBot integrations.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-slate-200 block mb-1">Multi-Account Management</strong>
                      <span className="text-slate-400 text-sm leading-relaxed">Manage multiple Telegram sessions and WhatsApp Web instances securely from one place with QR code auth.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-slate-200 block mb-1">Automated Campaigns</strong>
                      <span className="text-slate-400 text-sm leading-relaxed">Schedule interval or daily broadcasts. Advanced flood-wait protection and smart pacing to keep your accounts safe.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="text-slate-200 block mb-1">Keyword-Triggered Replies</strong>
                      <span className="text-slate-400 text-sm leading-relaxed">Automatically scan messages in your joined groups and send targeted replies when users mention specific keywords.</span>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <a href="https://tgautomation.org" target="_blank" rel="noopener noreferrer" className="px-6 py-3 gradient-bg rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                    Visit TGAutomation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center p-8 lg:p-12 relative overflow-hidden border-l border-white/5">
                {/* Abstract tech illustration replacing a literal screenshot */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative h-full w-full rounded-2xl border border-white/10 bg-dark-card/80 backdrop-blur-sm shadow-2xl p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-2 text-xs font-mono text-slate-500">tgautomation-dashboard</div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/3 h-20 rounded-lg bg-primary/20 border border-primary/30 flex flex-col justify-center items-center">
                          <span className="text-2xl font-bold text-white">12</span>
                          <span className="text-xs text-slate-400">Accounts</span>
                        </div>
                        <div className="w-1/3 h-20 rounded-lg bg-accent/20 border border-accent/30 flex flex-col justify-center items-center">
                          <span className="text-2xl font-bold text-white">450</span>
                          <span className="text-xs text-slate-400">Groups</span>
                        </div>
                        <div className="w-1/3 h-20 rounded-lg bg-green-500/20 border border-green-500/30 flex flex-col justify-center items-center">
                          <span className="text-2xl font-bold text-white">8k</span>
                          <span className="text-xs text-slate-400">Messages</span>
                        </div>
                      </div>
                      <div className="w-full h-12 rounded-lg bg-white/5 mt-4"></div>
                      <div className="w-full h-12 rounded-lg bg-white/5"></div>
                      <div className="w-3/4 h-12 rounded-lg bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Snippet */}
      <section className="py-24 bg-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
                Built on <span className="gradient-text">Innovation</span>
              </h2>
              <p className="mt-6 text-muted text-lg leading-relaxed">
                MBNECOM LLC is led by{" "}
                <strong className="text-white">Muhammad Muhammad</strong>, a
                visionary entrepreneur and CEO who founded the company with a
                clear mission: to make AI accessible and practical for businesses
                of every size.
              </p>
              <p className="mt-4 text-muted text-lg leading-relaxed">
                We specialize in developing AI-powered automation systems,
                custom applications, and intelligent business tools. Our lean,
                focused team delivers enterprise-grade solutions with the agility
                and personal touch of a dedicated partner.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary-light hover:text-accent transition-colors font-medium"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="gradient-border p-10 glow">
              <div className="space-y-6">
                {[
                  { label: "AI Expertise", value: 95 },
                  { label: "Client Satisfaction", value: 99 },
                  { label: "Delivery Speed", value: 90 },
                  { label: "Innovation", value: 97 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">
                        {skill.label}
                      </span>
                      <span className="text-sm font-medium text-accent">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-border p-12 md:p-16 text-center glow">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let&apos;s discuss how AI automation can save you time, reduce
              costs, and unlock new revenue streams for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 gradient-bg rounded-xl text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-xl"
              >
                Get in Touch
              </Link>
              <a
                href="https://www.linkedin.com/company/mbn-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
