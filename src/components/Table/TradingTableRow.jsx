import PropTypes from 'prop-types'
import MarketTableData from '@/components/Table/MarketTableData'
import MarketTableTextCell from '@/components/Table/MarketTableTextCell'

/**
 * Pre-styled sub component for rows of the Market Table
 *
 * @component
 */
export default function TradingTableRow({ coin, setTradingCoin, setOpen }) {
	function handleClick(e) {
		setTradingCoin(coin[1])
		setOpen((prev) => !prev)
	}

	return (
		<tr onClick={handleClick} bg="hover:slate-950">
			<MarketTableData align="right" display="flex">
				<img src={coin[1].img} alt={coin[0]} w="[24px]" h="[24px]" />
				<MarketTableTextCell>{coin[0]}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="center">
				<MarketTableTextCell>{coin[1].values.changes[0]}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="right">
				<MarketTableTextCell
					textStyle={
						(coin[1].values.diff >= 0 ? 'text-green-500' : 'text-red-500') +
						' md:text-base text-xs text-medium'
					}
				>
					{coin[1].values.diff.toFixed(2)}%
				</MarketTableTextCell>
			</MarketTableData>
		</tr>
	)
}

TradingTableRow.propTypes = {
	/**
	 * Coin's object data
	 */
	coin: PropTypes.array.isRequired,
	/**
	 * Set trading's coin for trading box
	 */
	setTradingCoin: PropTypes.func.isRequired,
	/**
	 * Close selection after select coin
	 */
	setOpen: PropTypes.func.isRequired,
}
