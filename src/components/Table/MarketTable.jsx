import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import MarketTableRow from '@/components/Table/MarketTableRow'
import MarketTableSkeletonLoading from '@/components/Table/MarketTableSkeletonLoading'

/**
 * Pre-styled table for the market data
 *
 * @component
 */
export default function MarketTable(props) {
	const { input, data } = props

	let processedData = data.filter((coin) =>
	  coin
      .name
			.toLowerCase()
			.includes(input.toLowerCase())
	)

	let processedDataChunks = arrayChunks(processedData, 10)
	const [chunkId, setChunkId] = useState(0)

	return (
		<div p="x-3" {...props}>
			<div
				position="relative"
				overflow="hidden"
				display="flex"
				justify="center"
				w="full"
			>
				<div
					overflow="x-auto"
					max-w="6xl"
					w="full"
					p="y-4 x-4"
					rounded="xl"
					bg="slate-900"
				>
					<table w="full" text="left slate-200">
						<thead text="xs md:base slate-200 uppercase">
							<tr>
								{MarketTable.tableHeaders.map((header) => (
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
									<MarketTableRow key={coin.name} coin={coin} />
								))
							)}
						</tbody>
					</table>
					<MarketTableFooter
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

MarketTable.propTypes = {
	/**
	 * input's value of search filter
	 */
	input: PropTypes.string.isRequired,
}

MarketTable.tableHeaders = Object.freeze([
	['Coin', 'left'],
	['Price', 'center'],
	['Changes', 'right'],
])
