import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Wallet from '@/pages/Wallet'
import Transactions from '@/pages/Transactions'
import Exchange from '@/pages/Exchange'
import Trading from '@/pages/Trading'
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
				path: 'wallet',
				element: <Wallet />,
			},
			{
				path: 'transactions',
				element: <Transactions />,
			},
			{
				path: 'trading/:coin',
				element: <Trading />,
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
