import { Link } from 'react-router'
import { Lightbulb, Target, Users, ArrowRight, TrendingUp, FlaskConical, HeartPulse } from 'lucide-react'
import { motion } from 'motion/react'
import { FadeIn, StaggerContainer, StaggerItem, CountUp, BlurReveal, HoverCard, ScaleIn } from '../components/animations/FadeIn'
// @ts-ignore
import clientsImg from '/currentclients.png'

const exploreCards = [
  {
    icon: <Target size={20} />,
    label: 'Projects',
    title: 'What we work on',
    desc: 'Strategy, data analysis, AI, and operations projects with healthcare nonprofits and health systems.',
    to: '/services',
  },
  {
    icon: <Users size={20} />,
    label: 'Community',
    title: 'Who we are',
    desc: 'About 50 students across Yale College and the graduate schools. We also do team dinners and a few events per semester.',
    to: '/team',
  },
  {
    icon: <TrendingUp size={20} />,
    label: 'After YHCC',
    title: 'Where members go',
    desc: 'Med school, consulting, MPH programs, research labs. YHCC alumni end up across healthcare, the experience translates.',
    to: '/about',
  },
  {
    icon: <Lightbulb size={20} />,
    label: 'Get Involved',
    title: 'Interested?',
    desc: 'Whether you have a project or want to join, reach out. We respond to every email.',
    to: '/contact',
  },
]

const stats = [
  { value: 40, suffix: '+', label: 'Student Consultants' },
  { value: 10, suffix: '+', label: 'Client Engagements' },
  { value: 4, suffix: '', label: 'Practice Areas' },
  { value: 1, suffix: '', label: 'Student-Run', display: 'Yale' },
]

