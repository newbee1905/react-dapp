import { useState } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import TradingTableRow from '@/components/Table/TradingTableRow'
import MarketTableSkeletonLoading from '@/components/Table/MarketTableSkeletonLoading'

/**
 * Pre-styled table for the market data
 *
 * @component
 */
export default function TradingTable(props) {
	const { input, setTradingCoin, data, setOpen } = props

	let processedData = data.filter(([key, _value]) =>
		key.toLowerCase().includes(input.toLowerCase())
	)

	let processedDataChunks = arrayChunks(processedData, 5)
	const [chunkId, setChunkId] = useState(0)

	return (
		<div {...props}>
			<div
				position="relative"
				overflow="hidden"
				display="flex"
				justify="center"
				w="full"
			>
				<div
					overflow="x-auto"
					w="full"
					p="y-4 x-4"
					bg="slate-900"
				>
					<table w="full" text="left slate-200">
						<thead text="xs md:base slate-200 uppercase">
							<tr>
								{TradingTable.tableHeaders.map((header) => (
									<th scope="col" p="x-4 y-3" key={header[0]} align={header[1]}>
										{header[0]}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.length === 0 ? (
								<MarketTableSkeletonLoading />
							) : (
								(processedDataChunks[chunkId] ?? []).map((coin) => (
									<TradingTableRow
										key={coin[0]}
										coin={coin}
										data={data}
										setTradingCoin={setTradingCoin}
										setOpen={setOpen}
									/>
								))
							)}
						</tbody>
					</table>
					<MarketTableFooter
						step={5}
						processedData={processedData}
						processedDataChunks={processedDataChunks}
						chunkId={chunkId}
						setChunkId={setChunkId}
					/>
				</div>
			</div>
		</div>
	)
}

TradingTable.propTypes = {
	/**
	 * input's value of search filter
	 */
	input: PropTypes.string.isRequired,
	/**
	 * Set selected coin for trading
	 */
	setTradingCoin: PropTypes.func.isRequired,
	/**
	 * Filtered data
	 */
	data: PropTypes.array.isRequired,
	/**
	 * Close selection after select coin
	 */
	setOpen: PropTypes.func.isRequired,
}

TradingTable.tableHeaders = Object.freeze([
	['Coin', 'left'],
	['Price', 'center'],
	['Changes', 'right'],
])
