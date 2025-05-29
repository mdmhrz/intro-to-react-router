import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Welcome to React Router World</div>
  },
  {
    path: 'about',
    element: <div>This is for about</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path: 'contacts',
    element: <h1>All my contacts are here</h1>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: 'app2',
    element: <App></App>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
