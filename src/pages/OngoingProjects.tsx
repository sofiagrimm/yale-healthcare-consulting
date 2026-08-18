import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { FadeIn, BlurReveal, StaggerContainer, StaggerItem, HoverCard } from '../components/animations/FadeIn'
// @ts-ignore
import dssImg from '/dss.png'
// @ts-ignore
import cohiImg from '/COHI.png'
// @ts-ignore
import rmhImg from '/RMH.png'
// @ts-ignore
import hipImg from '/HIP.png'
// @ts-ignore
import campImg from '/camp.png'

const clients = [
  { name: 'CT Department of Social Services', focus: 'Focus: Policy landscape, cost modeling', logo: dssImg, url: 'https://portal.ct.gov/dss?language=en_US' },
  { name: 'CT Oral Health Initiative', focus: 'Focus: Research and funding', logo: cohiImg, url: 'https://www.ctoralhealth.org/' },
  { name: 'Ronald McDonald House', focus: 'Focus: Volunteer workflow', logo: rmhImg, url: 'https://www.ronaldmcdonaldhousectma.org/' },
  { name: 'Health Information Project', focus: 'Focus: Expansion', logo: hipImg, url: 'https://behip.org/' },
  { name: 'The Hole in the Wall Gang Camp', focus: 'Focus: Visibility and expansion', logo: campImg, url: 'https://www.holeinthewallgang.org/' },
]

export default function OngoingProjects() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}><p className="label-eyebrow text-white/40 mb-4">Our Work</p></BlurReveal>
          <BlurReveal delay={0.15}><h1 className="text-[2.75rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">Ongoing Projects</h1></BlurReveal>
          <BlurReveal delay={0.25}><p className="text-white/60 text-base font-normal max-w-lg leading-relaxed">Engagements our teams are actively working on this semester. Hover over a client's name below to learn more and visit their website.</p></BlurReveal>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="flex flex-wrap justify-center gap-6">
            {clients.map(({ name, focus, logo, url }) => (
              <StaggerItem key={name} className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]">
                <HoverCard className="bg-white border border-gray-100 rounded-2xl shadow-card overflow-hidden h-full">
                  <div className="p-8 flex flex-col items-center text-center h-full">
                    <div className="h-16 flex items-center justify-center mb-5">
                      <img src={logo} alt={`${name} logo`} className="max-h-16 max-w-[180px] object-contain mix-blend-multiply" />
                    </div>
                    <h3 className="text-[1.05rem] font-bold tracking-tight leading-tight mb-2">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yale-blue hover:text-yale-teal transition-colors"
                      >
                        {name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{focus}</p>
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
                to="/projects/past"
                className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Past Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
