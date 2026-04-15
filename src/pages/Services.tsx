import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'

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
                        <span className="text-yale-teal font-bold mt-0.5">&#10003;</span>
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
            <div className="bg-white rounded-3xl shadow-md p-10 flex items-center justify-center min-h-[160px]">
              <p className="text-gray-400 text-sm">Client logos coming soon.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-yale-blue text-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <div className="text-6xl text-white/20 font-serif leading-none mb-4">&ldquo;</div>
            <blockquote className="text-lg font-light leading-relaxed text-white/90 mb-8">
              Working with the Yale Healthcare Consulting Collective was a seamless experience, and the
              results were invaluable. Their team provided digitized surveys, thorough data analysis, and
              a comprehensive report outlining methodology, outcomes, and actionable recommendations for
              improvement. We have already been able to incorporate several of the findings into grants.
            </blockquote>
            <div className="font-semibold text-white">Bethany Simmonds</div>
            <div className="text-white/60 text-sm mt-1">Senior Director of Advancement, Mental Health CT</div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
