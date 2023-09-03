import PropTypes from 'prop-types'
import MarketTableData from '@/components/Table/MarketTableData'
import MarketTableTextCell from '@/components/Table/MarketTableTextCell'

/**
 * Pre-styled sub component for rows of the Market Table
 *
 * @component
 */
export default function MarketTableRow({ coin }) {
	return (
		<tr bg="hover:slate-950">
			<MarketTableData align="right" display="flex">
				<img src={coin.img} alt={coin.symbol} w="[24px]" h="[24px]" />
				<MarketTableTextCell>{coin.symbol}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="center">
				<MarketTableTextCell>{coin.amount}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="center">
				<MarketTableTextCell>
					{(coin.amount * coin.changes).toFixed(2)}
				</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="right">
				<MarketTableTextCell>
				{new Date(coin.date).toJSON().slice(0, 10)}
				</MarketTableTextCell>
			</MarketTableData>
		</tr>
	)
}

MarketTableRow.propTypes = {
	/**
	 * Coin's object data
	 */
	coin: PropTypes.array.isRequired,
}
