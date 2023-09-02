import PropTypes from 'prop-types'

/**
 * Pre-styled sub-component for data of of the Market Table
 *
 * @component
 */
export default function MarketTableTextCell({
	textStyle = 'text-slate-200 md:text-base text-xs text-medium',
	children,
}) {
	return (
		<span bg="primary-900" className={textStyle} p="x-2 y-0.5">
			{children}
		</span>
	)
}

MarketTableTextCell.propTypes = {
	/**
	 * Custom text's style when needed
	 */
	textStyle: PropTypes.string,
	children: PropTypes.node.isRequired,
}
