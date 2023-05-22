import { ReactNode, Suspense } from 'react'

type SuspenseComponentProps = {
	/** The component to be loaded */
	component: ReactNode
}

export function SuspenseComponent(props: SuspenseComponentProps) {
	const { component } = props

	return <Suspense fallback={<>Loading</>}>{component}</Suspense>
}
