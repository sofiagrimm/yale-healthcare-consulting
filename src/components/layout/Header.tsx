import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
// @ts-ignore
import logoImg from '/bluetextlogo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/apply', label: 'Apply' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Accent stripe */}
      <div className="h-0.5 bg-hero-gradient" />

      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-yale-blue text-[15px] leading-tight flex-shrink-0"
        >
          <img src={logoImg} alt="YHCC Logo" className="h-7 w-auto flex-shrink-0" />
          <span className="hidden sm:inline tracking-tight">Yale Healthcare Consulting Collective</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-3 py-1.5 text-[13.5px] font-medium rounded-md transition-colors duration-150 ${
                isActive(to)
                  ? 'text-yale-blue bg-yale-blue/6'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {label}
              {isActive(to) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-yale-blue rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="bg-yale-blue text-white text-[13.5px] font-semibold px-5 py-2 rounded-full hover:bg-yale-blue-dark transition-colors duration-200 tracking-tight"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden p-1 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive(to)
                  ? 'text-yale-blue bg-yale-blue/6'
                  : 'text-gray-700 hover:text-yale-blue hover:bg-gray-50'
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 bg-yale-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-yale-blue-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
