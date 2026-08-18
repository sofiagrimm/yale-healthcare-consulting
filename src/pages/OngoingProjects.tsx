import { Link } from 'react-router'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeIn, BlurReveal } from '../components/animations/FadeIn'

export default function OngoingProjects() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}><p className="label-eyebrow text-white/40 mb-4">Our Work</p></BlurReveal>
          <BlurReveal delay={0.15}><h1 className="text-[2.75rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">Ongoing Projects</h1></BlurReveal>
          <BlurReveal delay={0.25}><p className="text-white/60 text-base font-normal max-w-md leading-relaxed">Engagements our teams are actively working on this semester.</p></BlurReveal>
        </div>
      </section>

      {/* Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-14 h-14 rounded-full bg-yale-blue/8 text-yale-blue flex items-center justify-center mx-auto mb-6">
              <Clock size={24} />
            </div>
            <h2 className="text-[1.5rem] font-bold text-yale-blue mb-4 tracking-tight">Details coming soon</h2>
            <p className="prose-body leading-relaxed mb-8">
              We keep active engagements confidential while they're underway out of respect for our clients.
              Check back here once this semester's projects wrap up, or reach out to learn more about what
              our teams are currently focused on.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/projects/past"
                className="inline-flex items-center gap-2 bg-yale-blue text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                See Past Projects <ArrowRight size={13} />
              </Link>
              <Link
                to="/contact"
                className="border border-gray-200 text-gray-700 px-7 py-2.5 rounded-full font-semibold text-sm hover:border-yale-blue hover:text-yale-blue transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
