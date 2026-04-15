import Slider from 'react-slick'
import { Link } from 'react-router'
import { Lightbulb, Target, Users, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'

const slides = [
  {
    title: 'Healthcare Empowered,\nLocally Transformed.',
    sub: 'We partner with mission-driven healthcare organizations in New Haven and beyond to deliver strategic insight, operational analysis, and practical recommendations.',
    cta: 'Partner With Us',
    to: '/contact',
  },
  {
    title: 'Yale Talent.\nReal-World Impact.',
    sub: 'Our interdisciplinary student teams combine academic rigor with on-the-ground problem solving across medicine, policy, economics, and data science.',
    cta: 'Our Services',
    to: '/services',
  },
  {
    title: 'Community-First.\nEvidence-Driven.',
    sub: 'Rooted in service to Greater New Haven, YHCC prioritizes underserved communities and organizations doing meaningful work on the frontlines of healthcare.',
    cta: 'About Us',
    to: '/about',
  },
]

const whyUs = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovative Solutions',
    desc: 'We bring fresh, interdisciplinary perspectives to complex healthcare challenges, drawing on Yale\'s breadth of academic expertise.',
  },
  {
    icon: <Target size={28} />,
    title: 'Tailored Approach',
    desc: 'Every engagement is scoped to your organization\'s unique context — no cookie-cutter frameworks, just focused, relevant work.',
  },
  {
    icon: <Users size={28} />,
    title: 'Dedicated Team',
    desc: '50+ motivated Yale students across medicine, public health, policy, economics, engineering, and data science.',
  },
]

export default function Home() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Carousel */}
      <section className="relative bg-yale-blue text-white overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <Slider {...sliderSettings}>
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="max-w-2xl">
                  <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-4">
                    Yale Student-Led Consulting
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg font-light mb-8 leading-relaxed">
                    {slide.sub}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to={slide.to}
                      className="bg-white text-yale-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {slide.cta}
                    </Link>
                    <Link
                      to="/about"
                      className="border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">Why YHCC</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-12">Why Choose Us</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="text-yale-teal mb-4">{icon}</div>
                  <h3 className="text-xl font-bold text-yale-blue mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">Our Mission</p>
              <h2 className="text-3xl font-bold text-yale-blue mb-6">
                Bridging Yale Talent with Community Healthcare Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The Yale Healthcare Consulting Collective connects healthcare organizations with motivated,
                interdisciplinary Yale student teams to tackle strategic, operational, and community-facing
                challenges. Our work is rooted in service, rigor, and measurable impact.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-yale-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                About Us <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="bg-gradient-to-br from-yale-blue to-yale-blue-dark text-white p-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ['50+', 'Dedicated Team Members'],
                    ['3', 'Core Service Areas'],
                    ['New Haven', 'Community Focus'],
                    ['Yale', 'Affiliated'],
                  ].map(([stat, label]) => (
                    <div key={label} className="text-center">
                      <div className="text-3xl font-bold mb-1">{stat}</div>
                      <div className="text-white/70 text-sm uppercase tracking-wide">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
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

      {/* Services Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl font-bold text-yale-blue">Our Core Service Areas</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              ['01', 'Strategic Planning', 'Landscape analysis, growth strategy, and organizational planning tailored to healthcare and nonprofit contexts.'],
              ['02', 'Operations & Process', 'Workflow analysis, efficiency improvements, and operational frameworks to strengthen service delivery.'],
              ['03', 'Community Health Research', 'Stakeholder engagement, community needs assessments, and program evaluation for health-focused initiatives.'],
            ].map(([num, title, desc]) => (
              <StaggerItem key={num}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-yale-teal font-bold text-sm mb-4">{num}</div>
                  <h3 className="text-xl font-bold text-yale-blue mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{desc}</p>
                  <Link to="/services" className="text-yale-blue font-semibold text-sm hover:text-yale-teal transition-colors inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center">
            <Link
              to="/services"
              className="bg-yale-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-yale-blue text-white text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg font-light">
            If your organization is navigating a strategic, operational, or community health challenge,
            we&apos;d love to hear from you.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yale-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Start a Conversation
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
