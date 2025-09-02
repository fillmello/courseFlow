import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CardMateria } from './CardMateria.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardMateria />
  </StrictMode>,
)
