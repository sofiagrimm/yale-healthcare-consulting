import { Link } from 'react-router'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-7 h-7 flex-shrink-0">
                <circle cx="20" cy="20" r="20" fill="#0f4d92"/>
                <rect x="18" y="9" width="4" height="22" rx="2" fill="white"/>
                <rect x="9" y="18" width="22" height="4" rx="2" fill="white"/>
              </svg>
              <span className="font-bold text-white text-sm leading-tight">Yale Healthcare Consulting Collective</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to drive innovation in healthcare through consulting excellence.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
              <Link to="/team" className="hover:text-white transition-colors">Our Team</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Connect With Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:yhcc@dwighthall.org" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} />
                yhcc@dwighthall.org
              </a>
              <a
                href="https://www.linkedin.com/company/yale-healthcare-consulting-collective"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/yalehealthcareconsulting"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; 2026 Yale Healthcare Consulting Collective. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
