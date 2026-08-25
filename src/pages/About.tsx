import { FadeIn, StaggerContainer, StaggerItem, HoverCard, BlurReveal } from '../components/animations/FadeIn'
import { GraduationCap, Stethoscope, Globe, Microscope, Lightbulb, Target, Users, TrendingUp } from 'lucide-react'
// @ts-ignore
import aboutHeroImg from '/about-hero.jpg'

const whoWeAreCards = [
  { icon: <Lightbulb size={18} />, title: 'Cross-disciplinary teams', desc: 'STEM, econ, public health, engineering, mixed on purpose.' },
  { icon: <Target size={18} />, title: 'Scoped to your needs', desc: 'We scope each project around your specific problem, not a template.' },
  { icon: <Users size={18} />, title: 'Consistent point of contact', desc: 'One team, one project lead, clear communication throughout.' },
  { icon: <TrendingUp size={18} />, title: 'Deliverables you can use', desc: 'Reports, models, and presentations built for decision-making.' },
]

const timeline = [
  {
    year: 'Founded in 2022',
    event: 'YHCC started as a small group of students focused on consulting for healthcare nonprofits in the New Haven area.',
  },
  {
    year: 'First Projects',
    event: 'Completed our first client engagements, survey research and outcomes analysis for local mental health and community health organizations.',
  },
  {
    year: 'Growth',
    event: 'Grew to 40+ members across Yale College. Established four practice areas and a structured project model.',
  },
  {
    year: 'Today',
    event: 'Completed projects with 10+ organizations based in Connecticut and nationwide, expanding beyond our New Haven community. Alumni in medical school, consulting, and public health roles across the country.',
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
      <section className="relative h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden">
        <img
          src={aboutHeroImg}
          alt="Yale University campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yale-blue-deeper/95 via-yale-blue-deeper/35 to-yale-blue-deeper/10" />
        <div className="absolute inset-0 flex items-end px-6">
          <div className="max-w-6xl mx-auto w-full pb-6 md:pb-8">
            <BlurReveal delay={0.1}>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(7,32,80,0.6)]">
                About YHCC
              </h1>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="label-eyebrow mb-3">Who We Are</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-5 leading-tight tracking-tight">
              A student consulting group at Yale.
            </h2>
            <p className="prose-body">
              We started YHCC because a lot of healthcare nonprofits in Connecticut don't have the
              bandwidth for the kind of structured research and strategy work they actually need.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {whoWeAreCards.map(({ icon, title, desc }) => (
                <HoverCard key={title} className="bg-surface border border-gray-100 rounded-xl p-5">
                  <div className="text-yale-teal mb-3">{icon}</div>
                  <h3 className="text-[13px] font-bold text-yale-blue mb-1.5 leading-tight">{title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-14 md:py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <p className="label-eyebrow mb-3">Our Story</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-6 leading-tight tracking-tight">
              Yale student talent to strengthen healthcare organizations and expand their impact.
            </h2>
            <p className="prose-body mb-4">
              Healthcare nonprofits, especially smaller ones, often don't have the internal capacity
              for the kind of research and strategy work they need. We take on projects, put together
              cross-disciplinary student teams, and deliver work that clients can bring to their boards,
              funders, and leadership.
            </p>
            <p className="prose-body">
              YHCC is also committed to engaging in high-impact research with Yale faculty and policy organizations across numerous aspects of healthcare, including health economics and policy, digital innovation, and global health.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="space-y-0 md:mt-10">
              {timeline.map(({ year, event }, i) => (
                <div key={year} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-[10.5px] font-bold text-yale-teal uppercase tracking-[0.1em] whitespace-nowrap">{year}</span>
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

      {/* ── After YHCC ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Career Outcomes</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-3 tracking-tight">After YHCC</h2>
            <p className="prose-body max-w-xl">
              Members tend to say the consulting experience, working with clients, scoping problems,
              presenting findings, was some of the most useful preparation they had.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {afterPaths.map(({ icon, title, desc }) => (
              <StaggerItem key={title} className="h-full">
                <HoverCard className="h-full flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-card">
                  <div className="text-yale-teal mb-4">{icon}</div>
                  <h3 className="text-sm font-bold text-yale-blue mb-1.5 tracking-tight">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
