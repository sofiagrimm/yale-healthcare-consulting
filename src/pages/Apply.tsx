import { useState, useRef, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from '../components/animations/FadeIn'
import { Upload, Check, ChevronRight, ChevronLeft } from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

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
  "Describe a time you were faced with an unfamiliar problem. How did you go from not knowing where to start to producing a solution?",
  "What is something you've done in the past couple years that required sustained effort over time? Walk us through how you stayed consistent and what you learned.",
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

const STEPS = [
  { num: 1, label: 'Basic Info', sub: 'Name, year, skills & résumé' },
  { num: 2, label: 'Short Response', sub: '3 questions, 150–200w each' },
  { num: 3, label: 'Case Study', sub: 'Scenario response, 400w max' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function wordCount(text: string) {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length
}

function WordCount({ text, max }: { text: string; max: number }) {
  const count = wordCount(text)
  const over = count > max
  const pct = Math.min((count / max) * 100, 100)
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${over ? 'bg-red-400' : count > max * 0.85 ? 'bg-amber-400' : 'bg-yale-teal'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-[11px] font-medium tabular-nums ${over ? 'text-red-500' : 'text-gray-400'}`}>
        {count}/{max}
      </span>
    </div>
  )
}

// ── Step Indicator ────────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="px-8 pt-8 pb-7 border-b border-gray-100">
      <div className="flex items-start gap-0">
        {STEPS.map((s, i) => {
          const done = current > s.num
          const active = current === s.num
          return (
            <div key={s.num} className="flex items-start flex-1">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <motion.div
                  animate={{
                    backgroundColor: done ? '#1a8a8a' : active ? '#0f4d92' : '#f3f4f6',
                    color: done || active ? '#fff' : '#9ca3af',
                    scale: active ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
                >
                  {done ? <Check size={14} strokeWidth={2.5} /> : s.num}
                </motion.div>
                <div className="text-center">
                  <p className={`text-[12px] font-semibold leading-tight transition-colors ${active ? 'text-yale-blue' : done ? 'text-yale-teal' : 'text-gray-400'}`}>
                    {s.label}
                  </p>
                  <p className="text-[10.5px] text-gray-400 leading-tight hidden sm:block">{s.sub}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-px mt-4 mx-2 relative overflow-hidden bg-gray-200 rounded-full">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-yale-teal rounded-full"
                    animate={{ width: done ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-5 h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-hero-gradient rounded-full"
          animate={{ width: `${((current - 1) / (STEPS.length - 1)) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>
      <p className="mt-1.5 text-[11px] text-gray-400 text-right">
        Step {current} of {STEPS.length}
      </p>
    </div>
  )
}

// ── Field Components ──────────────────────────────────────────────────────────

const inputBase =
  'w-full border rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 text-sm bg-white'
const inputNormal = `${inputBase} border-gray-200 focus:ring-yale-blue/20 focus:border-yale-blue`
const inputError = `${inputBase} border-red-300 focus:ring-red-200 focus:border-red-400 bg-red-50/30`

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-red-500 text-[11.5px] mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function Apply() {
  // Step state
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Part 1
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [skills, setSkills] = useState<string[]>([])
  const [resume, setResume] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')

  // Part 2
  const [skillsBlurb, setSkillsBlurb] = useState('')
  const [interestArea, setInterestArea] = useState('')
  const [behavioral, setBehavioral] = useState('')

  // Part 3
  const [caseStudy, setCaseStudy] = useState('')

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const fileRef = useRef<HTMLInputElement>(null)
  const formTopRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () =>
    formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const toggleSkill = (skill: string) =>
    setSkills((p) => (p.includes(skill) ? p.filter((s) => s !== skill) : [...p, skill]))

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) return
    if (file.size > 10 * 1024 * 1024) { setFileError('File exceeds 10 MB.'); return }
    setResume(file)
    setErrors((p) => ({ ...p, resume: '' }))
  }

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate1 = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = 'Full name is required.'
    if (!email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.'
    if (!year) e.year = 'Please select your graduating year.'
    if (!resume) e.resume = 'Please upload your résumé.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validate2 = () => {
    const e: Record<string, string> = {}
    if (!skillsBlurb.trim()) e.skillsBlurb = 'Please provide a response.'
    if (!interestArea.trim()) e.interestArea = 'Please provide a response.'
    if (!behavioral.trim()) e.behavioral = 'Please provide a response.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const goNext = () => {
    if (step === 1 && !validate1()) return
    if (step === 2 && !validate2()) return
    setDirection(1)
    setStep((s) => s + 1)
    setErrors({})
    setTimeout(scrollToForm, 50)
  }

  const goBack = () => {
    setDirection(-1)
    setErrors({})
    setStep((s) => s - 1)
    setTimeout(scrollToForm, 50)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!caseStudy.trim()) { setErrors({ caseStudy: 'Please provide a response.' }); return }
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
    if (resume) form.append('resume', resume)

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: form })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6"
          >
            <Check size={36} className="text-green-500" strokeWidth={2.5} />
          </motion.div>
          <h2 className="text-2xl font-bold text-yale-blue mb-3 tracking-tight">Application Submitted!</h2>
          <p className="text-gray-500 leading-relaxed">
            Thanks, <strong className="text-gray-700">{name}</strong>! We've received your F26 application and will be in touch with next steps.
          </p>
        </motion.div>
      </div>
    )
  }

  // ── Form Content by Step ────────────────────────────────────────────────────
  const stepVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <FadeIn>
            <p className="label-eyebrow text-white/40 mb-4">Recruitment · F26 Cycle</p>
            <h1 className="text-[2.5rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-3 leading-[1.1]">
              YHCC Written Application
            </h1>
            <p className="text-white/60 text-base font-normal max-w-sm leading-relaxed">
              3 sections · ~30 minutes to complete
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 bg-surface">
        <div ref={formTopRef} className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_300px] gap-10 items-start">

          {/* ── Form Card ── */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">

              <StepIndicator current={step} />

              {/* Step content */}
              <div className="overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="px-8 py-8"
                  >

                    {/* ══ STEP 1 ══════════════════════════════════════════ */}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <h2 className="text-lg font-bold text-yale-blue tracking-tight">Basic Information</h2>
                          <p className="text-[13px] text-gray-400 mt-0.5">Tell us about yourself.</p>
                        </div>

                        <Field label="Full Name" required error={errors.name}>
                          <input
                            type="text" value={name} onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) }}
                            placeholder="Jane Smith"
                            className={errors.name ? inputError : inputNormal}
                          />
                        </Field>

                        <Field label="Yale Email Address" required error={errors.email}>
                          <input
                            type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })) }}
                            placeholder="jane.smith@yale.edu"
                            className={errors.email ? inputError : inputNormal}
                          />
                        </Field>

                        <Field label="Graduating Year" required error={errors.year}>
                          <select
                            value={year} onChange={(e) => { setYear(e.target.value); setErrors(p => ({ ...p, year: '' })) }}
                            className={errors.year ? inputError : inputNormal}
                          >
                            <option value="" disabled>Select your year</option>
                            {['2027','2028','2029','2030'].map((y) => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </Field>

                        {/* Skills */}
                        <div>
                          <p className="text-[13px] font-semibold text-gray-700 mb-1">Skills &amp; Experiences</p>
                          <p className="text-[12px] text-gray-400 mb-3">Select all that apply — totally fine if most don't.</p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {skillOptions.map((skill) => {
                              const checked = skills.includes(skill)
                              return (
                                <motion.label
                                  key={skill}
                                  onClick={() => toggleSkill(skill)}
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  className={`flex items-start gap-3 cursor-pointer p-3 rounded-xl border transition-all duration-150 ${
                                    checked ? 'border-yale-blue/30 bg-yale-blue/4' : 'border-gray-100 hover:border-gray-200 bg-gray-50/50'
                                  }`}
                                >
                                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-all ${checked ? 'bg-yale-blue border-yale-blue' : 'border-gray-300'}`}>
                                    {checked && <Check size={10} strokeWidth={3} className="text-white" />}
                                  </div>
                                  <span className="text-[12.5px] text-gray-600 leading-snug">{skill}</span>
                                </motion.label>
                              )
                            })}
                          </div>
                        </div>

                        {/* Resume */}
                        <Field label="Résumé" required error={errors.resume || fileError}>
                          <motion.div
                            whileHover={{ borderColor: '#0f4d92' }}
                            onClick={() => fileRef.current?.click()}
                            className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${
                              resume ? 'border-yale-teal bg-yale-teal-light' : errors.resume ? 'border-red-300 bg-red-50/30' : 'border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <Upload size={20} className={resume ? 'text-yale-teal' : 'text-gray-400'} />
                            {resume
                              ? <p className="text-sm font-medium text-yale-teal">{resume.name}</p>
                              : <><p className="text-sm font-medium text-gray-500">Click to upload your résumé</p><p className="text-xs text-gray-400">PDF preferred · max 10 MB</p></>}
                            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
                          </motion.div>
                        </Field>
                      </div>
                    )}

                    {/* ══ STEP 2 ══════════════════════════════════════════ */}
                    {step === 2 && (
                      <div className="space-y-7">
                        <div>
                          <h2 className="text-lg font-bold text-yale-blue tracking-tight">Short Response</h2>
                          <p className="text-[13px] text-gray-400 mt-0.5">Please stay within the word limits. Be direct and specific.</p>
                        </div>

                        {/* Q1 */}
                        <div className="bg-surface border border-gray-100 rounded-xl p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <span className="w-6 h-6 rounded-full bg-yale-blue text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                            <div>
                              <p className="text-[13.5px] font-semibold text-gray-800 leading-snug">
                                <em>Briefly</em> elaborate on any of the skills you previously selected.
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">Bullet points OK · 150 words max</p>
                            </div>
                          </div>
                          <Field label="" error={errors.skillsBlurb}>
                            <textarea
                              rows={5} value={skillsBlurb}
                              onChange={(e) => { setSkillsBlurb(e.target.value); setErrors(p => ({ ...p, skillsBlurb: '' })) }}
                              placeholder="Describe your relevant experience…"
                              className={`${errors.skillsBlurb ? inputError : inputNormal} resize-y`}
                            />
                          </Field>
                          <WordCount text={skillsBlurb} max={150} />
                        </div>

                        {/* Q2 */}
                        <div className="bg-surface border border-gray-100 rounded-xl p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <span className="w-6 h-6 rounded-full bg-yale-blue text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                            <div>
                              <p className="text-[13.5px] font-semibold text-gray-800 leading-snug">
                                Briefly elaborate on your interest and/or experience in <strong>1–2</strong> of the following areas.
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">200 words max</p>
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {interestAreas.map((a) => (
                                  <span key={a} className="text-[11px] px-2 py-0.5 bg-white border border-gray-200 rounded-full text-gray-500">{a}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Field label="" error={errors.interestArea}>
                            <textarea
                              rows={6} value={interestArea}
                              onChange={(e) => { setInterestArea(e.target.value); setErrors(p => ({ ...p, interestArea: '' })) }}
                              placeholder="Discuss 1–2 areas…"
                              className={`${errors.interestArea ? inputError : inputNormal} resize-y`}
                            />
                          </Field>
                          <WordCount text={interestArea} max={200} />
                        </div>

                        {/* Q3 */}
                        <div className="bg-surface border border-gray-100 rounded-xl p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <span className="w-6 h-6 rounded-full bg-yale-blue text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                            <div>
                              <p className="text-[13.5px] font-semibold text-gray-800 leading-snug">
                                Pick <span className="underline underline-offset-2">one</span> of the following.
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5">200 words max · no need to indicate which you picked</p>
                              <ol className="mt-3 space-y-2.5">
                                {behavioralPrompts.map((p, i) => (
                                  <li key={i} className="flex gap-2 text-[12.5px] text-gray-600 leading-relaxed">
                                    <span className="font-bold text-yale-blue flex-shrink-0">{i + 1}.</span>
                                    {p}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                          <Field label="" error={errors.behavioral}>
                            <textarea
                              rows={7} value={behavioral}
                              onChange={(e) => { setBehavioral(e.target.value); setErrors(p => ({ ...p, behavioral: '' })) }}
                              placeholder="Your response…"
                              className={`${errors.behavioral ? inputError : inputNormal} resize-y`}
                            />
                          </Field>
                          <WordCount text={behavioral} max={200} />
                        </div>
                      </div>
                    )}

                    {/* ══ STEP 3 ══════════════════════════════════════════ */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-lg font-bold text-yale-blue tracking-tight">Case Study</h2>
                          <p className="text-[13px] text-gray-400 mt-0.5">Read the scenario and write a structured response.</p>
                        </div>

                        <div className="bg-surface border border-gray-100 rounded-xl p-5 text-sm text-gray-700 leading-relaxed space-y-3">
                          <p>
                            The New Haven Health Department operates a community clinic that currently provides basic primary care
                            and preventive services. The department is considering <strong>expanding the clinic's scope</strong> to
                            include additional services (e.g., mental health care, chronic disease management, women's health,
                            substance use treatment).
                          </p>
                          <p>YHCC is brought in as a consultant to help guide this decision.</p>
                          <p className="font-semibold text-yale-blue">
                            What factors would you consider in determining which services to add, and what would you
                            recommend the clinic prioritize?{' '}
                            <span className="font-normal text-gray-500">
                              You may assume the clinic has limited additional funding and staffing.
                            </span>
                          </p>
                          <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-3">
                            Structure your response clearly (key considerations, analysis, recommendations). Focus on
                            practical implementation. We care about how you think — be specific, not exhaustive.
                          </p>
                        </div>

                        <Field label="" error={errors.caseStudy}>
                          <textarea
                            rows={14} value={caseStudy}
                            onChange={(e) => { setCaseStudy(e.target.value); setErrors(p => ({ ...p, caseStudy: '' })) }}
                            placeholder="Your response…"
                            className={`${errors.caseStudy ? inputError : inputNormal} resize-y`}
                          />
                        </Field>
                        <WordCount text={caseStudy} max={400} />

                        {status === 'error' && (
                          <p className="text-red-500 text-sm text-center">
                            Something went wrong. Email us at{' '}
                            <a href="mailto:yhcc@dwighthall.org" className="underline">yhcc@dwighthall.org</a>.
                          </p>
                        )}
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="px-8 pb-8 flex items-center justify-between gap-4">
                <motion.button
                  type="button"
                  onClick={goBack}
                  whileHover={{ x: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors ${step === 1 ? 'invisible' : ''}`}
                >
                  <ChevronLeft size={16} /> Back
                </motion.button>

                {step < 3 ? (
                  <motion.button
                    type="button"
                    onClick={goNext}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-yale-blue text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-colors"
                  >
                    Next <ChevronRight size={16} />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-yale-blue text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-yale-blue-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Submitting…' : 'Submit Application'}
                    {status !== 'sending' && <Check size={15} strokeWidth={2.5} />}
                  </motion.button>
                )}
              </div>
            </div>
          </form>

          {/* ── Sidebar ── */}
          <FadeIn direction="right" delay={0.1}>
            <div className="sticky top-24 space-y-5">
              {/* About */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-3">About YHCC</p>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-2">
                  A Dwight Hall–affiliated student consulting group at Yale working with healthcare organizations globally.
                </p>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  <strong className="text-yale-blue">Consulting</strong> across biopharma, hospitals, and nonprofits.{' '}
                  <strong className="text-yale-blue">Research</strong> with Yale SOM, YSPH, and YSM faculty.
                </p>
              </div>

              {/* Timeline */}
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

              {/* Contact */}
              <div className="bg-surface border border-gray-100 rounded-2xl p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 mb-2">Questions?</p>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  <a href="mailto:yhcc@dwighthall.org" className="text-yale-blue font-medium hover:text-yale-teal transition-colors">
                    yhcc@dwighthall.org
                  </a>
                  {' '}— or sign up for a virtual Q&A with a board member.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </div>
  )
}
