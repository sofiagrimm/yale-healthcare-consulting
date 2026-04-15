import { Link } from 'react-router'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'

const pillars = [
  {
    icon: '⬛',
    title: 'Community-First',
    desc: 'We prioritize healthcare organizations serving Greater New Haven, with a focus on underserved communities and mission-driven work.',
  },
  {
    icon: '▲',
    title: 'Evidence-Driven',
    desc: 'Our student teams combine academic rigor with real-world problem solving to deliver recommendations grounded in data and research.',
  },
  {
    icon: '◆',
    title: 'Interdisciplinary',
    desc: 'Consultants bring expertise across medicine, public health, policy, economics, engineering, and data science.',
  },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About YHCC</h1>
            <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
              A student-led consulting collective bridging Yale University\'s interdisciplinary talent
              with the healthcare organizations that serve our community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">How We Started</p>
              <h2 className="text-3xl font-bold text-yale-blue mb-6">Bridging the Gap</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Yale Healthcare Consulting Collective was founded on a simple but powerful observation:
                New Haven is home to one of the world\'s great research universities and a network of
                community health organizations doing vital work — yet the two rarely collaborated in a
                structured, sustained way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                YHCC was built to change that. By organizing motivated Yale students around real
                organizational challenges, we create engagements that are meaningful for both sides:
                organizations receive rigorous, actionable consulting support, and students gain
                hands-on experience applying their academic training to real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a member group of Dwight Hall at Yale, we are embedded in a long tradition of
                community-engaged service and social impact at Yale.
              </p>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="relative">
                <div className="bg-yale-blue/5 rounded-3xl p-10 border border-yale-blue/10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      ['50+', 'Student Consultants'],
                      ['3', 'Service Areas'],
                      ['2026', 'Founded'],
                      ['Dwight Hall', 'Member Group'],
                    ].map(([val, label]) => (
                      <div key={label} className="text-center py-4">
                        <div className="text-3xl font-bold text-yale-blue mb-1">{val}</div>
                        <div className="text-gray-500 text-sm uppercase tracking-wide">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yale-teal/10 rounded-full blur-xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl font-bold text-yale-blue">What Guides Our Work</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl text-yale-teal mb-4">{icon}</div>
                  <h3 className="text-xl font-bold text-yale-blue mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-yale-blue text-white text-center relative overflow-hidden">
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <FadeIn className="relative">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 font-light text-lg">
            Whether you\'re a healthcare organization seeking strategic support or a Yale student
            interested in joining our team, we\'d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-yale-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
            <Link
              to="/team"
              className="border border-white/40 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
