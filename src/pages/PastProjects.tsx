import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BlurReveal } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, BarChart2, Megaphone, Wrench, TrendingUp } from 'lucide-react'

const cases = [
  {
    icon: <BarChart2 size={20} />,
    tag: 'Social Impact Research',
    org: 'Mental Health CT',
    title: 'Survey Research & Impact Evaluation',
    label: 'Research',
    labelColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    summary:
      'Mental Health CT needed a structured way to measure program effectiveness and communicate outcomes to funders. Their data collection was manual and inconsistent.',
    work: [
      'Digitized existing paper surveys and redesigned collection methodology',
      'Ran data analysis across multiple program cohorts',
      'Produced a comprehensive report with methodology, outcomes, and recommendations',
    ],
    outcome:
      '"Working with YHCC was a seamless experience, and the results were invaluable. We\'ve already incorporated several of the findings into grants." — Bethany Simmonds, Senior Director of Advancement',
  },
  {
    icon: <Wrench size={20} />,
    tag: 'Operations & Analytics',
    org: 'National Blood Services Organization',
    title: 'Fleet Resource Planning Model',
    label: 'Operations',
    labelColor: 'bg-blue-50 text-blue-700 border-blue-100',
    summary:
      'A national blood services organization needed a data-driven approach to projecting vehicle fleet costs and planning replacement schedules across a multi-year horizon.',
    work: [
      'Mapped operational processes and lifecycle data for the vehicle fleet',
      'Built a dynamic 10-year resource planning model projecting replacement costs',
      'Delivered scenario analysis tools for leadership decision-making',
    ],
    outcome:
      'The planning model enabled structured capital allocation decisions and a defensible fleet strategy for their board.',
  },
  {
    icon: <Megaphone size={20} />,
    tag: 'Visibility & Growth',
    org: 'Regional Healthcare Nonprofit',
    title: 'Digital Engagement & Donor Outreach Strategy',
    label: 'Growth',
    labelColor: 'bg-violet-50 text-violet-700 border-violet-100',
    summary:
      'A regional nonprofit had strong programs but limited reach beyond its immediate network. They needed a strategy to grow donor engagement and expand community visibility.',
    work: [
      'Conducted a full audit of digital presence and outreach channels',
      'Identified high-potential donor segments and partnership opportunities',
      'Delivered a multi-channel growth roadmap with prioritized action items',
    ],
    outcome:
      'The organization left with a concrete engagement strategy and a prioritized list of partnership targets, ready to execute immediately.',
  },
  {
    icon: <TrendingUp size={20} />,
    tag: 'Market Strategy',
    org: 'Digital Health Startup',
    title: 'Connecticut Market Entry Analysis',
    label: 'Strategy',
    labelColor: 'bg-amber-50 text-amber-700 border-amber-100',
    summary:
      'A digital health startup preparing to launch in the Connecticut market needed a clear picture of the competitive landscape before committing resources.',
    work: [
      'Mapped the Connecticut digital health ecosystem and key competitors',
      'Identified differentiation opportunities and underserved patient segments',
      'Delivered a positioning brief and market entry framework',
    ],
    outcome:
      'The startup used the competitive landscape report to refine their go-to-market message and prioritize initial outreach targets.',
  },
]

export default function PastProjects() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}><p className="label-eyebrow text-white/40 mb-4">Our Work</p></BlurReveal>
          <BlurReveal delay={0.15}><h1 className="text-[2.75rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">Past Projects</h1></BlurReveal>
          <BlurReveal delay={0.25}><p className="text-white/60 text-base font-normal max-w-md leading-relaxed">Real projects, real clients, real outcomes. Here's what YHCC has worked on.</p></BlurReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <StaggerContainer>
            {cases.map(({ icon, tag, org, title, summary, work, outcome, label, labelColor }) => (
              <StaggerItem key={title}>
                <HoverCard className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden">
                  <div className="p-8 grid md:grid-cols-[1fr_1.05fr] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                        <span className="text-yale-teal">{icon}</span>
                        <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gray-400">{tag}</span>
                        <span className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full border ${labelColor}`}>{label}</span>
                      </div>
                      <p className="text-[11px] font-bold text-yale-teal uppercase tracking-[0.12em] mb-1">{org}</p>
                      <h2 className="text-[1.2rem] font-bold text-yale-blue mb-3 tracking-tight leading-tight">{title}</h2>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">{summary}</p>
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-3">What we did</p>
                      <ul className="space-y-2">
                        {work.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-surface border border-gray-100 rounded-xl p-6">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-yale-teal mb-3">Outcome</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{outcome}</p>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-3">Start a project</p>
            <h2 className="text-[2rem] font-bold text-white mb-4 tracking-tight">Think we could help your organization?</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Tell us about your challenge. We scope each engagement around your actual problem and respond within a few days.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
