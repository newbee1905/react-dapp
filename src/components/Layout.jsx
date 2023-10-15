import { useMemo, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header'
import Loading from '@/components/Loading'

import useCoinStore from '@/stores/coins'

function Layout() {
	const [data, getData] = useCoinStore((state) => [state.data, state.getData])

	const changed = localStorage.getItem('coins-data-changed')

	useEffect(() => {
		if (
			Date.now() - changed >= 60 * 60 * 1000 ||
			Object.entries(data).length === 0
		) {
			getData()
			localStorage.setItem('coins-data-changed', Date.now())
		}
	})

	return (
		<>
			<Header />
      <ToastContainer toastStyle={{ backgroundColor: "#111827" }} />
			<main m-l="78px" bg="gray-800" min-h="screen">
				{Object.entries(data).length === 0 ? <Loading /> : <Outlet />}
			</main>
		</>
	)
}

export default Layout
