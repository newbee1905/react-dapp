import NavItem from '@/components/Navbar/NavItem'
import routes from '@/routes'

import useLoginStore from '@/stores/login'

export default function Navbar() {
	const [isLogon, toggleLogon] = useLoginStore((state) => [
		state.isLogon,
		state.toggleLogon,
	])

	return (
		<>
			<span display="none">
				{/* Preload icons */}
				<i i="tabler-home-2" />
				<i i="tabler-wallet" />
				<i i="tabler-arrows-exchange" />
				<i i="tabler-clock-dollar" />
				<i i="tabler-user-circle" />
				<i i="tabler-logout-2" />
			</span>
			<ul list="none" m-t="20px" h="full" display="flex" flex="col">
				{routes.map((route, index) => (
					<NavItem
						key={route.content}
						route={route}
						onClick={toggleLogon}
						className={
							index == routes.length - 1 - isLogon
								? 'display-none '
								: '' + index >= routes.length - 2
								? 'mt-auto translate-y--80px'
								: ''
						}
					/>
				))}
			</ul>
		</>
	)
}
