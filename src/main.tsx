import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Road from './routes/Road'
import Chat from './routes/Chat'
import Profile from './routes/Profile'
import Home from './routes/Home'

const router = createBrowserRouter([{
  path: '/',
  element: <App />, 
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/road',
      element: <Road />
    },
    {
      path: '/chat',
      element: <Chat />
    },
    {
      path: '/profile',
      element: <Profile />
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
