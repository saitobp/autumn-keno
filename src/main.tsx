import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '~theme/ThemeProvider'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
	<StrictMode>
		<ThemeProvider>App</ThemeProvider>
	</StrictMode>
)
