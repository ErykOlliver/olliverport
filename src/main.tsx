import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import ProjectDetails from './pages/ProjectDetails'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/projects/:id',
      element: <ProjectDetails />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/skills',
      element: <Skills />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ]
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
