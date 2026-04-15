import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'

const leadership = [
  { name: 'President', role: 'Executive Leadership', initials: 'P' },
  { name: 'Vice President', role: 'Executive Leadership', initials: 'VP' },
  { name: 'Project Manager', role: 'Project Operations', initials: 'PM' },
  { name: 'Project Manager', role: 'Project Operations', initials: 'PM' },
  { name: 'Director of Recruitment', role: 'Operations', initials: 'DR' },
  { name: 'Director of Partnerships', role: 'Operations', initials: 'DP' },
]

export default function Team() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">The People</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Team</h1>
            <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
              50+ active members from across Yale\'s schools and departments, united by a commitment
              to community health and rigorous problem-solving.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">Leadership</p>
            <h2 className="text-3xl font-bold text-yale-blue">Executive Board</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {leadership.map(({ name, role, initials }, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-yale-blue/10 text-yale-blue font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {initials}
                  </div>
                  <h3 className="font-bold text-yale-blue">{name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Members */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">Our Members</p>
              <h2 className="text-3xl font-bold text-yale-blue mb-6">50+ Dedicated Consultants</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                YHCC draws talent from across Yale\'s undergraduate college and graduate and professional
                schools — including the School of Medicine, School of Public Health, Law School,
                School of Management, and more.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our consultants bring expertise across medicine, public health, policy, economics,
                engineering, data science, and the humanities — enabling truly interdisciplinary teams
                for every engagement.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full bg-yale-blue/10 flex items-center justify-center text-yale-blue font-bold text-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 bg-yale-blue text-white text-center relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <FadeIn className="relative">
          <h2 className="text-3xl font-bold mb-4">Interested in Joining?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-lg">
            We recruit Yale students each semester. If you\'re passionate about healthcare and want
            hands-on consulting experience, we\'d love to hear from you.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yale-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
