import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, BarChart2, Megaphone, Wrench, TrendingUp } from 'lucide-react'

const cases = [
  {
    icon: <BarChart2 size={22} />,
    tag: 'Social Impact Research',
    org: 'Mental Health CT',
    title: 'Survey Research & Impact Evaluation',
    summary:
      'Mental Health CT needed a structured way to measure program effectiveness and communicate outcomes to funders. Their data collection was manual and inconsistent.',
    work: [
      'Digitized existing paper surveys and redesigned collection methodology',
      'Ran data analysis across multiple program cohorts',
      'Produced a comprehensive report with methodology, outcomes, and recommendations',
    ],
    outcome:
      'The final report was incorporated directly into grant applications. "We\'ve already incorporated several of the findings into grants." — Bethany Simmonds, Senior Director of Advancement',
    label: 'Mental Health',
  },
  {
    icon: <Wrench size={22} />,
    tag: 'Operations & Analytics',
    org: 'National Blood Services Organization',
    title: 'Fleet Resource Planning Model',
    summary:
      'A national blood services organization needed a data-driven approach to projecting vehicle fleet costs and planning replacement schedules across a multi-year horizon.',
    work: [
      'Mapped operational processes and lifecycle data for the vehicle fleet',
      'Built a dynamic 10-year resource planning model projecting replacement costs',
      'Delivered scenario analysis tools for leadership decision-making',
    ],
    outcome:
      'The planning model enabled the organization to make structured capital allocation decisions and present a defensible fleet strategy to their board.',
    label: 'Operations',
  },
  {
    icon: <Megaphone size={22} />,
    tag: 'Visibility & Growth',
    org: 'Regional Healthcare Nonprofit',
    title: 'Digital Engagement & Donor Outreach Strategy',
    summary:
      'A regional nonprofit had strong programs but limited reach beyond its immediate network. They needed a strategy to grow donor engagement and expand community visibility.',
    work: [
      'Conducted a full audit of digital presence and outreach channels',
      'Identified high-potential donor segments and partnership opportunities',
      'Delivered a multi-channel growth roadmap with prioritized action items',
    ],
    outcome:
      'The organization left with a concrete engagement strategy and a prioritized list of partnership targets, ready to execute in the following quarter.',
    label: 'Growth',
  },
  {
    icon: <TrendingUp size={22} />,
    tag: 'Market Strategy',
    org: 'Digital Health Startup',
    title: 'Connecticut Market Entry Analysis',
    summary:
      'A digital health startup preparing to launch in the Connecticut market needed a clear picture of the competitive landscape and positioning before committing resources.',
    work: [
      'Mapped the Connecticut digital health ecosystem and key competitors',
      'Identified differentiation opportunities and underserved patient segments',
      'Delivered a positioning brief and market entry framework',
    ],
    outcome:
      'The startup used the competitive landscape report to refine their go-to-market message and prioritize initial outreach targets.',
    label: 'Strategy',
  },
]

const tagColors: Record<string, string> = {
  'Mental Health': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Operations': 'bg-blue-50 text-blue-700 border-blue-100',
  'Growth': 'bg-violet-50 text-violet-700 border-violet-100',
  'Strategy': 'bg-amber-50 text-amber-700 border-amber-100',
}

export default function CaseStudies() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-28 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-8%] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Our Work</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
              Case Studies
            </h1>
            <p className="text-white/75 text-lg font-light max-w-xl leading-relaxed">
              Real projects, real clients, real outcomes. Here's what YHCC has worked on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <StaggerContainer>
            {cases.map(({ icon, tag, org, title, summary, work, outcome, label }) => (
              <StaggerItem key={title}>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="p-8 grid md:grid-cols-[1fr_1.1fr] gap-8 items-start">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className="text-yale-teal">{icon}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{tag}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagColors[label]}`}>
                          {label}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-yale-teal uppercase tracking-wide mb-1">{org}</p>
                      <h2 className="text-xl font-bold text-yale-blue mb-3">{title}</h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{summary}</p>

                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What we did</h4>
                      <ul className="space-y-2">
                        {work.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right — Outcome */}
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-yale-teal mb-3">Outcome</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-yale-blue relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Start a project</p>
            <h2 className="text-3xl font-bold text-white mb-4">Think we could help your organization?</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Tell us about your challenge. We scope each engagement around your actual problem and get back to you within a few days.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
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
