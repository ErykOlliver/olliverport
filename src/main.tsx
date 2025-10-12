import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'

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
      path: '/services',
      element: <Services />
    }
  ]
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
