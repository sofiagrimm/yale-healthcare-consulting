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

const interestAreas = [
  'Disease',
  'Public Health',
  'AI in Healthcare',
  'Health Policy',
  'Health Insurance (Medicare/Medicaid)',
  'Intersection of healthcare and finance/business',
  'Drug Discovery',
  'Healthcare Systems (hospitals, EMS, etc)',
  'Health Equity / Access',
]

const behavioralPrompts = [
  'Describe a time you had to deliver high-quality work under a tight deadline. How did you approach the problem, and what specific steps did you take to ensure the outcome was strong?',
  'Describe a time you were faced with an unfamiliar problem. How did you go from not knowing where to start to producing a solution?',
  'What is something you\'ve done in the past couple years that required sustained effort over time? Walk us through how you stayed consistent and what you learned.',
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

function wordCount(text: string) {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length
}

function WordCount({ text, max }: { text: string; max: number }) {
  const count = wordCount(text)
  const over = count > max
  return (
    <p className={`text-xs mt-1 text-right ${over ? 'text-red-500 font-semibold' : 'text-gray-400'}`}>
      {count} / {max} words{over ? ' — over limit' : ''}
    </p>
  )
}

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yale-blue/25 focus:border-yale-blue transition-all duration-200 text-sm bg-white'

const textareaClass = inputClass + ' resize-y leading-relaxed'

export default function Apply() {
  // Part 1
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [resume, setResume] = useState<File | null>(null)

  // Part 2
  const [skillsBlurb, setSkillsBlurb] = useState('')
  const [interestArea, setInterestArea] = useState('')
  const [behavioral, setBehavioral] = useState('')

  // Part 3
  const [caseStudy, setCaseStudy] = useState('')

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
    if (file.size > 10 * 1024 * 1024) { setFileError('File exceeds 10 MB limit.'); return }
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
    form.append('skillsBlurb', skillsBlurb)
    form.append('interestArea', interestArea)
    form.append('behavioral', behavioral)
    form.append('caseStudy', caseStudy)
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
            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={30} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-yale-blue mb-3 tracking-tight">Application Submitted!</h2>
            <p className="text-gray-500 leading-relaxed">
              Thanks, {name}! We've received your F26 application. We'll be in touch with next steps.
            </p>
          </div>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-4">Recruitment</p>
            <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold tracking-[-0.03em] mb-3 leading-[1.1]">YHCC Written Application</h1>
            <p className="text-white/60 text-base font-normal">F26 Recruitment Cycle</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_340px] gap-16 items-start">
          {/* ── Form ── */}
          <FadeIn direction="left">

            {/* About */}
            <div className="mb-8 p-6 bg-surface border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-yale-blue mb-2 text-sm uppercase tracking-wide">About YHCC</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The Yale Healthcare Consulting Collective (YHCC) is a Dwight Hall–affiliated campus organization that
                works with local and global healthcare organizations to provide consulting and public health practice.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-yale-blue">Consulting:</strong> Biopharma, non-profits, hospitals, med-tech, startups, and local clinics.{' '}
                <strong className="text-yale-blue">Research:</strong> Collaborations with Yale SOM, YSPH, and YSM faculty with the goal of peer-reviewed publication.
              </p>
            </div>

            {/* Advice */}
            <div className="mb-10 px-4 py-3 border-l-4 border-yale-teal bg-yale-teal-light rounded-r-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Advice:</strong> This application is not meant to be stressful. Be honest and sincere. Answer directly and within the word limits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">

              {/* ══ PART 1 ══════════════════════════════════════════════════ */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-yale-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <h2 className="text-xl font-bold text-yale-blue tracking-tight">Basic Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane.smith@yale.edu" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Graduating Year *</label>
                    <select required value={year} onChange={(e) => setYear(e.target.value)} className={inputClass}>
                      <option value="" disabled>Select your year</option>
                      {['2027','2028','2029','2030'].map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>

                  {/* Skills checkboxes */}
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1">Skills &amp; Experiences</label>
                    <p className="text-xs text-gray-400 mb-3">Please let us know if you have any of the following — be honest, totally okay if many don't apply.</p>
                    <div className="space-y-2.5 pl-1">
                      {skillOptions.map((skill) => (
                        <label key={skill} className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative mt-0.5 flex-shrink-0">
                            <input type="checkbox" checked={skills.includes(skill)} onChange={() => toggleSkill(skill)} className="peer sr-only" />
                            <div className="w-4 h-4 border-2 border-gray-200 rounded peer-checked:bg-yale-blue peer-checked:border-yale-blue transition-all duration-150 flex items-center justify-center">
                              {skills.includes(skill) && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-yale-blue transition-colors leading-snug">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Resume */}
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Résumé * <span className="font-normal text-gray-400">(PDF preferred, max 10 MB)</span></label>
                    <div
                      onClick={() => fileRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${resume ? 'border-yale-blue bg-yale-blue/4' : 'border-gray-200 hover:border-yale-blue/40 hover:bg-gray-50'}`}
                    >
                      <Upload size={20} className={resume ? 'text-yale-blue' : 'text-gray-400'} />
                      {resume
                        ? <p className="text-sm font-medium text-yale-blue">{resume.name}</p>
                        : <p className="text-sm text-gray-400">Click to upload your résumé</p>}
                      <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
                    </div>
                    {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
                  </div>
                </div>
              </div>

              {/* ══ PART 2 ══════════════════════════════════════════════════ */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full bg-yale-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <h2 className="text-xl font-bold text-yale-blue tracking-tight">Short Response</h2>
                </div>
                <p className="text-xs text-gray-400 mb-6 pl-10">Please note the max word count per response.</p>

                <div className="space-y-7">
                  {/* Q2.1 — Skills elaboration */}
                  <div className="bg-surface border border-gray-100 rounded-xl p-5">
                    <label className="block text-sm font-semibold text-gray-800 mb-1 leading-snug">
                      <span className="italic">Briefly</span> elaborate on any of the skills you previously selected.{' '}
                      <span className="text-gray-400 font-normal">(Bullet points ok, 150w max)</span>
                    </label>
                    <textarea
                      rows={5}
                      value={skillsBlurb}
                      onChange={(e) => setSkillsBlurb(e.target.value)}
                      placeholder="Describe your relevant experience…"
                      className={textareaClass + ' mt-3'}
                    />
                    <WordCount text={skillsBlurb} max={150} />
                  </div>

                  {/* Q2.2 — Healthcare interest area */}
                  <div className="bg-surface border border-gray-100 rounded-xl p-5">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 leading-snug">
                      Briefly elaborate on your interest and/or experience in <strong>1–2</strong> of the following areas.{' '}
                      <span className="text-gray-400 font-normal">(200w max)</span>
                    </label>
                    <ul className="text-[12.5px] text-gray-500 space-y-0.5 mb-3 pl-1">
                      {interestAreas.map((a) => <li key={a} className="flex items-center gap-1.5"><span className="text-gray-300">—</span>{a}</li>)}
                    </ul>
                    <textarea
                      rows={6}
                      value={interestArea}
                      onChange={(e) => setInterestArea(e.target.value)}
                      placeholder="Discuss 1–2 areas…"
                      className={textareaClass}
                    />
                    <WordCount text={interestArea} max={200} />
                  </div>

                  {/* Q2.3 — Behavioral */}
                  <div className="bg-surface border border-gray-100 rounded-xl p-5">
                    <label className="block text-sm font-semibold text-gray-800 mb-2 leading-snug">
                      Pick <span className="underline underline-offset-2">one</span> of the following.{' '}
                      <span className="text-gray-400 font-normal">(200w max — no need to indicate which you picked)</span>
                    </label>
                    <ol className="space-y-3 mb-4">
                      {behavioralPrompts.map((p, i) => (
                        <li key={i} className="flex gap-2.5 text-[13px] text-gray-600 leading-relaxed">
                          <span className="font-bold text-yale-blue flex-shrink-0">{i + 1}.</span>
                          {p}
                        </li>
                      ))}
                    </ol>
                    <textarea
                      rows={7}
                      value={behavioral}
                      onChange={(e) => setBehavioral(e.target.value)}
                      placeholder="Your response…"
                      className={textareaClass}
                    />
                    <WordCount text={behavioral} max={200} />
                  </div>
                </div>
              </div>

              {/* ══ PART 3 ══════════════════════════════════════════════════ */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full bg-yale-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <h2 className="text-xl font-bold text-yale-blue tracking-tight">Case Study</h2>
                </div>
                <p className="text-xs text-gray-400 mb-6 pl-10">400 words max.</p>

                <div className="bg-surface border border-gray-100 rounded-xl p-5">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Please read the following scenario and then write a response in <strong>less than 400 words</strong>.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 text-sm text-gray-700 leading-relaxed space-y-3">
                    <p>
                      The New Haven Health Department operates a community clinic that currently provides basic primary care
                      and preventive services. The department is considering <strong>expanding the clinic's scope</strong> to
                      include additional services (e.g., mental health care, chronic disease management, women's health,
                      substance use treatment).
                    </p>
                    <p>YHCC is brought in as a consultant to help guide this decision.</p>
                    <p className="font-semibold text-yale-blue">
                      What factors would you consider in determining which services to add, and what would you recommend the
                      clinic prioritize?{' '}
                      <span className="font-normal text-gray-500">You may assume the clinic has limited additional funding and staffing.</span>
                    </p>
                    <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-3">
                      We encourage you to structure your response clearly (e.g., key considerations, analysis, recommendations).
                      Be specific and focus on <span className="underline">practical implementation</span>. There is no single
                      "correct" answer — we are primarily interested in how you think. Organize your answer logically, prioritize
                      the most important factors, and make specific, practical recommendations.
                    </p>
                  </div>

                  <textarea
                    rows={12}
                    value={caseStudy}
                    onChange={(e) => setCaseStudy(e.target.value)}
                    placeholder="Your response…"
                    className={textareaClass}
                  />
                  <WordCount text={caseStudy} max={400} />
                </div>
              </div>

              {/* ══ SUBMIT ══════════════════════════════════════════════════ */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-yale-blue text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 tracking-tight"
                >
                  {status === 'sending' ? 'Submitting…' : 'Submit Application'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center mt-3">
                    Something went wrong. Email us directly at{' '}
                    <a href="mailto:yhcc@dwighthall.org" className="underline">yhcc@dwighthall.org</a>.
                  </p>
                )}
              </div>

            </form>
          </FadeIn>

          {/* ── Sidebar ── */}
          <FadeIn direction="right" delay={0.15}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-[13px] font-bold text-yale-blue mb-5 uppercase tracking-[0.1em]">Application Timeline</h3>
                <div className="space-y-0">
                  {timeline.map(({ label, date }, i) => (
                    <div key={label} className="flex gap-3 items-start">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-2 h-2 rounded-full bg-yale-blue flex-shrink-0" />
                        {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 min-h-[28px] mt-0.5" />}
                      </div>
                      <div className="pb-4">
                        <p className="text-[10.5px] font-bold text-yale-teal uppercase tracking-[0.1em]">{date}</p>
                        <p className="text-[13px] text-gray-600">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-surface border border-gray-100 rounded-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-2">Questions?</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Reach out at{' '}
                  <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue font-medium hover:text-yale-teal transition-colors">
                    yhcc@dwighthall.org
                  </a>
                  {' '}or sign up for a virtual Q&A with a board member.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
