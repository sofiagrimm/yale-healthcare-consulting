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
    a: 'Our pricing varies based on project scope and duration. We offer competitive rates and work with clients to develop solutions that fit their budgets. Contact us for a consultation to discuss your specific needs.',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`YHCC Inquiry from ${name} (${organization})`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nRole: ${role}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:yhcc@dwighthall.org?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yale-blue/30 focus:border-yale-blue transition-all duration-200 text-sm'

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Contact Us</h1>
            <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">
              Get in touch to learn more about our services or join our team
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <h2 className="text-2xl font-bold text-yale-blue mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe" className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com" className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organization</label>
                  <input
                    type="text" value={organization} onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Company Name" className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">I am a... *</label>
                  <select
                    required value={role} onChange={(e) => setRole(e.target.value)}
                    className={inputClass + ' bg-white'}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Potential Client">Potential Client</option>
                    <option value="Prospective Member">Prospective Member</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    required rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?" className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yale-blue text-white py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Info */}
            <FadeIn direction="right" delay={0.15}>
              <h2 className="text-2xl font-bold text-yale-blue mb-3">Get In Touch</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you&apos;re a healthcare organization seeking innovative solutions or a student
                interested in joining our team, we&apos;d love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <Mail size={17} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">Email</div>
                    <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue hover:text-yale-teal transition-colors text-sm">
                      yhcc@dwighthall.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">Location</div>
                    <p className="text-gray-500 text-sm">Yale University, New Haven, CT 06520</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yale-blue/10 flex items-center justify-center text-yale-blue flex-shrink-0">
                    <Clock size={17} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">Office Hours</div>
                    <p className="text-gray-500 text-sm">Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM EST</p>
                  </div>
                </div>
              </div>

              {/* For Students Card */}
              <div className="bg-yale-blue/5 border border-yale-blue/15 rounded-2xl p-6">
                <h4 className="font-bold text-yale-blue mb-2">For Students</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Interested in joining YHCC? We recruit new members at the beginning of each semester.
                  Follow us on social media or send us an email to learn about upcoming recruitment events.
                </p>
                <Link to="/team" className="text-yale-blue font-semibold text-sm hover:text-yale-teal transition-colors">
                  Learn more about joining &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yale-blue">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-5">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h4 className="font-bold text-yale-blue mb-2">{q}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
