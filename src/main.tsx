import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(<StrictMode></StrictMode>)
