import PropTypes from 'prop-types'

/**
 * Pre-styled navbar's item's icon
 *
 * @component
 */
export default function NavItemIcon({ icon }) {
	return (
		<span
			min-w="50px"
			min-h="50px"
			display="flex"
			justify="center"
			items="center"
		>
			<i
				text="[#fff] group-hover:[#11101d]"
				i={icon}
				rounded="xl"
				min-w="20px"
				min-h="20px"
			/>
		</span>
	)
}

NavItemIcon.propTypes = {
	/**
	 * The icon code name for uno-css
	 */
	icon: PropTypes.string.isRequired,
}
