import { FadeIn } from '../components/animations/FadeIn'
import { Link } from 'react-router'

const leftBullets = [
  'Catalyzing impactful change in local healthcare ecosystems through data-driven insights.',
  'Strategic collaboration + tailored expertise for organizational excellence and operational efficiency.',
  'Commitment to innovation, accessibility, and sustainable growth for our partners.',
  'Elevating healthcare delivery through student-driven strategies and fresh perspectives.',
]

const rightBullets = [
  'Founded after witnessing inefficiencies in healthcare organizations that hindered patient care.',
  'Created to bridge gaps in resources and collaboration between academia and practice.',
  'Provides strategic consulting to local healthcare nonprofits at no cost to maximize community benefit.',
  'Empowers communities through shared expertise, proactive solutions, and long-term partnerships.',
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">About Us</h1>
            <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">
              Driven by a passion for healthcare innovation and social impact
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story and Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yale-blue">Our Story and Mission</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left — Gray Card */}
            <FadeIn direction="left">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full">
                <ul className="space-y-5">
                  {leftBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Right — Blue Card */}
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-yale-blue text-white rounded-2xl p-8 h-full">
                <ul className="space-y-5">
                  {rightBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90 leading-relaxed">
                      <span className="text-white/60 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Ready to Work Together?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Whether you&apos;re a healthcare organization seeking strategic support or a Yale student
            interested in joining our team, we&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yale-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us
            </Link>
            <Link
              to="/team"
              className="border border-yale-blue text-yale-blue px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue hover:text-white transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
