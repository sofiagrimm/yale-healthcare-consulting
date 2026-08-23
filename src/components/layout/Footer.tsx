import { Link } from 'react-router'
import { Mail, Linkedin, Instagram } from 'lucide-react'

const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Team', to: '/team' },
  { label: 'Projects', to: '/projects/ongoing' },
  { label: 'Apply', to: '/apply' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-10 sm:gap-16 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-6 h-6 flex-shrink-0">
                <circle cx="20" cy="20" r="20" fill="#14486f"/>
                <rect x="18" y="9" width="4" height="22" rx="2" fill="white"/>
                <rect x="9" y="18" width="22" height="4" rx="2" fill="white"/>
              </svg>
              <span className="font-semibold text-white text-sm tracking-tight">Yale Healthcare Consulting Collective</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/yale-healthcare-consulting-collective"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://www.instagram.com/yhccyale/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Instagram size={14} />
              </a>
              <a
                href="mailto:yhcc@dwighthall.org"
                aria-label="Email"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Mail size={14} />
              </a>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mt-5 max-w-xl">
              &ldquo;Yale&rdquo; and &ldquo;Yale University&rdquo; are registered trademarks of Yale University.
              This website is a student run website and is maintained, hosted, and operated independently of
              Yale University. The activities on this website are not supervised or endorsed by Yale and
              information contained on this website does not necessarily reflect the opinions or official
              positions of the University.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-600 mb-4">Navigation</p>
            <div className="flex gap-8">
              {[nav.slice(0, 3), nav.slice(3)].map((col, i) => (
                <nav key={i} className="flex flex-col gap-2.5">
                  {col.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-600 mb-4">Contact</p>
            <a
              href="mailto:yhcc@dwighthall.org"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
            >
              yhcc@dwighthall.org
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">
              Campus photos courtesy of Yale University Office of Public Affairs &amp; Communications
            </p>
            <p className="text-xs text-gray-400 mt-1">
              &copy; {new Date().getFullYear()} Yale Healthcare Consulting Collective. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-gray-400">
            Dwight Hall at Yale · Member Organization
          </p>
        </div>
      </div>
    </footer>
  )
}
