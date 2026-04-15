import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
import clientsImg from '../../Clients.png'

const services = [
  {
    title: 'Social Impact & Research',
    bullets: [
      'Social Impact Evaluations, Performance Metrics, Social ROI, Stakeholder Engagement',
      'Market Research, Competitive Analyses, Industry Forecasts, Market Opportunities',
    ],
  },
  {
    title: 'Visibility & Growth',
    bullets: [
      'Brand Awareness, Digital Optimization, Multi-channel Engagement',
      'Growth Strategies, Partnership Strategy, Product Launch, Market Development',
    ],
  },
  {
    title: 'Product & Operations',
    bullets: [
      'Product Development, User Insights, Competitive Strategy, MVP Design',
      'Operational Analytics, Performance Indicators, Process Improvement, Data Modeling',
    ],
  },
  {
    title: 'Custom Solutions',
    bullets: [
      'Tailored consulting projects designed for your specific organizational needs',
      'Collaborative approach to address unique challenges in the healthcare landscape',
    ],
  },
]

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Our Services</h1>
            <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">
              Comprehensive consulting solutions tailored to healthcare organizations
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ title, bullets }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-yale-blue mb-5">{title}</h3>
                  <ul className="space-y-4">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <h2 className="text-3xl font-bold text-yale-blue mb-3">Our Clients</h2>
            <p className="text-gray-500">
              Proud to partner with leading healthcare organizations across Connecticut
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl shadow-md p-8 flex items-center justify-center">
              <img
                src={clientsImg}
                alt="YHCC Client Organizations"
                className="max-w-full h-auto object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial — Highlighted */}
      <section className="py-24 px-6 bg-yale-blue relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="text-8xl text-white/15 font-serif leading-none select-none mb-2">&ldquo;</div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-10">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide">
                Working with the Yale Healthcare Consulting Collective was a{' '}
                <span className="font-semibold text-white">seamless experience</span>, and the results were{' '}
                <span className="font-semibold text-white">invaluable</span>. Their team provided{' '}
                <span className="bg-white/20 px-1 rounded">digitized surveys</span>,{' '}
                <span className="bg-white/20 px-1 rounded">thorough data analysis</span>, and a{' '}
                <span className="bg-white/20 px-1 rounded">comprehensive report</span> outlining methodology,
                outcomes, and actionable recommendations for improvement. We have already been able to
                incorporate several of the findings into{' '}
                <span className="font-semibold text-white underline decoration-white/40 underline-offset-2">grants</span>.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white">Bethany Simmonds</div>
                  <div className="text-white/60 text-sm mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
