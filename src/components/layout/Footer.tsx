import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div className="flex items-center gap-2 font-semibold text-white">
            <img src="/assets/logo.svg" alt="YHCC" className="w-7 h-7" />
            <span>Yale Healthcare Consulting Collective</span>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/team', 'Team'], ['/contact', 'Contact']].map(
              ([to, label]) => (
                <Link key={to} to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
              )
            )}
          </nav>
          <div className="text-sm">
            <a
              href="https://www.linkedin.com/company/yale-healthcare-consulting-collective"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yale-teal transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; 2026 Yale Healthcare Consulting Collective. A Dwight Hall at Yale member group.
        </div>
      </div>
    </footer>
  )
}
