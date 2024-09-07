import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { StrictMode } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './screens/Home.tsx'
import { NavBar } from './components/NavBar.tsx'
import { ScrollProvider } from './contexts/ScrollContext.tsx'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/*',
    element: <Navigate to="/home" />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProvider>
      <NextUIProvider>
        <NavBar />
        <RouterProvider router={router} />
      </NextUIProvider>
    </ScrollProvider>
  </StrictMode>
)