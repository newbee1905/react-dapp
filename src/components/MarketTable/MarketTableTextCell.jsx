import PropTypes from 'prop-types'

/**
 * Pre-styled sub-component for data of of the Market Table
 *
 * @component
 */
export default function MarketTableTextCell({
	textStyle = 'slate-200 sm medium',
	children,
}) {
	return (
		<span bg="primary-900" text={textStyle} p="x-2 y-0.5" className="rounded">
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
