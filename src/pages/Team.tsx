import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import { Link } from 'react-router'

const leadership = [
  { name: 'Gianna Thomas', role: 'President' },
  { name: 'Vivek Malik', role: 'Vice President' },
  { name: 'Neelesh Pandey', role: 'Vice President' },
  { name: 'Colin George', role: 'Client Relations Director' },
  { name: 'Kyler Parker', role: 'Executive Operations Director' },
  { name: 'Fariba Hossain', role: 'Chief of Staff' },
  { name: 'Usman Khalid', role: 'Director of Finances' },
  { name: 'Holly Tran', role: 'Project Manager (Research)' },
  { name: 'Leonardo Chung', role: 'Secretary' },
  { name: 'Emma Lee', role: 'Secretary' },
  { name: 'Grace Udoh', role: 'Outreach Director' },
  { name: 'Sofia Grimm', role: 'Client Lead' },
  { name: 'Donovan Brown', role: 'Client Lead' },
  { name: 'Hildana Kassa', role: 'Client Lead' },
  { name: 'Mira Lehman', role: 'Client Lead' },
]

function initials(name: string) {
  return name.split(' ').map((n) => n[0]).join('')
}

export default function Team() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Our Team</h1>
            <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">
              A diverse group of talented students from across Yale University
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-yale-blue">Leadership Team</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {leadership.map(({ name, role }) => (
              <StaggerItem key={name}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-14 h-14 rounded-full bg-yale-blue/10 text-yale-blue font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {initials(name)}
                  </div>
                  <h3 className="font-bold text-yale-blue text-sm leading-tight">{name}</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-yale-blue mb-4">Join Our Team</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We&apos;re always looking for passionate students who want to make an impact in healthcare.
              Applications open at the beginning of each semester.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-yale-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </Link>
              <a
                href="mailto:yhcc@dwighthall.org"
                className="border border-yale-blue text-yale-blue px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diversity Statement */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-yale-blue/5 border border-yale-blue/15 rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-bold text-yale-blue mb-4">Diversity &amp; Inclusion</h3>
              <p className="text-gray-600 leading-relaxed">
                YHCC is committed to fostering a diverse and inclusive environment. We believe that varied
                perspectives and backgrounds strengthen our work and enable us to better serve the
                healthcare community. We welcome students from all Yale schools and all backgrounds to
                join our mission.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
