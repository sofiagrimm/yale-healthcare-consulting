import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BlurReveal } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, GraduationCap, Stethoscope, Globe, Microscope } from 'lucide-react'

const values = [
  {
    title: 'The work comes first',
    desc: 'We care about producing deliverables that clients can actually use — not just completing a project. If a recommendation doesn\'t hold up, we say so.',
  },
  {
    title: 'Community impact is the point',
    desc: 'As a Dwight Hall member organization, we exist to serve organizations doing meaningful work in healthcare — not to pad resumes. The work has to matter.',
  },
  {
    title: 'Diverse teams on purpose',
    desc: 'Our teams are composed of health sciences, policy, engineering, and public health students on every project. Healthcare problems don\'t fit neatly into one discipline.',
  },
  {
    title: 'Honest about what we are',
    desc: 'We\'re students, not McKinsey. We\'re upfront about that. What we bring is time, rigor, and deep interest in the problem — which turns out to be pretty valuable.',
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
  { icon: <Stethoscope size={18} />, title: 'Medicine', desc: 'MD and MD–PhD programs at top medical schools.' },
  { icon: <GraduationCap size={18} />, title: 'Consulting', desc: 'Healthcare strategy at leading firms.' },
  { icon: <Globe size={18} />, title: 'Public Health', desc: 'MPH programs, fellowships, and government roles.' },
  { icon: <Microscope size={18} />, title: 'Research', desc: 'Academic labs, biotech, and health systems.' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-hero-gradient text-white py-16 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}>
            <p className="label-eyebrow text-white/40 mb-4">About YHCC</p>
          </BlurReveal>
          <BlurReveal delay={0.15}>
            <h1 className="text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1] max-w-2xl">
              YHCC is a healthcare-focused consulting organization run by Yale students.
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <p className="text-white/60 text-base font-normal max-w-lg leading-relaxed">
              A Dwight Hall member organization focused on social impact.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="label-eyebrow mb-3">Our Story</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-6 leading-tight tracking-tight">
              Yale student talent to combat inefficiencies in healthcare organizations.
            </h2>
            <p className="prose-body mb-4">
              Healthcare nonprofits — especially smaller ones — often don't have the internal capacity
              for the kind of research and strategy work they need. At the same time, Yale has hundreds
              of students with relevant skills and not enough ways to use them.
            </p>
            <p className="prose-body">
              YHCC was built to connect those two things. We take on projects, put together
              cross-disciplinary student teams, and deliver work that clients can bring to their boards,
              funders, and leadership.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-0">
              {timeline.map(({ year, event }, i) => (
                <div key={year} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-[10.5px] font-bold text-yale-teal uppercase tracking-[0.12em]">{year}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-yale-blue mt-1 flex-shrink-0" />
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 min-h-[36px] mt-1" />}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pb-5">{event}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">How We Work</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">A few things we believe in.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map(({ title, desc }) => (
              <StaggerItem key={title}>
                <HoverCard className="bg-white border border-gray-100 rounded-2xl p-7 shadow-card">
                  <h3 className="text-[15px] font-bold text-yale-blue mb-2 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── After YHCC ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Career Outcomes</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-3 tracking-tight">After YHCC</h2>
            <p className="prose-body max-w-xl">
              Members tend to say the consulting experience — working with clients, scoping problems,
              presenting findings — was some of the most useful preparation they had.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {afterPaths.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <HoverCard className="bg-surface border border-gray-100 rounded-2xl p-6">
                  <div className="text-yale-teal mb-4">{icon}</div>
                  <h3 className="text-sm font-bold text-yale-blue mb-1.5 tracking-tight">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-3">Get in touch</p>
            <h2 className="text-[2rem] font-bold text-white mb-4 tracking-tight">Want to work with us or join the team?</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Send us a note. We respond to every message and try to find a way to make it work.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight size={13} />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
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