const afterYHCC = [
  { icon: <HeartPulse size={16} />, path: 'Medicine & MD Programs' },
  { icon: <TrendingUp size={16} />, path: 'Healthcare Consulting' },
  { icon: <FlaskConical size={16} />, path: 'Research & Biotech' },
  { icon: <Users size={16} />, path: 'Public Health & Policy' },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-36">
          <div className="max-w-2xl">
            <BlurReveal delay={0.05}>
              <p className="label-eyebrow text-white/40 mb-5">Healthcare Consulting</p>
            </BlurReveal>
            <BlurReveal delay={0.15}>
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.08] mb-6">
                Yale Healthcare Consulting Collective
              </h1>
            </BlurReveal>
            <BlurReveal delay={0.25}>
              <p className="text-white/65 text-base md:text-lg font-normal mb-4 leading-relaxed max-w-lg">
                YHCC's goal is to provide a diverse array of healthcare organizations with the highest level of structured research and strategy. We're a Dwight Hall member organization, which means community impact is our primary goal. Our deliverables end up in clients' grant applications and board presentations, and our recommendations inform strategic decisions.
              </p>
              <p className="text-white/55 text-sm font-normal mb-9 leading-relaxed max-w-lg">
                We welcome motivated Yale students interested in healthcare who want to work on something that matters.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white text-yale-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    Work With Us <ArrowRight size={14} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-colors"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-9 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
          {stats.map(({ value, suffix, label, display }, i) => (
            <ScaleIn key={label} delay={i * 0.08}>
              <div className="text-center px-4">
                <div className="text-[2rem] font-bold text-yale-blue tracking-tight leading-none mb-1">
                  {display ? display : <CountUp target={value} suffix={suffix} />}
                </div>
                <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.12em]">{label}</div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>

      {/* ── Recent Clients ── */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <div>
              <p className="label-eyebrow mb-1">Our Clients</p>
              <h2 className="text-[1.75rem] font-bold text-yale-blue tracking-tight">Organizations we've worked with.</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <img
              src={clientsImg}
              alt="YHCC Client Organizations"
              className="w-full h-auto object-contain"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-14 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="label-eyebrow mb-3">Who We Are</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-5 leading-tight tracking-tight">
              A student consulting group at Yale.
            </h2>
            <p className="prose-body mb-4">
              We started YHCC because a lot of healthcare nonprofits in Connecticut don't have the
              bandwidth for the kind of structured research and strategy work they actually need.
              Yale students do. So we connected them.
            </p>
            <p className="prose-body mb-7">
              We're a Dwight Hall member organization, which means community impact is the point 
              not resume padding. The deliverables end up
              in grant applications and board presentations.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-yale-blue font-semibold text-sm hover:text-yale-teal transition-colors"
            >
              Our story <ArrowRight size={13} />
            </Link>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Lightbulb size={18} />, title: 'Cross-disciplinary teams', desc: 'Pre-med, econ, public health, engineering, mixed on purpose.' },
                { icon: <Target size={18} />, title: 'Scoped to your needs', desc: 'We scope each project around your specific problem, not a template.' },
                { icon: <Users size={18} />, title: 'Consistent point of contact', desc: 'One team, one project lead, clear communication throughout.' },
                { icon: <TrendingUp size={18} />, title: 'Deliverables you can use', desc: 'Reports, models, and presentations built for decision-making.' },
              ].map(({ icon, title, desc }) => (
                <HoverCard key={title} className="bg-surface border border-gray-100 rounded-xl p-5">
                  <div className="text-yale-teal mb-3">{icon}</div>
                  <h3 className="text-[13px] font-bold text-yale-blue mb-1.5 leading-tight">{title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{desc}</p>
                </HoverCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore YHCC ── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="label-eyebrow mb-2">Explore YHCC</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">What you want to know.</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreCards.map(({ icon, label, title, desc, to }) => (
              <StaggerItem key={title}>
                <Link to={to} className="group flex flex-col h-full">
                <HoverCard className="flex flex-col h-full bg-white rounded-2xl border border-gray-100 p-6 shadow-card">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yale-teal">{icon}</span>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400">{label}</span>
                  </div>
                  <h3 className="text-[15px] font-bold text-yale-blue mb-2 tracking-tight">{title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed flex-1">{desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-[12px] font-semibold text-yale-blue group-hover:gap-2 transition-all duration-200">
                    Learn more <ArrowRight size={11} />
                  </div>
                </HoverCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-16 md:py-28 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <FadeIn>
            <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl px-10 py-10">
              <div className="text-5xl text-white/15 font-serif leading-none select-none mb-5">&ldquo;</div>
              <p className="text-white text-lg md:text-xl font-light leading-[1.7] tracking-[-0.01em]">
                Working with YHCC was a seamless experience, and the results were invaluable. Their team
                provided digitized surveys, thorough data analysis, and a comprehensive report outlining
                methodology, outcomes, and actionable recommendations. We've already incorporated several
                of the findings into grants.
              </p>
              <div className="mt-8 pt-6 border-t border-white/12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                  BS
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Bethany Simmonds</div>
                  <div className="text-white/50 text-xs mt-0.5">Senior Director of Advancement, Mental Health CT</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── After YHCC ── */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-10">
            <p className="label-eyebrow mb-2">Career Outcomes</p>
            <h2 className="text-[2rem] font-bold text-yale-blue mb-3 tracking-tight">After YHCC</h2>
            <p className="prose-body max-w-xl">
              Members go on to med school, consulting, MPH programs, and research roles. The consulting
              experience, client calls, structured deliverables, working on problems that matter, tends to stick.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {afterYHCC.map(({ icon, path }) => (
              <StaggerItem key={path}>
                <HoverCard className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-card">
                  <span className="text-yale-teal flex-shrink-0">{icon}</span>
                  <span className="text-[13px] font-semibold text-yale-blue leading-tight">{path}</span>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2}>
            <div className="bg-hero-gradient text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold text-white/45 uppercase tracking-[0.15em] mb-1">Recruiting</p>
                <h3 className="text-lg font-bold mb-1.5 tracking-tight">We recruit at the start of each semester.</h3>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Info sessions, the extracurricular bazaar, and an open application. Drop us a line if
                  you want to know when the next cycle opens.
                </p>
              </div>
              <Link
                to="/apply"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-yale-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5"
              >
                Apply Now <ArrowRight size={13} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <p className="label-eyebrow mb-4">Get in touch</p>
          <h2 className="text-[2rem] font-bold text-yale-blue mb-4 tracking-tight">Have a project in mind?</h2>
          <p className="prose-body max-w-md mx-auto mb-8">
            Tell us about your organization and what you're working on. We'll get back to you within
            a few days and figure out if it's a good fit.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yale-blue text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
            >
              Reach Out <ArrowRight size={13} />
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 px-8 py-2.5 rounded-full font-semibold text-sm hover:border-yale-blue hover:text-yale-blue transition-all duration-200"
            >
              Meet the Team
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
