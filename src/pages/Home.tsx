import { Link } from 'react-router'
import { Lightbulb, Target, Users, ArrowRight, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import { FadeIn, StaggerContainer, StaggerItem, CountUp, BlurReveal, HoverCard, ScaleIn } from '../components/animations/FadeIn'
// @ts-ignore
import clientsImg from '/currentclients.png'
// @ts-ignore
import harknessTowerImg from '/Harkness CREDITED.jpg'

const exploreCards = [
  {
    icon: <Users size={20} />,
    label: 'About',
    title: 'Who we are',
    desc: 'Our mission and our story.',
    to: '/about',
  },
  {
    icon: <Target size={20} />,
    label: 'Services',
    title: 'What we do',
    desc: 'Four practice areas scoped around your problem.',
    to: '/services',
  },
  {
    icon: <TrendingUp size={20} />,
    label: 'Projects',
    title: 'Our work',
    desc: 'Ongoing client engagements.',
    to: '/projects/ongoing',
  },
  {
    icon: <Lightbulb size={20} />,
    label: 'Apply',
    title: 'Join the team',
    desc: 'We recruit at the start of each semester.',
    to: '/apply',
  },
]

const stats = [
  { value: 40, suffix: '+', label: 'Student Consultants' },
  { value: 10, suffix: '+', label: 'Client Engagements' },
  { value: 4, suffix: '', label: 'Practice Areas' },
  { value: 1, suffix: '', label: 'Student-Run', display: 'Yale' },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="grid lg:grid-cols-[3fr_2fr]">
          <div className="relative px-6 py-20 md:py-36 lg:pl-[max(1.5rem,calc((100vw-1152px)/2+1.5rem))] lg:pr-12 flex items-center">
            <div className="max-w-2xl">
              <BlurReveal delay={0.15}>
                <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.08] mb-6">
                  Yale Healthcare<br />Consulting Collective
                </h1>
              </BlurReveal>
              <BlurReveal delay={0.25}>
                <p className="text-white/65 text-base md:text-lg font-normal mb-9 leading-relaxed max-w-lg">
                  Yale Healthcare Consulting Collective (YHCC) provides a diverse array of healthcare organizations with structured pro-bono research and strategy. As a Dwight Hall member organization, community impact is our primary goal. Our deliverables end up in clients' grant applications and board presentations, and our recommendations inform strategic decisions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/apply"
                      className="inline-flex items-center gap-2 bg-white text-yale-blue px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm"
                    >
                      Apply <ArrowRight size={14} />
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

          <div className="hidden lg:block relative">
            <img
              src={harknessTowerImg}
              alt="Harkness Tower at Yale"
              className="absolute inset-0 w-full h-full object-cover object-[50%_15%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-yale-blue-deeper/70 to-transparent pointer-events-none" />
            <p className="absolute bottom-3 right-4 text-[10.5px] text-white/90 tracking-wide drop-shadow-[0_1px_4px_rgba(7,32,80,0.9)]">
              Photo by Andrew Hurley
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-9 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-200">
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
      <section className="pt-12 md:pt-20 pb-6 md:pb-8 px-6">
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

      {/* ── Recruiting banner ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="bg-hero-gradient text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold text-white/45 uppercase tracking-[0.15em] mb-1">Recruiting</p>
                <h3 className="text-lg font-bold mb-1.5 tracking-tight">We recruit at the start of each semester.</h3>
                <p className="text-white/60 text-sm max-w-md leading-relaxed">
                  Info sessions, optional coffee chats, and an open application.
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
    </div>
  )
}
