import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-yale-blue text-lg">
          <img src="/assets/logo.svg" alt="YHCC" className="w-8 h-8" />
          <span className="hidden sm:inline">Yale Healthcare Consulting Collective</span>
          <span className="sm:hidden">YHCC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-medium transition-colors duration-200 ${
                pathname === to ? 'text-yale-blue' : 'text-gray-600 hover:text-yale-blue'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-yale-blue text-white px-5 py-2 rounded-lg font-semibold hover:bg-yale-blue-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-700 font-medium hover:text-yale-blue transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-yale-blue text-white text-center px-5 py-2 rounded-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  )
}
