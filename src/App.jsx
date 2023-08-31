import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Loading from '@/components/Loading'

import '@/App.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'search',
				element: <Search />,
			},
			{
				path: 'about',
				lazy: () => import('./pages/About'),
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App
