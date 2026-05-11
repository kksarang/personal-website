import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const storedTheme = localStorage.getItem('hexenity-theme')
const shouldUseDark = storedTheme
  ? storedTheme === 'dark'
  : window.matchMedia('(prefers-color-scheme: dark)').matches

document.documentElement.classList.toggle('dark', shouldUseDark)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
