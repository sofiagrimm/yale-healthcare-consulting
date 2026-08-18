import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BlurReveal } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, BarChart2, Megaphone, Wrench, Bot } from 'lucide-react'
// @ts-ignore
import clientsImg from '/currentclients.png'

const services = [
  {
    icon: <BarChart2 size={22} />,
    label: 'Practice Area 01',
    title: 'Research & Evidence',
    desc: 'Helping organizations understand what their work is actually doing, and build the evidence base to show it to funders and stakeholders.',
    bullets: [
      'Social impact evaluations and social ROI analysis',
      'Survey design, digitization, and data analysis',
      'Performance metrics and KPI frameworks',
      'Market research and competitive landscape reviews',
      'Analyses of health policy and therapeutic landscapes',
      'Literature reviews to support research and grant applications',
    ],
    example: 'We ran a full survey research project for a regional mental health organization, digitized their data collection, analyzed results, and wrote a report they used directly in grant applications.',
  },
  {
    icon: <Megaphone size={22} />,
    label: 'Practice Area 02',
    title: 'Visibility & Growth',
    desc: 'Strategy for organizations that need to reach more people, whether that means patients, donors, partners, or the public.',
    bullets: [
      'Brand and digital presence audits',
      'Multi-channel outreach and engagement strategy',
      'Partnership identification and outreach frameworks',
      'Growth roadmaps and market development plans',
      'Benchmarking analyses comparing peer institutions and competitors',
      'Patient-facing and internal-facing content development (educational resources, process guides, communication tools)',
    ],
    example: 'Designed and piloted a research-grounded reproductive and menstrual health training curriculum for university administrators at Yale, with a roadmap for broader rollout across Connecticut institutions.',
  },
  {
    icon: <Wrench size={22} />,
    label: 'Practice Area 03',
    title: 'Operations & Analytics',
    desc: 'Digging into operational data to find inefficiencies, model future scenarios, and build tools that help leadership make better calls.',
    bullets: [
      'Patient journey mapping and care pathway analysis',
      'Operational process mapping and improvement',
      'Predictive economic modeling (budget scenarios, insurance reimbursement dynamics, legislative impact)',
      'Program and operational analyses with recommendations for targeted growth, efficiency, and resource allocation',
      'Performance dashboards and data models',
      'Decision-support tools and scenario analysis',
    ],
    example: 'Built an annual resource planning model for a national blood services organization, projecting vehicle lifecycle costs and replacement schedules over a 10-year horizon.',
  },
  {
    icon: <Bot size={22} />,
    label: 'Practice Area 04',
    title: 'AI & Technology',
    desc: 'Scoping, building, and evaluating AI-assisted solutions for healthcare organizations, from workflow automation to agentic tools that actually get used.',
    bullets: [
      'Determining, testing, and evaluating AI use cases to enhance operations and patient experience',
      'AI-assisted tools to streamline administrative workflows (internal knowledge search, document summarization)',
      'Agentic workflow design and implementation',
      'Technology landscape reviews for digital health organizations',
      'Custom scoping for organizations new to AI adoption',
    ],
    example: 'Conducted market research and competitive landscape analysis to develop a targeted outreach strategy for an early-stage AI startup, identifying key customer segments and go-to-market priorities to support nationwide product implementation.',
  },
]

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-hero-gradient text-white py-16 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}><p className="label-eyebrow text-white/40 mb-4">Our Services</p></BlurReveal>
          <BlurReveal delay={0.15}>
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">How We Create Impact</h1>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <p className="text-white/60 text-base font-normal max-w-md leading-relaxed">Four practice areas. Scoped around your problem.</p>
          </BlurReveal>
        </div>
      </section>

      {/* ── Engagement Structure ── */}
      <section className="py-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="bg-surface border border-gray-100 rounded-2xl px-6 md:px-8 py-6 flex flex-col gap-5">
              <div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-yale-teal mb-1">How We Engage</p>
                <p className="text-[15px] font-bold text-yale-blue tracking-tight">Our standard project model</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { num: '1', label: 'Project Leader' },
                  { num: '10', label: 'Weeks' },
                  { num: '6–9', label: 'Consultants' },
                  { num: '1', label: 'Executive Director' },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-[1.75rem] font-bold text-yale-blue leading-none tracking-tight">{num}</div>
                    <div className="text-[11px] text-gray-500 font-medium mt-1">{label}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Community impact is our primary goal as a Dwight Hall member organization.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-5">
          <StaggerContainer>
            {services.map(({ icon, label, title, desc, bullets, example }) => (
              <StaggerItem key={title}>
                <HoverCard className="bg-white border border-gray-100 rounded-2xl shadow-card p-8 grid md:grid-cols-[1fr_1.15fr] gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-yale-teal">{icon}</span>
                      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400">{label}</span>
                    </div>
                    <h3 className="text-xl font-bold text-yale-blue mb-3 tracking-tight">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{desc}</p>
                    <ul className="space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-surface border border-gray-100 rounded-xl p-6">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-yale-teal mb-3">A recent project</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{example}</p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="label-eyebrow mb-2">Who We've Worked With</p>
            <h2 className="text-[1.85rem] font-bold text-yale-blue mb-3 tracking-tight">Our clients</h2>
            <p className="prose-body">
              Healthcare nonprofits, health systems, and community organizations, mostly in Connecticut.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-6 flex items-center justify-center">
              <img
                src={clientsImg}
                alt="YHCC Client Organizations"
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-16 md:py-28 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl px-10 py-10">
              <div className="text-5xl text-white/15 font-serif leading-none select-none mb-5">&ldquo;</div>
              <p className="text-white text-lg md:text-xl font-light leading-[1.7] tracking-[-0.01em]">
                Working with YHCC was a seamless experience, and the results were invaluable. Their team
                provided digitized surveys, thorough data analysis, and a comprehensive report outlining
                methodology, outcomes, and actionable recommendations. We've already incorporated several
                of the findings into grants.
              </p>
              <div className="mt-8 pt-6 border-t border-white/12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Bethany Simmonds</div>
                  <div className="text-white/50 text-xs mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <p className="label-eyebrow mb-3">Start a project</p>
          <h2 className="text-[2rem] font-bold text-yale-blue mb-4 tracking-tight">Think we could help?</h2>
          <p className="prose-body max-w-md mx-auto mb-8">
            Tell us what you're working on. We'll scope an engagement and get back to you within a few days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yale-blue text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight size={13} />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
