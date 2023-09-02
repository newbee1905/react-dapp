import { useEffect } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'

import Loading from '@/components/Loading'
import Header from '@/components/Header'

import useCoinStore from '@/stores/coins'

function Layout() {
	let navigation = useNavigation()

	const getData = useCoinStore(state => state.getData)	

	useEffect(() => {
		getData().then();
	}, [])

	return (
		<>
			{/* <div position="fixed" className="position-fixed flex h-screen w-screen">
				{navigation.state !== 'idle' && <Loading />}
			</div> */}
			<Header />
			<main m-l="78px" bg="gray-800" min-h="screen">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
