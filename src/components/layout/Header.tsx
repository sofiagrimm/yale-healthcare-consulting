import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-yale-blue text-base leading-tight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" className="w-8 h-8 flex-shrink-0">
            <circle cx="20" cy="20" r="20" fill="#0f4d92"/>
            <rect x="18" y="9" width="4" height="22" rx="2" fill="white"/>
            <rect x="9" y="18" width="22" height="4" rx="2" fill="white"/>
          </svg>
          <span className="hidden sm:inline">Yale Healthcare Consulting Collective</span>
          <span className="sm:hidden">YHCC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === to
                  ? 'text-yale-blue border-b-2 border-yale-blue pb-0.5'
                  : 'text-gray-500 hover:text-yale-blue'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-yale-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-yale-blue-dark transition-colors duration-200"
          >
            Work With Us
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-medium transition-colors ${
                pathname === to ? 'text-yale-blue' : 'text-gray-700 hover:text-yale-blue'
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 bg-yale-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-yale-blue-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Work With Us
          </Link>
        </div>
      )}
    </header>
  )
}
