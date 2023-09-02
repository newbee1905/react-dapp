import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { HeaderContext } from '@/contexts/HeaderContext'

import NavItemIcon from '@/components/Navbar/NavItemIcon'
import NavTooltip from '@/components/Navbar/NavTooltip'

import PropTypes from 'prop-types'

/**
 * Navbar's items creating NavLink linking to pages
 * 
 * @component
 */
export default function NavItem({ route }) {
	const open = useContext(HeaderContext)
	return (
		<li
			position="relative"
			m="y-8px x-0"
			list="none"
			key={route.content}
			rounded="xl"
			transition="all"
			duration="200"
			className="group"
			bg="hover:slate-200"
			h="50px"
		>
			<NavLink
				to={route.link}
				className={({ isActive, isPending }) =>
					(isPending ? 'pending' : isActive ? 'active' : '') +
					'transition-all duration-200 w-full h-full display-flex items-center no-underline'
				}
			>
				<NavItemIcon icon={route.icon} />
				<span
					text="slate-100 group-hover:[#11101d] md:base xs normal"
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
					{route.content}
				</span>
			</NavLink>
			<NavTooltip content={route.content} />
		</li>
	)
}

NavItem.propTypes = {
	/**
	 * Route's data
	 * - link
	 * - icon 
	 * - name/content
	 */
	route: PropTypes.object.isRequired
}