import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, BarChart2, Megaphone, Wrench, Sparkles } from 'lucide-react'
// @ts-ignore
import clientsImg from '/Clients.png'

const services = [
  {
    icon: <BarChart2 size={24} />,
    label: 'Practice Area 01',
    title: 'Social Impact & Research',
    desc: 'Helping organizations understand what their work is actually doing — and build the evidence base to show it to funders and stakeholders.',
    bullets: [
      'Social impact evaluations and social ROI analysis',
      'Survey design, digitization, and data analysis',
      'Performance metrics and KPI frameworks',
      'Market research and competitive landscape reviews',
    ],
    example: 'We ran a full survey research project for Mental Health CT — digitized their data collection, analyzed results, and wrote a report they used directly in grant applications.',
  },
  {
    icon: <Megaphone size={24} />,
    label: 'Practice Area 02',
    title: 'Visibility & Growth',
    desc: 'Strategy for organizations that need to reach more people — whether that means patients, donors, partners, or the public.',
    bullets: [
      'Brand and digital presence audits',
      'Multi-channel outreach and engagement strategy',
      'Partnership identification and outreach frameworks',
      'Growth roadmaps and market development plans',
    ],
    example: 'Developed a digital engagement and donor outreach strategy for a regional nonprofit looking to expand beyond its existing network.',
  },
  {
    icon: <Wrench size={24} />,
    label: 'Practice Area 03',
    title: 'Operations & Analytics',
    desc: 'Digging into operational data to find inefficiencies, model future scenarios, and build tools that help leadership make better calls.',
    bullets: [
      'Operational process mapping and improvement',
      'Annual resource planning and fleet modeling',
      'Performance dashboards and data models',
      'Decision-support tools and scenario analysis',
    ],
    example: 'Built an annual resource planning model for a national blood services organization — projecting vehicle lifecycle costs and replacement schedules over a 10-year horizon.',
  },
  {
    icon: <Sparkles size={24} />,
    label: 'Practice Area 04',
    title: 'Custom Projects',
    desc: 'Some problems don\'t fit a standard service offering. We\'re willing to scope something from scratch if the project is a good fit.',
    bullets: [
      'Discovery calls to scope the problem together',
      'Team assembly based on the specific skill needs',
      'Flexible deliverable formats',
      'Longer-term partnerships for ongoing work',
    ],
    example: 'Worked with a digital health startup to map the Connecticut competitive landscape and identify market entry positioning ahead of their product launch.',
  },
]

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-yale-blue text-white py-28 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
              What we work on.
            </h1>
            <p className="text-white/75 text-lg font-light max-w-xl leading-relaxed">
              Four practice areas. Scoped around your actual problem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <StaggerContainer>
            {services.map(({ icon, label, title, desc, bullets, example }) => (
              <StaggerItem key={title}>
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-yale-teal">{icon}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
                    </div>
                    <h3 className="text-xl font-bold text-yale-blue mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                    <ul className="space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-yale-teal mb-3">A recent project</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{example}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">Who We've Worked With</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-3">Our clients</h2>
            <p className="text-gray-500">
              Healthcare nonprofits, health systems, and community organizations — mostly in Connecticut.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 flex items-center justify-center">
              <img
                src={clientsImg}
                alt="YHCC Client Organizations"
                className="w-full h-auto object-contain max-h-48"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-24 px-6 bg-yale-blue relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="text-8xl text-white/10 font-serif leading-none select-none mb-2">&ldquo;</div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-10">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Working with YHCC was a seamless experience, and the results were invaluable. Their team
                provided digitized surveys, thorough data analysis, and a comprehensive report outlining
                methodology, outcomes, and actionable recommendations. We've already incorporated several
                of the findings into grants.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Bethany Simmonds</div>
                  <div className="text-white/60 text-xs mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-3">Start a project</p>
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Think we could help?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Tell us what you're working on. We'll scope an engagement and get back to you within a few days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yale-blue text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
