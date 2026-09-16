import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default function Root() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
