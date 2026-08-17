import { FadeIn, StaggerContainer, StaggerItem, BlurReveal } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { leadership, board, TeamMember } from '../data/team'

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('')
}

function ExecCard({ name, role, image }: TeamMember) {
  return (
    <div className="group w-full bg-white rounded-2xl p-5 shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 text-center cursor-default">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-2 ring-yale-blue/10 group-hover:ring-yale-blue/30 transition-all duration-300"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-yale-blue/8 text-yale-blue font-bold text-base flex items-center justify-center mx-auto mb-3 group-hover:bg-yale-blue group-hover:text-white transition-all duration-300">
          {initials(name)}
        </div>
      )}
      <h3 className="font-bold text-yale-blue text-[13px] leading-tight tracking-tight">{name}</h3>
      <p className="text-gray-400 text-[11.5px] mt-1 leading-tight">{role}</p>
    </div>
  )
}

export default function Team() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}><p className="label-eyebrow text-white/40 mb-4">Our People</p></BlurReveal>
          <BlurReveal delay={0.15}><h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">Our Team</h1></BlurReveal>
          <BlurReveal delay={0.25}><p className="text-white/60 text-base font-normal max-w-md leading-relaxed">A diverse group of talented students from across Yale University</p></BlurReveal>
        </div>
      </section>

      {/* E-Board */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Leadership</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">Executive Board</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {leadership.map((member) => (
              <StaggerItem key={member.name}>
                <ExecCard {...member} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Board */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Board Members</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">Board</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {board.map(({ name, role }) => (
              <StaggerItem key={name}>
                <div className="group bg-white rounded-2xl p-5 shadow-card border border-gray-100 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 text-center cursor-default">
                  <div className="w-12 h-12 rounded-full bg-yale-blue/8 text-yale-blue font-bold text-sm flex items-center justify-center mx-auto mb-3 group-hover:bg-yale-blue group-hover:text-white transition-all duration-300">
                    {initials(name)}
                  </div>
                  <h3 className="font-bold text-yale-blue text-[13px] leading-tight tracking-tight">{name}</h3>
                  <p className="text-gray-400 text-[11.5px] mt-1 leading-tight">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="label-eyebrow mb-3">Join Us</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-4 tracking-tight">Join Our Team</h2>
            <p className="prose-body leading-relaxed mb-8">
              We&apos;re always looking for motivated Yale students interested in healthcare who want to work on something that matters.
              Applications open at the beginning of each semester.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/apply"
                className="bg-yale-blue text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
              <a
                href="mailto:yhcc@dwighthall.org"
                className="border border-gray-200 text-gray-700 px-7 py-2.5 rounded-full font-semibold text-sm hover:border-yale-blue hover:text-yale-blue transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-yale-blue/4 border border-yale-blue/12 rounded-2xl p-10 text-center">
              <h3 className="text-xl font-bold text-yale-blue mb-3 tracking-tight">Diversity &amp; Inclusion</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                YHCC is committed to fostering a diverse and inclusive environment. We believe that varied
                perspectives and backgrounds strengthen our work and enable us to better serve the
                healthcare community. We welcome students from all Yale schools and all backgrounds.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
