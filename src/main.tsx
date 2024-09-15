import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Road from './routes/Road';
import Chat from './routes/Chat';
import Profile from './routes/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Road />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
