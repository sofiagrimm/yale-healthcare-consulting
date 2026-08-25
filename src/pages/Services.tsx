import { FadeIn, StaggerContainer, StaggerItem, BlurReveal } from '../components/animations/FadeIn'
import { BarChart2, Megaphone, Wrench, Bot } from 'lucide-react'
// @ts-ignore
import clientsImg from '/currentclients.png'
// @ts-ignore
import servicesHeroImg from '/services-hero.jpg'

const services = [
  {
    icon: <BarChart2 size={22} />,
    title: 'Research & Evidence',
    bullets: ['Literature review', 'Policy analysis', 'Program evaluation', 'Data analysis'],
    example: 'We ran a full survey research project for a regional mental health organization, digitized their data collection, analyzed results, and wrote a report they used directly in grant applications.',
  },
  {
    icon: <Megaphone size={22} />,
    title: 'Visibility & Growth',
    bullets: ['Market positioning', 'Donor and stakeholder outreach', 'Brand strategy', 'Partnership development'],
    example: 'Designed and piloted a research-grounded reproductive and menstrual health training curriculum for university administrators at Yale, with a roadmap for broader rollout across Connecticut institutions.',
  },
  {
    icon: <Wrench size={22} />,
    title: 'Operations & Analytics',
    bullets: ['Cost modeling', 'Capacity and resource planning', 'Workflow mapping'],
    example: 'Built an annual resource planning model for a national blood services organization, projecting vehicle lifecycle costs and replacement schedules over a 10-year horizon.',
  },
  {
    icon: <Bot size={22} />,
    title: 'AI & Technology',
    bullets: ['Landscape scans of health tech', 'Implementation strategy', 'Tool prototyping', 'Go-to-market research'],
    example: 'Conducted market research and competitive landscape analysis to develop a targeted outreach strategy for an early-stage AI startup, identifying key customer segments and go-to-market priorities to support nationwide product implementation.',
  },
]

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden">
        <img
          src={servicesHeroImg}
          alt="Yale University campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yale-blue-deeper/95 via-yale-blue-deeper/35 to-yale-blue-deeper/10" />
        <div className="absolute inset-0 flex items-end px-6">
          <div className="max-w-6xl mx-auto w-full pb-6 md:pb-8">
            <BlurReveal delay={0.1}>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(7,32,80,0.6)]">
                Our Services
              </h1>
            </BlurReveal>
          </div>
        </div>
        <p className="absolute bottom-2 right-3 sm:bottom-3 sm:right-4 text-[10.5px] text-white/80 tracking-wide drop-shadow-[0_1px_4px_rgba(7,32,80,0.9)]">
          Photo by Robert DeSanto
        </p>
      </section>

      {/* ── Services List ── */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs text-gray-500 italic text-right mb-3">
              Hover over a card to see a recent project
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon, title, bullets, example }) => (
              <StaggerItem key={title}>
                <div className="group [perspective:1200px] h-72">
                  <div className="relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-gray-100 rounded-2xl shadow-card p-6 flex flex-col">
                      <div className="w-11 h-11 rounded-full bg-yale-teal/10 flex items-center justify-center text-yale-teal mb-5 flex-shrink-0">
                        {icon}
                      </div>
                      <h3 className="text-lg font-bold text-yale-blue mb-2.5 tracking-tight">{title}</h3>
                      <ul className="space-y-2">
                        {bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-[12.5px] text-gray-500 leading-relaxed">
                            <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-hero-gradient rounded-2xl shadow-card p-6 flex flex-col justify-center">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-yale-teal mb-3">A recent project</p>
                      <p className="text-sm text-white/85 leading-relaxed">{example}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Engagement Structure ── */}
      <section className="pt-4 pb-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="bg-surface border border-gray-100 rounded-2xl px-6 md:px-8 py-6">
              <div className="mb-5">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-yale-teal mb-1">How We Engage</p>
                <p className="text-[15px] font-bold text-yale-blue tracking-tight">Our standard project model</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { num: '1', label: 'Project Leader' },
                  { num: '6', label: 'Consultants' },
                  { num: '10', label: 'Weeks' },
                  { num: '$0', label: 'Cost to our clients' },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white border border-gray-100 rounded-xl p-4 text-center">
                    <div className="text-[1.75rem] font-bold text-yale-blue leading-none tracking-tight">{num}</div>
                    <div className="text-[11px] text-gray-500 font-medium mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="label-eyebrow mb-2">Who We've Worked With</p>
            <h2 className="text-[1.85rem] font-bold text-yale-blue mb-3 tracking-tight">Our clients</h2>
            <p className="prose-body">
              Healthcare nonprofits, government, and community organizations
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
      <section className="py-14 md:py-24 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch relative">
          <FadeIn direction="left">
            <div className="h-full flex flex-col justify-center border-l-4 border-yale-teal pl-8 md:pl-10 py-2">
              <div className="text-6xl text-yale-teal font-serif leading-none select-none mb-4">&ldquo;</div>
              <p className="text-white text-xl md:text-2xl font-light leading-[1.6] tracking-[-0.01em]">
                Working with YHCC was a seamless experience, and the results were invaluable. Their team
                provided digitized surveys, thorough data analysis, and a comprehensive report outlining
                methodology, outcomes, and actionable recommendations. We've already incorporated several
                of the findings into grants.
              </p>
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-yale-teal/15 border border-yale-teal/40 flex items-center justify-center text-yale-teal font-semibold text-sm flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Bethany Simmonds</div>
                  <div className="text-white/55 text-xs mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} className="hidden md:block">
            <div className="h-full min-h-[320px] rounded-2xl bg-white/10 border border-white/20" />
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
