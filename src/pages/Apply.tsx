import { useState, useRef, ChangeEvent } from 'react'
import { FadeIn } from '../components/animations/FadeIn'
import { Upload, CheckCircle } from 'lucide-react'

const skillOptions = [
  'Research and/or Literature Review',
  'Presentation / Communication (scientific or otherwise)',
  'Working or volunteering in Healthcare Setting (hospital/clinic, EMS, shadowing)',
  'Data Analysis / Visualization (Python, R or similar)',
  'Scientific Writing',
  'Marketing and Growth',
  'Statistical Modeling',
  'Health Economics and/or Financial Modeling',
]

const timeline = [
  { label: 'Virtual Q&A Sessions', date: 'TBD' },
  { label: 'Written Application Opens', date: 'TBD' },
  { label: 'Written Application Closes', date: 'TBD' },
  { label: 'Interview Decisions', date: 'TBD' },
  { label: 'In-Person Interviews', date: 'TBD' },
  { label: 'Final Decisions', date: 'TBD' },
  { label: 'Orientation & Onboarding', date: 'TBD' },
]

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yale-blue/30 focus:border-yale-blue transition-all duration-200 text-sm'

export default function Apply() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [resume, setResume] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fileError, setFileError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      setFileError('File exceeds 10 MB limit.')
      return
    }
    setResume(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resume) { setFileError('Please upload your résumé.'); return }
    setStatus('sending')

    const form = new FormData()
    form.append('name', name)
    form.append('email', email)
    form.append('year', year)
    form.append('skills', skills.join(', ') || 'None specified')
    form.append('resume', resume)

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: form })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <FadeIn>
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-yale-blue mb-3">Application Submitted!</h2>
            <p className="text-gray-600 leading-relaxed">
              Thanks, {name}! We've received your application for the F26 cycle. We'll be in touch with next steps.
            </p>
          </div>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-yale-blue text-white py-24 px-6 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Recruitment</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">YHCC Written Application</h1>
            <p className="text-white/80 text-lg font-light max-w-xl leading-relaxed">F26 Recruitment Cycle</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Form */}
          <FadeIn direction="left">
            {/* About YHCC */}
            <div className="mb-8 p-6 bg-yale-blue/5 border border-yale-blue/15 rounded-2xl">
              <h3 className="font-bold text-yale-blue mb-2 text-sm uppercase tracking-wide">About YHCC</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The Yale Healthcare Consulting Collective (YHCC) is a Dwight Hall–affiliated campus organization that
                works with local and global healthcare organizations to provide consulting and public health practice
                that strengthens operations and community impact.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                What makes YHCC unique is that we are healthcare focused, we have the capacity to be technical and
                create usable tools for clients, and we take part in research with faculty.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-yale-blue">Consulting:</strong> We work with a diverse array of healthcare organizations, including global biopharma companies,
                national non-profits, hospitals, med-tech companies, startups, and local healthcare clinics.{' '}
                <strong className="text-yale-blue">Research:</strong> We collaborate with researchers at Yale's School of Medicine, School of Public Health,
                and School of Management on healthcare-focused research projects.
              </p>
            </div>

            {/* Advice */}
            <div className="mb-8 p-4 border-l-4 border-yale-teal bg-gray-50 rounded-r-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Advice for the Application:</strong> This application is NOT meant to be stressful or incredibly onerous.
                Be honest and sincere. Answer the questions directly and within the word limit.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-yale-blue mb-6">Part 1. Basic Information</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                <input
                  type="text" required value={name} onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith" className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.smith@yale.edu" className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Graduating Year *</label>
                <select
                  required value={year} onChange={(e) => setYear(e.target.value)}
                  className={inputClass + ' bg-white'}
                >
                  <option value="" disabled>Select your year</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Skills &amp; Experiences
                </label>
                <p className="text-xs text-gray-500 mb-3">
                  Please let us know if you have any of the following — be honest, it's totally okay if many are not applicable.
                </p>
                <div className="space-y-2.5">
                  {skillOptions.map((skill) => (
                    <label
                      key={skill}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="relative mt-0.5 flex-shrink-0">
                        <input
                          type="checkbox"
                          checked={skills.includes(skill)}
                          onChange={() => toggleSkill(skill)}
                          className="peer sr-only"
                        />
                        <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:bg-yale-blue peer-checked:border-yale-blue transition-all duration-150 flex items-center justify-center">
                          {skills.includes(skill) && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-yale-blue transition-colors leading-snug">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Résumé *</label>
                <p className="text-xs text-gray-500 mb-2">Upload 1 supported file. Max 10 MB. PDF preferred.</p>
                <div
                  onClick={() => fileRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${
                    resume ? 'border-yale-blue bg-yale-blue/5' : 'border-gray-200 hover:border-yale-blue/50 hover:bg-gray-50'
                  }`}
                >
                  <Upload size={22} className={resume ? 'text-yale-blue' : 'text-gray-400'} />
                  {resume ? (
                    <p className="text-sm font-medium text-yale-blue">{resume.name}</p>
                  ) : (
                    <p className="text-sm text-gray-500">Click to upload your résumé</p>
                  )}
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFile}
                  />
                </div>
                {fileError && <p className="text-red-600 text-xs mt-1">{fileError}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-yale-blue text-white py-3 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === 'sending' ? 'Submitting…' : 'Submit Application'}
              </button>

              {status === 'error' && (
                <p className="text-red-600 text-sm font-medium text-center">
                  Something went wrong. Please email us directly at{' '}
                  <a href="mailto:yhcc@dwighthall.org" className="underline">yhcc@dwighthall.org</a>.
                </p>
              )}
            </form>
          </FadeIn>

          {/* Sidebar — Timeline */}
          <FadeIn direction="right" delay={0.15}>
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-yale-blue mb-6">Application Timeline</h3>
              <div className="space-y-0">
                {timeline.map(({ label, date }, i) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-yale-blue mt-1 flex-shrink-0" />
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-200 min-h-[32px] mt-1" />}
                    </div>
                    <div className="pb-5">
                      <p className="text-xs font-bold text-yale-teal uppercase tracking-wide">{date}</p>
                      <p className="text-sm text-gray-700">{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gray-50 border border-gray-100 rounded-xl">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Questions?</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Reach out to us at{' '}
                  <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue font-medium hover:text-yale-teal transition-colors">
                    yhcc@dwighthall.org
                  </a>{' '}
                  or sign up for a virtual Q&A session with a board member.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
