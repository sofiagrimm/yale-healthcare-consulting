import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Apply from './pages/Apply'
import OngoingProjects from './pages/OngoingProjects'
import PastProjects from './pages/PastProjects'
import ResearchWing from './pages/ResearchWing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'team', element: <Team /> },
      { path: 'projects/ongoing', element: <OngoingProjects /> },
      { path: 'projects/past', element: <PastProjects /> },
      { path: 'projects/research-wing', element: <ResearchWing /> },
      { path: 'apply', element: <Apply /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
