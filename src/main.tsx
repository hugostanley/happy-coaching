import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// @ts-ignore
async function getIsLoggedIn() {
  return JSON.parse(localStorage.getItem("isLoggedIn") || "false")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
