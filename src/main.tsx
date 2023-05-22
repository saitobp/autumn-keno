import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '~pages/Router'
import { ThemeProvider } from '~theme/ThemeProvider'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
	<StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</StrictMode>
)
