import Slider from 'react-slick'
import { Link } from 'react-router'
import { Lightbulb, Target, Users } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'

const slides = [
  {
    title: 'Healthcare Empowered, Locally Transformed',
    sub: 'Harness Yale student talent and passion to support local healthcare orgs',
    cta: 'Contact Us',
    to: '/contact',
  },
  {
    title: 'Strategic Innovation for Community Health',
    sub: 'Equip partners with strategic tools to transform lives and communities',
    cta: 'Our Services',
    to: '/services',
  },
  {
    title: 'Accelerating Impact Where It Matters',
    sub: 'Enhance performance, campaigns, and impact at an accelerated pace',
    cta: 'Join The Team',
    to: '/team',
  },
]

const whyUs = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovative Solutions',
    desc: 'Fresh perspectives from Yale students trained in cutting-edge methodologies and research techniques.',
  },
  {
    icon: <Target size={28} />,
    title: 'Tailored Approach',
    desc: "Custom strategies designed specifically for your organization's unique challenges and goals.",
  },
  {
    icon: <Users size={28} />,
    title: 'Dedicated Team',
    desc: 'Passionate students committed to transforming healthcare delivery through actionable insights.',
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
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <Slider {...sliderSettings}>
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-lg font-light mb-8 leading-relaxed">
                    {slide.sub}
                  </p>
                  <Link
                    to={slide.to}
                    className="inline-block bg-white text-yale-blue px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yale-blue mb-3">Why Choose YHCC?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We bring together Yale&apos;s brightest minds to deliver innovative solutions for healthcare organizations
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map(({ icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
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
              <h2 className="text-3xl font-bold text-yale-blue mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Yale Healthcare Consulting Collective was founded to bridge the gap between innovative
                thinking and practical healthcare solutions. We partner with local healthcare organizations
                to deliver strategic consulting that drives real impact.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our student consultants bring diverse perspectives from across Yale University, combining
                academic excellence with hands-on experience to help healthcare organizations thrive in a
                complex environment.
              </p>
              <Link to="/about" className="text-yale-blue font-semibold hover:text-yale-teal transition-colors">
                Learn more about our story &rarr;
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="bg-gradient-to-br from-yale-blue to-yale-blue-dark text-white p-10 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="flex flex-col gap-8">
                  {[
                    ['50+', 'Dedicated Team Members'],
                    ['3', 'Core Service Areas'],
                    ['100%', 'Commitment to Excellence'],
                  ].map(([stat, label]) => (
                    <div key={label} className="text-center">
                      <div className="text-4xl font-bold mb-1">{stat}</div>
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

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Let&apos;s work together to create innovative solutions that drive meaningful change in healthcare.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yale-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
