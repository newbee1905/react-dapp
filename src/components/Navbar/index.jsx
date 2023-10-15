import NavItem from '@/components/Navbar/NavItem'
import routes from '@/routes'

import useLoginStore from '@/stores/login'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Navbar() {
	const [isLogon, setLogon] = useLoginStore((state) => [
		state.isLogon,
		state.setLogon,
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
						className={
							index == routes.length - 1 - isLogon
								? 'display-none '
								: '' + index >= routes.length - 2
								? 'mt-auto translate-y--80px'
								: ''
						}
            onClick={index === routes.length - 1 ? async () => {
              await fetch('http://localhost:8000/v1/users/logout')
              toast.info("Logged out!")
              setLogon(false)
            } : () => {}}
					/>
				))}
			</ul>
		</>
	)
}
