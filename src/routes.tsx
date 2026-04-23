import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Apply from './pages/Apply'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'work', element: <CaseStudies /> },
      { path: 'team', element: <Team /> },
      { path: 'apply', element: <Apply /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
