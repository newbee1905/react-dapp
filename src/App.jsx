import {
	RouterProvider,
	createBrowserRouter,
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom'

import Layout, { _Layout } from '@/components/Layout'
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
				path: 'exchange',
				element: <Exchange />,
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
	return (
		<RouterProvider
			router={router}
			fallbackElement={
				<_Layout>
					<Loading />
				</_Layout>
			}
		/>
	)
}

export default App

// export default function App() {
// 	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route element={<Layout />}>
// 					<Route path="/" element={<Home />} />
// 					<Route path="/wallet" element={<Wallet />} />
// 					<Route path="/transactions" element={<Transactions />} />
// 					<Route path="/trading/:coin" element={<Trading />} />
// 				</Route>
// 			</Routes>
// 		</BrowserRouter>
// 	)
// }
