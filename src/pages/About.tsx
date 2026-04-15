import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, GraduationCap, Stethoscope, Globe, Microscope } from 'lucide-react'

const values = [
  {
    title: 'The work comes first',
    desc: 'We care about producing deliverables that clients can actually use — not just completing a project. If a recommendation doesn\'t hold up, we say so.',
  },
  {
    title: 'No cost to clients, no exceptions',
    desc: 'Every engagement is free for the client. That\'s not a marketing line — it\'s the reason we exist. Most of our partners couldn\'t access this kind of support otherwise.',
  },
  {
    title: 'Diverse teams on purpose',
    desc: 'We deliberately mix pre-med, policy, engineering, and public health students on every project. Healthcare problems don\'t fit neatly into one discipline.',
  },
  {
    title: 'Honest about what we are',
    desc: 'We\'re students, not McKinsey. We\'re upfront about that. What we bring is time, rigor, and a genuine interest in the problem — which turns out to be pretty valuable.',
  },
]

const timeline = [
  {
    year: 'Founded',
    event: 'YHCC started as a Dwight Hall at Yale member organization, with a focus on consulting for Connecticut healthcare nonprofits.',
  },
  {
    year: 'First Projects',
    event: 'Completed our first client engagements — survey research and outcomes analysis for local mental health and community health organizations.',
  },
  {
    year: 'Growth',
    event: 'Grew to 50+ members across Yale College and the graduate schools. Established four practice areas and a structured project model.',
  },
  {
    year: 'Today',
    event: 'Active projects with 10+ organizations. Alumni in medical school, consulting, and public health roles across the country.',
  },
]

const afterPaths = [
  { icon: <Stethoscope size={20} />, title: 'Medicine', desc: 'MD and MD–PhD programs at top medical schools.' },
  { icon: <GraduationCap size={20} />, title: 'Consulting', desc: 'Healthcare strategy at leading firms.' },
  { icon: <Globe size={20} />, title: 'Public Health', desc: 'MPH programs, fellowships, and government roles.' },
  { icon: <Microscope size={20} />, title: 'Research', desc: 'Academic labs, biotech, and health systems.' },
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
              We're a student consulting group at Yale. Here's what that actually means.
            </h1>
            <p className="text-white/75 text-lg font-light max-w-xl leading-relaxed">
              A Dwight Hall member organization focused on healthcare consulting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-3">Our Story</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-6 leading-snug">
              We saw a gap and tried to fill it.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Healthcare nonprofits — especially smaller ones — often don't have the internal capacity
              for the kind of research and strategy work they need. At the same time, Yale has hundreds
              of students with relevant skills and not enough ways to use them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              YHCC was built to connect those two things. We take on real projects, put together
              cross-disciplinary student teams, and deliver work that clients can bring to their boards,
              funders, and leadership. No fee, no fluff.
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">How We Work</p>
            <h2 className="text-3xl font-bold text-yale-blue">A few things we believe in.</h2>
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
              Members tend to say the consulting experience — working with real clients, scoping problems,
              presenting findings — was some of the most useful preparation they had. Here's where they end up.
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Get in touch</p>
            <h2 className="text-3xl font-bold text-white mb-4">Want to work with us or join the team?</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Send us a note. We respond to every message and try to find a way to make it work.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight size={14} />
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
