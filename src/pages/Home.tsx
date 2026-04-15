import Slider from 'react-slick'
import { Link } from 'react-router'
import { Lightbulb, Target, Users, ArrowRight, TrendingUp, FlaskConical, HeartPulse } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/FadeIn'
// @ts-ignore
import clientsImg from '/Clients.png'

const slides = [
  {
    label: 'Healthcare Strategy',
    title: 'Student-led consulting for healthcare organizations.',
    sub: 'We partner with hospitals, nonprofits, and health systems on high-impact strategy, analytics, and operations engagements — pro bono.',
    cta: 'Work With Us',
    to: '/contact',
    ctaSecondary: 'Our Services',
    toSecondary: '/services',
  },
  {
    label: 'Community Impact',
    title: 'Bridging Yale talent and local healthcare needs.',
    sub: 'Our student consultants bring fresh perspectives from medicine, public health, engineering, and policy to solve real organizational challenges.',
    cta: 'Meet the Team',
    to: '/team',
    ctaSecondary: 'About YHCC',
    toSecondary: '/about',
  },
  {
    label: 'Join YHCC',
    title: 'Build skills. Drive change. Work on what matters.',
    sub: 'We recruit Yale undergraduates and graduate students across all majors each semester. Applications open at the start of every term.',
    cta: 'Get In Touch',
    to: '/contact',
    ctaSecondary: 'Learn More',
    toSecondary: '/about',
  },
]

const exploreCards = [
  {
    icon: <Target size={22} />,
    label: 'Projects',
    title: 'Consulting Engagements',
    desc: 'Strategy, analytics, and operations work for hospitals, nonprofits, and healthcare startups across Connecticut.',
    to: '/services',
  },
  {
    icon: <Users size={22} />,
    label: 'Community',
    title: 'Our People',
    desc: 'The best part of YHCC is our members — a cross-disciplinary team united by a passion for healthcare and impact.',
    to: '/team',
  },
  {
    icon: <TrendingUp size={22} />,
    label: 'After YHCC',
    title: 'Professional Development',
    desc: 'Alumni go on to medical school, consulting, public health, and research at leading institutions worldwide.',
    to: '/about',
  },
  {
    icon: <Lightbulb size={22} />,
    label: 'Get Involved',
    title: 'Join or Partner',
    desc: 'Whether you are a Yale student or a healthcare organization, we want to hear from you.',
    to: '/contact',
  },
]

const stats = [
  { value: '50+', label: 'Student Consultants' },
  { value: '10+', label: 'Client Engagements' },
  { value: '4', label: 'Practice Areas' },
  { value: '100%', label: 'Pro Bono' },
]

const afterYHCC = [
  { icon: <HeartPulse size={18} />, path: 'Medicine & MD Programs' },
  { icon: <TrendingUp size={18} />, path: 'Healthcare Consulting' },
  { icon: <FlaskConical size={18} />, path: 'Research & Biotech' },
  { icon: <Users size={18} />, path: 'Public Health & Policy' },
]

