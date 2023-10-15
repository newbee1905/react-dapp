import PropTypes from 'prop-types'
import MarketTableData from '@/components/Table/MarketTableData'
import MarketTableTextCell from '@/components/Table/MarketTableTextCell'

import { useNavigate } from 'react-router-dom'

/**
 * Pre-styled sub component for rows of the Market Table
 *
 * @component
 */
export default function MarketTableRow({ coin }) {
	const navigate = useNavigate()
	function handleClick(e) {
		navigate(`/trading/${coin.name}`)
	}

	return (
		<tr onClick={handleClick} bg="hover:slate-950">
			<MarketTableData align="right" display="flex">
				<img src={coin.img} alt={coin.name} w="[24px]" h="[24px]" />
				<MarketTableTextCell>{coin.name}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="center">
				<MarketTableTextCell>{coin.values[0].value_aud}</MarketTableTextCell>
			</MarketTableData>
			<MarketTableData align="right">
				<MarketTableTextCell
					textStyle={
						(coin.diff >= 0 ? 'text-green-500' : 'text-red-500') +
						' md:text-base text-xs text-medium'
					}
				>
					{coin.diff.toFixed(2)}%
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
