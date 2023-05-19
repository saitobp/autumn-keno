import { ReactNode } from 'react'
import { GlobalStyles } from './globalStyles'

type ThemeProviderProps = {
	children: ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
	const { children } = props

	return (
		<>
			<GlobalStyles />
			{children}
		</>
	)
}
