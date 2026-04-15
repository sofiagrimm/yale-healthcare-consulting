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
    desc: 'We help organizations understand their impact, benchmark their performance, and make the case for continued investment.',
    bullets: [
      'Social Impact Evaluations & Social ROI',
      'Performance Metrics & KPI Frameworks',
      'Stakeholder Engagement & Survey Research',
      'Market Research & Industry Forecasts',
    ],
    example: 'Delivered digitized survey research and a comprehensive outcomes report used directly in grant applications for a Connecticut mental health nonprofit.',
  },
  {
    icon: <Megaphone size={24} />,
    label: 'Practice Area 02',
    title: 'Visibility & Growth',
    desc: 'From brand strategy to partnership development, we help organizations expand their reach and accelerate their mission.',
    bullets: [
      'Brand Awareness & Digital Optimization',
      'Multi-channel Engagement Strategies',
      'Growth & Market Development Roadmaps',
      'Partnership Strategy & Product Launch',
    ],
    example: 'Developed a digital engagement strategy and multi-channel outreach framework for a regional healthcare nonprofit looking to expand donor and patient reach.',
  },
  {
    icon: <Wrench size={24} />,
    label: 'Practice Area 03',
    title: 'Product & Operations',
    desc: 'We dig into the operational data to find inefficiencies, model scenarios, and build tools that support better decisions.',
    bullets: [
      'Operational Analytics & Process Improvement',
      'Annual Resource Planning & Fleet Modeling',
      'Performance Dashboards & Data Modeling',
      'MVP Design & User Insights',
    ],
    example: 'Built an Annual Resource Planning fleet strategy model for a national blood services organization, projecting vehicle lifecycle costs and replacement timelines.',
  },
  {
    icon: <Sparkles size={24} />,
    label: 'Practice Area 04',
    title: 'Custom Solutions',
    desc: 'Not every challenge fits a standard framework. We collaborate closely to scope and execute engagements built around your specific needs.',
    bullets: [
      'Tailored project scoping and discovery',
      'Cross-functional team assembly',
      'Flexible timelines and deliverable formats',
      'Long-term partnership options available',
    ],
    example: 'Collaborated with a digital health startup to scope a market entry analysis and competitive landscape review ahead of a Connecticut product launch.',
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
              Comprehensive consulting solutions for healthcare organizations.
            </h1>
            <p className="text-white/75 text-lg font-light max-w-xl leading-relaxed">
              Four practice areas. One mission: rigorous, actionable strategy delivered pro bono.
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-yale-teal mb-3">Example Engagement</p>
                    <p className="text-sm text-gray-600 leading-relaxed italic">&ldquo;{example}&rdquo;</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">Our Clients</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-3">Recent Partner Organizations</h2>
            <p className="text-gray-500">
              Proud to partner with leading healthcare organizations across Connecticut and beyond.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
              <img
                src={clientsImg}
                alt="YHCC Client Organizations"
                className="max-w-full h-auto object-contain max-h-24"
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
              <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide">
                Working with the Yale Healthcare Consulting Collective was a{' '}
                <span className="font-semibold">seamless experience</span>, and the results were{' '}
                <span className="font-semibold">invaluable</span>. Their team provided{' '}
                <span className="bg-white/20 px-1 rounded">digitized surveys</span>,{' '}
                <span className="bg-white/20 px-1 rounded">thorough data analysis</span>, and a{' '}
                <span className="bg-white/20 px-1 rounded">comprehensive report</span> outlining methodology,
                outcomes, and actionable recommendations. We have already incorporated several findings into{' '}
                <span className="font-semibold underline decoration-white/40 underline-offset-2">grants</span>.
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
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Ready to work together?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Tell us about your organization and the challenge you're facing. We'll scope an engagement
            and assemble the right team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yale-blue text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
