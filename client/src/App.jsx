import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ROUTES } from './routes/ROUTES'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
const routesa = createBrowserRouter(ROUTES)
  return (
  <>
  <RouterProvider router={routesa}/>
  </>
  )
}

export default App
