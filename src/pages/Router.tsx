import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SuspenseComponent } from '~components/SuspenseComponent'

const Game = lazy(() => import('~pages/Game'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <SuspenseComponent component={<Game />} />,
	},
])

export function Router() {
	return <RouterProvider router={router} />
}
