import { useState } from 'react'
import { Mail, MapPin, Clock } from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'
import { Link } from 'react-router'

const faqs = [
  {
    q: 'What types of organizations do you work with?',
    a: 'We work with a wide range of healthcare organizations including hospitals, clinics, health systems, healthcare startups, pharmaceutical companies, and health tech companies.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our services are fully free for clients. We work with organizations that couldn\'t otherwise access this kind of structured consulting support.',
  },
  {
    q: 'Who can join YHCC?',
    a: 'YHCC is open to all Yale students across all schools and programs. We value diverse perspectives and welcome students from backgrounds in business, medicine, public health, engineering, and beyond.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on scope and complexity, typically ranging from 6–12 weeks. We work closely with clients to establish realistic timelines that meet their needs.',
  },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, organization, role, message }),
      })
      if (!res.ok) throw new Error('Send failed')
      setStatus('success')
      setName(''); setEmail(''); setOrganization(''); setRole(''); setMessage('')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yale-blue/25 focus:border-yale-blue transition-all duration-200 text-sm bg-white'

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-4">Get In Touch</p>
            <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-5 leading-[1.1]">Contact Us</h1>
            <p className="text-white/60 text-base font-normal max-w-md leading-relaxed">
              Get in touch to learn more about our services or join our team
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-yale-blue mb-6 tracking-tight">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Organization</label>
                  <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Company Name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">I am a… *</label>
                  <select required value={role} onChange={(e) => setRole(e.target.value)} className={inputClass}>
                    <option value="" disabled>Select an option</option>
                    <option value="Potential Client">Potential Client</option>
                    <option value="Prospective Member">Prospective Member</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help you?" className={inputClass + ' resize-y'} />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-yale-blue text-white py-3 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-sm font-medium text-center">Message sent — we'll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Email us directly at{' '}
                    <a href="mailto:yhcc@dwighthall.org" className="underline">yhcc@dwighthall.org</a>.
                  </p>
                )}
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="right" delay={0.15}>
              <h2 className="text-2xl font-bold text-yale-blue mb-3 tracking-tight">Get In Touch</h2>
              <p className="prose-body mb-8">
                Whether you&apos;re a healthcare organization seeking innovative solutions or a student
                interested in joining our team, we&apos;d love to hear from you.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: <Mail size={16} />, label: 'Email', content: <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue hover:text-yale-teal transition-colors text-sm">yhcc@dwighthall.org</a> },
                  { icon: <MapPin size={16} />, label: 'Location', content: <p className="text-gray-500 text-sm">Yale University, New Haven, CT 06520</p> },
                  { icon: <Clock size={16} />, label: 'Office Hours', content: <p className="text-gray-500 text-sm">Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM EST</p> },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-yale-blue/6 flex items-center justify-center text-yale-blue flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-[13px] mb-0.5">{label}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-surface border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-yale-blue mb-2 tracking-tight">For Students</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  Interested in joining YHCC? We recruit new members at the beginning of each semester.
                  Follow us on social media or send us an email to learn about upcoming recruitment events.
                </p>
                <Link to="/apply" className="text-yale-blue font-semibold text-sm hover:text-yale-teal transition-colors">
                  Apply for F26 &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-10">
            <p className="label-eyebrow mb-3">FAQ</p>
            <h2 className="text-[2rem] font-bold text-yale-blue tracking-tight">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
                  <h4 className="font-bold text-yale-blue mb-2 tracking-tight text-[15px]">{q}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
