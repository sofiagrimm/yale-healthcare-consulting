import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, GraduationCap, Stethoscope, Globe, Microscope } from 'lucide-react'

const values = [
  {
    title: 'Impact-First',
    desc: 'Every engagement is chosen for its potential to improve patient care, organizational efficiency, or community health outcomes.',
  },
  {
    title: 'Intellectual Rigor',
    desc: 'We bring the analytical standards of Yale\'s academic culture to every deliverable — data-driven, clearly argued, and well-documented.',
  },
  {
    title: 'Radical Accessibility',
    desc: 'All consulting is pro bono. We exist to give organizations access to strategic talent they otherwise couldn\'t afford.',
  },
  {
    title: 'Interdisciplinary Edge',
    desc: 'Our teams combine medicine, public health, policy, engineering, and economics because the best healthcare solutions draw from all of them.',
  },
]

const timeline = [
  {
    year: 'Founded',
    event: 'YHCC established as a Dwight Hall at Yale member organization, bringing student consulting to local nonprofits.',
  },
  {
    year: 'First Engagements',
    event: 'Completed inaugural consulting projects with Connecticut healthcare nonprofits, delivering survey research and strategic recommendations.',
  },
  {
    year: 'Growth',
    event: 'Expanded to 50+ members across Yale College and graduate schools; launched four formal practice areas.',
  },
  {
    year: 'Today',
    event: 'Active engagements with 10+ organizations; alumni in medical school, consulting, and public health roles across the country.',
  },
]

const afterPaths = [
  { icon: <Stethoscope size={20} />, title: 'Medicine', desc: 'MD and MD–PhD programs at top medical schools.' },
  { icon: <GraduationCap size={20} />, title: 'Consulting', desc: 'Healthcare strategy at leading consulting firms.' },
  { icon: <Globe size={20} />, title: 'Public Health & Policy', desc: 'MPH programs, fellowships, and government roles.' },
  { icon: <Microscope size={20} />, title: 'Research & Industry', desc: 'Academic labs, biotech, and health systems innovation.' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-yale-blue text-white py-28 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">About YHCC</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
              Driven by a passion for healthcare innovation and social impact.
            </h1>
            <p className="text-white/75 text-lg font-light max-w-xl leading-relaxed">
              We are a student-led consulting organization at Yale — and a proud member of Dwight Hall.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-3">Our Mission</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-6 leading-snug">
              Bridging the gap between academic excellence and healthcare practice.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              YHCC was founded after witnessing the strategic gaps that hinder healthcare organizations —
              especially those serving under-resourced communities. We saw that Yale students had the
              skills, motivation, and time to help. So we built the infrastructure to connect them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we partner with hospitals, nonprofits, and community health organizations across
              Connecticut and beyond, providing the kind of structured, evidence-based analysis that
              organizations use to improve operations, secure grants, and serve patients better.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-4">
              {timeline.map(({ year, event }) => (
                <div key={year} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-28 text-right">
                    <span className="text-xs font-bold text-yale-teal uppercase tracking-wide">{year}</span>
                  </div>
                  <div className="w-px bg-gray-200 self-stretch relative">
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yale-blue" />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pb-4">{event}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">What We Stand For</p>
            <h2 className="text-3xl font-bold text-yale-blue">Our Values</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <h3 className="text-base font-bold text-yale-blue mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── After YHCC ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">Career Outcomes</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-3">After YHCC</h2>
            <p className="text-gray-500 max-w-xl">
              The skills built at YHCC — structured problem-solving, client communication, data-driven
              analysis — translate directly to every path in healthcare.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {afterPaths.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="text-yale-teal mb-4">{icon}</div>
                  <h3 className="text-sm font-bold text-yale-blue mb-1.5">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-yale-blue relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Ready to connect?</p>
            <h2 className="text-3xl font-bold text-white mb-4">Work with us or join our team.</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Whether you represent a healthcare organization seeking strategic support, or a Yale student
              ready to make an impact, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Partner With Us <ArrowRight size={14} />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                Meet the Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
