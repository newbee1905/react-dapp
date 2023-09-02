import { useState } from 'react'
import PropTypes from 'prop-types'

import { SkeletonLoading } from '@/components/Loading'
import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/MarketTable/MarketTableFooter'
import MarketTableRow from '@/components/MarketTable/MarketTableRow'
import MarketTableSkeletonLoading from '@/components/MarketTable/MarketTableSkeletonLoading'

/**
 * Pre-styled table for the market data
 *
 * @component
 */
export default function MarketTable({ input }) {
	const data = useCoinStore((state) => Object.entries(state.data))

	let processedData = data.filter(([key, value]) =>
		key.toLowerCase().includes(input.toLowerCase())
	)
	let processedDataChunks = arrayChunks(processedData, 10)
	const [chunkId, setChunkId] = useState(0)

	return (
		<div w="full" p="x-3">
			<div
				position="relative"
				overflow="hidden"
				display="flex"
				justify="center"
			>
				<div
					overflow="x-auto"
					max-w="6xl"
					p="y-4 x-4"
					rounded="xl"
					bg="slate-900"
				>
					<table w="full" text="sm left slate-200">
						<thead text="base slate-200 uppercase">
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
									<MarketTableRow
										key={coin[0]}
										coin={coin}
										loading={data.length === 0}
									/>
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
