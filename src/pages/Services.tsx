import { Link } from 'react-router'
import { TrendingUp, Eye, Settings, Sparkles } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'

const services = [
  {
    icon: <TrendingUp size={28} />,
    title: 'Social Impact & Research',
    desc: 'Stakeholder engagement, community needs assessments, program evaluation, and research synthesis for health-focused initiatives.',
    details: [
      'Community health needs assessments',
      'Program evaluation & impact measurement',
      'Literature review & evidence synthesis',
      'Survey design & data analysis',
    ],
  },
  {
    icon: <Eye size={28} />,
    title: 'Visibility & Growth',
    desc: 'Strategic communications, brand positioning, and outreach planning to help healthcare organizations reach the communities they serve.',
    details: [
      'Brand positioning & messaging strategy',
      'Audience analysis & segmentation',
      'Digital presence recommendations',
      'Partnership development frameworks',
    ],
  },
  {
    icon: <Settings size={28} />,
    title: 'Product & Operations',
    desc: 'Workflow analysis, efficiency improvements, and operational frameworks to strengthen service delivery and organizational capacity.',
    details: [
      'Operational workflow mapping',
      'Process improvement recommendations',
      'Technology & tool assessments',
      'Capacity planning & resource allocation',
    ],
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Custom Solutions',
    desc: 'Have a unique challenge? We scope and staff engagements tailored to your specific needs, timeline, and organizational context.',
    details: [
      'Strategic planning & roadmapping',
      'Landscape & competitive analysis',
      'Policy research & brief development',
      'Pilot design & feasibility studies',
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
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
            <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
              From strategic planning to community health research, our student teams deliver
              rigorous, actionable consulting across four core areas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon, title, desc, details }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-yale-teal mb-5">{icon}</div>
                  <h3 className="text-xl font-bold text-yale-blue mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-gray-500 text-sm">
                        <span className="text-yale-teal mt-0.5">&#10003;</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">Who We Serve</p>
            <h2 className="text-3xl font-bold text-yale-blue">Our Clients</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">
              <p className="text-gray-500 text-sm">Client logos coming soon.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-yale-blue text-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <div className="text-5xl text-white/30 font-serif mb-6">&ldquo;</div>
            <blockquote className="text-xl font-light leading-relaxed text-white/90 mb-8">
              Working with the Yale Healthcare Consulting Collective gave our team a level of strategic
              clarity we hadn&apos;t been able to achieve on our own. Their students were rigorous,
              thoughtful, and deeply invested in our mission.
            </blockquote>
            <div className="font-semibold text-white">Bethany Simmonds</div>
            <div className="text-white/60 text-sm mt-1">Senior Director of Advancement, Mental Health CT</div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Ready to Start an Engagement?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 font-light text-lg">
            Tell us about your organization\'s challenge and we\'ll find the right team and scope to help.
          </p>
          <Link
            to="/contact"
            className="bg-yale-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
