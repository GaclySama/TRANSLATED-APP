import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import TranslateApp from './TranslateApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslateApp />
  </StrictMode>,
)
