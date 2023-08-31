import { Outlet, useNavigation } from 'react-router-dom'

import Loading from '@/components/Loading'
import Header from '@/components/Header'

function Layout() {
	let navigation = useNavigation()

	return (
		<>
			<div position="fixed" className="position-fixed flex h-screen w-screen">
				{navigation.state !== 'idle' && <Loading />}
			</div>
			<Header />
			<main m-l="78px" bg="neutral-200" min-h="screen">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
