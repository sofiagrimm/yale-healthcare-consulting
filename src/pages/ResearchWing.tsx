import { Link } from 'react-router'
import { ArrowRight, BookOpen, BarChart2, Stethoscope, Landmark } from 'lucide-react'
import { FadeIn, BlurReveal, StaggerContainer, StaggerItem, HoverCard } from '../components/animations/FadeIn'

const focusAreas = [
  {
    icon: <BookOpen size={22} />,
    title: 'Literature Reviews',
    desc: 'We conduct literature reviews on a variety of topics from global health to patient outcomes in disease-specific settings.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Policy and Data Analysis',
    desc: 'Our data-driven analyses consist of analysis of large-scale datasets, healthcare policy research, and its impact on clinical settings.',
  },
]

const currentProjects = [
  {
    icon: <Stethoscope size={20} />,
    title: 'AI Tools for Pneumonia Diagnosis',
  },
  {
    icon: <Landmark size={20} />,
    title: 'Effects of Medicaid Changes on Behavioral Health Coverage',
  },
]

export default function ResearchWing() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 flex items-end px-6">
          <div className="max-w-6xl mx-auto w-full pb-6 md:pb-8">
            <BlurReveal delay={0.1}>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(7,32,80,0.6)]">
                Research
              </h1>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10 max-w-2xl">
            <p className="label-eyebrow mb-2">Our Work</p>
            <p className="prose-body">Academic-style research alongside our consulting engagements, done in partnership with Yale faculty and policy organizations.</p>
          </FadeIn>
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">What We Do</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">Two areas of focus</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <HoverCard className="bg-white border border-gray-100 rounded-2xl shadow-card p-8 h-full">
                  <span className="text-yale-teal">{icon}</span>
                  <h3 className="text-xl font-bold text-yale-blue mt-4 mb-3 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Fall Semester</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">Current Research Projects</h2>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap gap-6">
            {currentProjects.map(({ icon, title }) => (
              <StaggerItem key={title} className="w-full sm:w-[calc((100%-24px)/2)]">
                <HoverCard className="bg-white border border-gray-100 rounded-2xl shadow-card p-8 h-full flex items-start gap-4">
                  <span className="w-11 h-11 rounded-full bg-yale-blue/8 text-yale-blue flex items-center justify-center flex-shrink-0">
                    {icon}
                  </span>
                  <h3 className="text-[1.05rem] font-bold text-yale-blue tracking-tight leading-snug mt-1.5">{title}</h3>
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
            <p className="label-eyebrow text-white/40 mb-3">Get involved</p>
            <h2 className="text-[2rem] font-bold text-white mb-4 tracking-tight">Interested in our research?</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Reach out to learn more about the Research Wing, or apply to join a project team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Apply
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
