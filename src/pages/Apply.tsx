import { useState } from 'react'
import { FadeIn, BlurReveal } from '../components/animations/FadeIn'
import { Link } from 'react-router'
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'

const timeline = [
  { label: 'Virtual Q&A Sessions', date: 'TBD' },
  { label: 'Written Application Opens', date: 'TBD' },
  { label: 'Written Application Closes', date: 'TBD' },
  { label: 'Interview Decisions', date: 'TBD' },
  { label: 'In-Person Interviews', date: 'TBD' },
  { label: 'Final Decisions', date: 'TBD' },
  { label: 'Orientation & Onboarding', date: 'TBD' },
]

const faqs = [
  {
    q: 'Who can apply?',
    a: 'Any Yale student, undergraduate or graduate, who is motivated and interested in healthcare. We welcome students from all schools and majors. No prior consulting experience is required.',
  },
  {
    q: 'When do you recruit?',
    a: 'We recruit at the beginning of each semester. Check the application timeline on this page for the upcoming cycle. You can also sign up for a virtual Q&A or email us to be notified when applications open.',
  },
  {
    q: 'How much time does membership require?',
    a: 'Projects run for approximately 10 weeks. Members should expect to commit around 5–8 hours per week during an active engagement. Outside of projects, board members have additional responsibilities.',
  },
  {
    q: 'What kinds of organizations does YHCC work with?',
    a: 'We work with healthcare nonprofits, community health organizations, health systems, and mission-driven startups. Our focus is on organizations doing meaningful work in healthcare where structured research and strategy can drive impact.',
  },
  {
    q: 'What kind of work will I actually do?',
    a: 'Consulting work across research, data analysis, strategy, AI tool evaluation, and operational modeling. You\'ll work directly with clients, contribute to deliverables that end up in board presentations and grant applications, and have a named project role.',
  },
  {
    q: 'What do members get out of YHCC?',
    a: 'Hands-on consulting experience, mentorship from older members, and a network of Yale students interested in healthcare. Alumni go on to med school, consulting firms, MPH programs, and research roles. The structured project experience is genuinely useful.',
  },
  {
    q: 'I don\'t have a healthcare background. Can I still apply?',
    a: 'Yes. We deliberately build cross-disciplinary teams, economists, engineers, public policy students, and pre-med students all contribute meaningfully. Healthcare problems don\'t fit neatly into one discipline, and neither should our teams.',
  },
  {
    q: 'What does the application involve?',
    a: 'A written application with short-answer questions about your background and interests, a behavioral question, and a case study prompt. Top candidates are invited to an in-person interview. The full application takes about 30–45 minutes.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[14px] font-semibold text-yale-blue leading-snug">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-400 flex-shrink-0" /> : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function Apply() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <BlurReveal delay={0.05}>
            <p className="label-eyebrow text-white/40 mb-4">Join YHCC</p>
          </BlurReveal>
          <BlurReveal delay={0.15}>
            <h1 className="text-[1.875rem] sm:text-[2.25rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-4 leading-[1.1] max-w-2xl">
              Apply to YHCC
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.25}>
            <p className="text-white/60 text-base font-normal max-w-lg leading-relaxed">
              We recruit at the start of each semester. Applications are open to all Yale students, no consulting experience required.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* Left: FAQ */}
          <div>
            <FadeIn className="mb-8">
              <p className="label-eyebrow mb-2">Frequently Asked Questions</p>
              <h2 className="text-[1.75rem] font-bold text-yale-blue tracking-tight">Everything you need to know</h2>
            </FadeIn>
            <div className="space-y-2">
              {faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>

            <FadeIn delay={0.1} className="mt-10">
              <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">About YHCC</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  YHCC is a Dwight Hall–affiliated student consulting group at Yale working with healthcare organizations. We're focused on social impact.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Our work spans research and evidence, visibility and growth, operations and analytics, and AI and technology. Our deliverables end up in clients' grant applications, board presentations, and strategic plans.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our standard project model: <strong className="text-yale-blue">1 project leader · 10 weeks · 6–9 consultants · 1 executive director.</strong>
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Sidebar */}
          <FadeIn direction="right" delay={0.1}>
            <div className="sticky top-24 space-y-5">

              {/* Application Timeline */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-4">Application Timeline</p>
                <div className="space-y-0">
                  {timeline.map(({ label, date }, i) => (
                    <div key={label} className="flex gap-3 items-start">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-yale-blue/40 flex-shrink-0" />
                        {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 min-h-[24px] mt-0.5" />}
                      </div>
                      <div className="pb-3">
                        <p className="text-[10px] font-bold text-yale-teal uppercase tracking-[0.1em]">{date}</p>
                        <p className="text-[12.5px] text-gray-600 leading-tight">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we look for */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">What We Look For</p>
                <ul className="space-y-2">
                  {[
                    'Interest in healthcare',
                    'Ability to do rigorous, structured work',
                    'Collaborative and reliable',
                    'Any Yale school or major',
                    'No experience required',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] text-gray-600">
                      <span className="text-yale-teal font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-surface border border-gray-100 rounded-2xl p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-2">Questions?</p>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue font-medium hover:text-yale-teal transition-colors">
                    yhcc@dwighthall.org
                  </a>
                  {' '} or sign up for a virtual Q&A with a board member.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* After YHCC CTA */}
      <section className="py-20 px-6 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-3">Where members go</p>
            <h2 className="text-[2rem] font-bold text-white mb-4 tracking-tight">After YHCC</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Members go on to med school, consulting firms, MPH programs, and research roles. The experience, client work, structured deliverables, problems that matter, tends to stick.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/team"
                className="inline-flex items-center gap-2 bg-white text-yale-blue px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Meet the Team <ArrowRight size={13} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                About YHCC
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