export default function Home() {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  }

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero Carousel ── */}
      <section className="relative bg-yale-blue text-white overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-8%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">
          <Slider {...sliderSettings}>
            {slides.map((slide, i) => (
              <div key={i}>
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
                    {slide.label}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-white/75 text-lg font-light mb-8 leading-relaxed max-w-xl">
                    {slide.sub}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={slide.to}
                      className="inline-flex items-center gap-2 bg-white text-yale-blue px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      {slide.cta} <ArrowRight size={15} />
                    </Link>
                    <Link
                      to={slide.toSecondary}
                      className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                    >
                      {slide.ctaSecondary}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-yale-blue">{value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-3">Who We Are</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-5 leading-snug">
              A Dwight Hall organization building the next generation of healthcare leaders.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              YHCC was founded to bridge the gap between Yale's academic excellence and the strategic
              challenges facing real healthcare organizations. We partner with nonprofits, hospitals, and
              health systems — delivering rigorous, actionable consulting at no cost.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Members come from every corner of Yale: pre-med students, public health researchers,
              engineers, economists, and ethicists. That diversity is our edge.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-yale-blue font-semibold text-sm hover:text-yale-teal transition-colors"
            >
              Our story <ArrowRight size={14} />
            </Link>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Lightbulb size={20} />, title: 'Innovative Solutions', desc: 'Fresh Yale perspectives and cutting-edge research methodologies.' },
                { icon: <Target size={20} />, title: 'Tailored Approach', desc: 'Custom strategies for each organization\'s unique challenges.' },
                { icon: <Users size={20} />, title: 'Dedicated Team', desc: 'Passionate students committed to transforming healthcare delivery.' },
                { icon: <TrendingUp size={20} />, title: 'Measurable Impact', desc: 'Deliverables that go straight into grants, reports, and decisions.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="text-yale-teal mb-3">{icon}</div>
                  <h3 className="text-sm font-bold text-yale-blue mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore YHCC ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">Explore YHCC</p>
            <h2 className="text-3xl font-bold text-yale-blue">Everything you need to know.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exploreCards.map(({ icon, label, title, desc, to }) => (
              <StaggerItem key={title}>
                <Link
                  to={to}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yale-teal">{icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</span>
                  </div>
                  <h3 className="text-base font-bold text-yale-blue mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-yale-blue group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Recent Clients ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-8 flex items-baseline justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-1">Our Clients</p>
              <h2 className="text-2xl font-bold text-yale-blue">Proud to partner with leading organizations.</h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-yale-blue hover:text-yale-teal transition-colors flex items-center gap-1"
            >
              View services <ArrowRight size={13} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex items-center justify-center">
              <img
                src={clientsImg}
                alt="YHCC Client Organizations"
                className="max-w-full h-auto object-contain max-h-24"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-24 px-6 bg-yale-blue relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="text-8xl text-white/10 font-serif leading-none select-none mb-2">&ldquo;</div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-10">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed tracking-wide">
                Working with the Yale Healthcare Consulting Collective was a{' '}
                <span className="font-semibold">seamless experience</span>, and the results were{' '}
                <span className="font-semibold">invaluable</span>. Their team provided{' '}
                <span className="bg-white/20 px-1 rounded">digitized surveys</span>,{' '}
                <span className="bg-white/20 px-1 rounded">thorough data analysis</span>, and a{' '}
                <span className="bg-white/20 px-1 rounded">comprehensive report</span> outlining methodology,
                outcomes, and actionable recommendations. We have already incorporated several findings into{' '}
                <span className="font-semibold underline decoration-white/40 underline-offset-2">grants</span>.
              </p>
              <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Bethany Simmonds</div>
                  <div className="text-white/60 text-xs mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── After YHCC ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-2">Career Outcomes</p>
            <h2 className="text-3xl font-bold text-yale-blue mb-3">After YHCC</h2>
            <p className="text-gray-500 max-w-xl">
              YHCC alumni go on to careers across the full spectrum of healthcare — armed with real consulting
              experience, client relationships, and structured problem-solving skills.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {afterYHCC.map(({ icon, path }) => (
              <StaggerItem key={path}>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-3 shadow-sm">
                  <span className="text-yale-teal flex-shrink-0">{icon}</span>
                  <span className="text-sm font-medium text-yale-blue">{path}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2}>
            <div className="bg-yale-blue text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-1">Recruiting at Yale</p>
                <h3 className="text-xl font-bold mb-1">Applications open every semester.</h3>
                <p className="text-white/70 text-sm max-w-md">
                  We recruit through info sessions, the Yale extracurricular bazaar, and open applications.
                  Join our mailing list to get the latest timeline.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-yale-blue px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Recruiting Updates <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 px-6 text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yale-teal mb-3">Let&apos;s work together</p>
          <h2 className="text-3xl font-bold text-yale-blue mb-4">Ready to transform your organization?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Whether you represent a healthcare organization seeking pro bono strategic support, or you&apos;re
            a Yale student ready to make an impact, we&apos;d love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yale-blue text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Work With Us <ArrowRight size={14} />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold text-sm hover:border-yale-blue hover:text-yale-blue transition-all duration-300"
            >
              Meet the Team
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
