import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Megaphone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const SESSION_KEY = 'yhcc-fall26-banner-dismissed'

export default function ApplicationBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setOpen(false)
    sessionStorage.setItem(SESSION_KEY, '1')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
        >
          <motion.div
            className="relative w-full max-w-[440px] rounded-[24px] bg-white text-yale-blue border border-gray-100 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.25)] overflow-hidden"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-yale-teal/40" />

            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-5 right-5 z-20 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 border border-gray-200 hover:text-yale-blue hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:rotate-90"
            >
              <X size={16} />
            </button>

            <div className="relative px-8 sm:px-9 pt-11 pb-9 text-center">
              {/* Icon badge */}
              <div className="mx-auto mb-5 w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <Megaphone size={20} className="text-yale-teal/80" strokeWidth={2} />
              </div>

              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold tracking-[-0.02em] leading-[1.15] mb-3 text-yale-blue whitespace-nowrap">
                Fall 2026 Applications Open!
              </h2>
              <p className="text-gray-500 text-[14.5px] leading-relaxed mb-5 max-w-[320px] mx-auto">
                YHCC is now accepting applications for the Fall 2026 semester. We look forward to learning more about you!
              </p>

              {/* Deadline pill */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-yale-teal/70 flex-shrink-0" />
                <span className="text-[12.5px] font-semibold text-gray-600 tracking-tight">
                  Due Saturday, Sept 12 &middot; 5:00 PM
                </span>
              </div>

              <Link
                to="/apply"
                onClick={dismiss}
                className="group inline-flex items-center justify-center gap-2 w-full bg-yale-blue text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-yale-blue-dark transition-all duration-200 tracking-tight shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              <button
                type="button"
                onClick={dismiss}
                className="mt-4 text-[12.5px] text-gray-400 hover:text-gray-600 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
