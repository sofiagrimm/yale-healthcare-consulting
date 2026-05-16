import { Link } from 'react-router'
import { Mail, Linkedin, Instagram } from 'lucide-react'

const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Team', to: '/team' },
  { label: 'Apply', to: '/apply' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-6 h-6 flex-shrink-0">
                <circle cx="20" cy="20" r="20" fill="#0f4d92"/>
                <rect x="18" y="9" width="4" height="22" rx="2" fill="white"/>
                <rect x="9" y="18" width="22" height="4" rx="2" fill="white"/>
              </svg>
              <span className="font-semibold text-white text-sm tracking-tight">YHCC</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              A Dwight Hall–affiliated student consulting group at Yale University, working with healthcare organizations to drive measurable impact.
            </p>
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
                href="https://www.instagram.com/yalehealthcareconsulting"
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
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-600 mb-4">Navigation</p>
            <nav className="flex flex-col gap-2.5">
              {nav.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-600 mb-4">Contact</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:yhcc@dwighthall.org"
                className="text-gray-400 hover:text-white transition-colors duration-150"
              >
                yhcc@dwighthall.org
              </a>
              <p className="text-gray-600 text-xs leading-relaxed">
                Yale University<br />
                New Haven, CT 06520<br />
                Mon–Fri, 9am–5pm EST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Yale Healthcare Consulting Collective. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Dwight Hall at Yale · Member Organization
          </p>
        </div>
      </div>
    </footer>
  )
}
