import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'
// @ts-ignore
import logoImg from '/bluetextlogo.png'

interface NavChild {
  to: string
  label: string
}

interface NavItem {
  label: string
  to?: string
  children?: NavChild[]
}

const links: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  {
    label: 'Projects',
    children: [
      { to: '/projects/ongoing', label: 'Ongoing Projects' },
      { to: '/projects/past', label: 'Past Projects' },
      { to: '/projects/research-wing', label: 'Research Wing' },
    ],
  },
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
  const isGroupActive = (item: NavItem) =>
    item.children ? item.children.some((child) => isActive(child.to)) : item.to ? isActive(item.to) : false

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

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-3 font-bold text-yale-blue text-[15px] leading-tight flex-shrink-0"
        >
          <img src={logoImg} alt="YHCC Logo" className="h-10 w-auto flex-shrink-0" />
        </Link>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <nav className="flex items-center gap-1">
            {links.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={`relative flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium rounded-md transition-colors duration-150 ${
                      isGroupActive(item)
                        ? 'text-yale-blue bg-yale-blue/6'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                    {isGroupActive(item) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-yale-blue rounded-full" />
                    )}
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 z-10">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-card py-1.5 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2 text-[13px] font-medium transition-colors ${
                            isActive(child.to)
                              ? 'text-yale-blue bg-yale-blue/6'
                              : 'text-gray-600 hover:text-yale-blue hover:bg-gray-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to!}
                  className={`relative px-3 py-1.5 text-[13.5px] font-medium rounded-md transition-colors duration-150 ${
                    isActive(item.to!)
                      ? 'text-yale-blue bg-yale-blue/6'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {isActive(item.to!) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-yale-blue rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          <Link
            to="/contact"
            className="bg-yale-blue text-white text-[13.5px] font-semibold px-5 py-2 rounded-full hover:bg-yale-blue-dark transition-colors duration-200 tracking-tight"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden ml-auto p-1 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-1">
          {links.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="px-3 py-2.5 text-sm font-semibold text-gray-400">{item.label}</span>
                {item.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className={`ml-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive(child.to)
                        ? 'text-yale-blue bg-yale-blue/6'
                        : 'text-gray-700 hover:text-yale-blue hover:bg-gray-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.to!)
                    ? 'text-yale-blue bg-yale-blue/6'
                    : 'text-gray-700 hover:text-yale-blue hover:bg-gray-50'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
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
