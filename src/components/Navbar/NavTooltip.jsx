import { useContext } from 'react'
import { HeaderContext } from '@/contexts/HeaderContext'

import PropTypes from 'prop-types'

/**
 * Navbar's items' tooltip when navbar is closed
 *
 * @component
 */
export default function Tooltip({ content }) {
	const open = useContext(HeaderContext)

	return (
		<span
			display="md:flex none"
			justify="center"
			items="center"
			position="absolute"
			top="0px"
			left="[calc(100%+20px)]"
			z="3"
			bg="slate-200"
			h="50px"
			p="y-6px x-12px"
			rounded="md"
			text="base normal"
			whitespace="nowrap"
			shadow="xl"
			className={
				(!open ? 'group-hover:opacity-100 ' : ' ') +
				'opacity-0 pointer-events-none'
			}
		>
			{content}
		</span>
	)
}

Tooltip.propTypes = {
	/**
	 * route's name or content
	 */
	content: PropTypes.string.isRequired,
}
