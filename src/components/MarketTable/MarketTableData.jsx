import PropTypes from 'prop-types'

/**
 * Pre-styled sub component for data of of the Market Table
 *
 * @component
 */
export default function MarketTableData(props) {
	const { align, children } = props
	return (
		<td p="x-4 y-4" align={align} {...props}>
			{children}
		</td>
	)
}

MarketTableData.propTypes = {
	/**
	 * Custom align for the data
	 */
	align: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}