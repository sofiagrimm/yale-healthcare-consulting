import { useState } from 'react'
import { Mail, Clock, MapPin } from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'

export default function Contact() {
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`YHCC Inquiry from ${name} (${organization})`)
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:yhcc@dwighthall.org?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yale-blue/30 focus:border-yale-blue transition-all duration-200'

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">Reach Out</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
            <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
              Ready to start a conversation? Whether you\'re a healthcare organization, a potential
              partner, or a Yale student, we\'d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: Info */}
            <FadeIn direction="left">
              <p className="text-yale-teal font-semibold uppercase text-sm tracking-widest mb-3">Get In Touch</p>
              <h2 className="text-3xl font-bold text-yale-blue mb-6">Let\'s Work Together</h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                If your organization is navigating a strategic, operational, or community health
                challenge, reach out and we\'ll scope out how YHCC can help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email Us</div>
                    <a
                      href="mailto:yhcc@dwighthall.org"
                      className="text-yale-blue hover:text-yale-teal transition-colors"
                    >
                      yhcc@dwighthall.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Response Time</div>
                    <p className="text-gray-500 text-sm">We typically respond within 2–3 business days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Based In</div>
                    <p className="text-gray-500 text-sm">New Haven, Connecticut — serving Greater New Haven and beyond.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn direction="right" delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Organization *</label>
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Your organization or institution"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell us about your organization and the challenge you're facing..."
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yale-blue text-white py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Submitting will open your email client with a pre-filled message.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
