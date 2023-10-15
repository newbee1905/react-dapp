import { useMemo, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/Header'

function Layout() {
	return (
		<>
			<Header />
      <ToastContainer toastStyle={{ backgroundColor: "#111827" }} />
			<main m-l="78px" bg="gray-800" min-h="screen">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
