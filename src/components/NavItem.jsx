import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { HeaderContext } from '@/contexts/HeaderContext'

import NavItemIcon from '@/components/NavItemIcon'
import NavTooltip from '@/components/NavTooltip'

export default function NavItem({ data }) {
	const open = useContext(HeaderContext)
	return (
		<li
			position="relative"
			m="y-8px x-0"
			list="none"
			key={data.content}
			rounded="xl"
			transition="all"
			duration="200"
			className="group"
			bg="hover:slate-200"
			h="50px"
		>
			<NavLink
				to={data.link}
				className={({ isActive, isPending }) =>
					(isPending ? 'pending' : isActive ? 'active' : '') +
					'transition-all duration-200 w-full h-full display-flex items-center no-underline'
				}
			>
				<NavItemIcon icon={data.icon} />
				<span
					text="slate-100 group-hover:[#11101d] base 400"
					whitespace="nowrap"
					display="inline-block"
					transition="all"
					duration="200"
					className={
						!open
							? 'opacity-0 pointer-events-none'
							: 'opacity-100 pointer-events-auto'
					}
				>
					{data.content}
				</span>
			</NavLink>
			<NavTooltip content={data.content} />
		</li>
	)
}
