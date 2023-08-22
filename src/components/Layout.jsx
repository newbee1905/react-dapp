import { Outlet, useNavigation } from 'react-router-dom'

import Loading from '@/components/Loading'

function Layout() {
	let navigation = useNavigation()

	return (
		<>
			<div position="fixed" className="position-fixed flex h-screen w-screen">
				{navigation.state !== 'idle' && <Loading />}
			</div>
			<Outlet />
		</>
	)
}

export default Layout
