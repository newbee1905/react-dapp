import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import TransitionsTableRow from '@/components/Table/TransactionsTableRow'
import WalletTableSkeletonLoading from '@/components/Table/WalletTableSkeletonLoading'

import WalletData from '@/wallet.json'

/**
 * Pre-styled table for the market data
 *
 * @component
 */
export default function TransactionsTable(props) {
	const { input } = props

	const data = useCoinStore((state) => state.data)

	const walletData = useMemo(
		() =>
			Object.entries(WalletData).reduce((acc, cur) => {
				for (let s of cur[1].spent) {
					acc.push({
						...s,
						img: data[cur[0]].img,
						symbol: cur[0],
					})
				}
				return acc
			}, []),
		[data]
	)

	const processedData = walletData.filter((val) =>
		val.symbol.toLowerCase().includes(input.toLowerCase())
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
								{TransactionsTable.tableHeaders.map((header) => (
									<th scope="col" p="x-4 y-3" key={header[0]} align={header[1]}>
										{header[0]}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data.length === 0 ? (
								<WalletTableSkeletonLoading />
							) : (
								(processedDataChunks[chunkId] ?? []).map((coin) => (
									<TransitionsTableRow
										key={coin.symbol}
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

TransactionsTable.propTypes = {
	/**
	 * input's value of search filter
	 */
	input: PropTypes.string.isRequired,
}

TransactionsTable.tableHeaders = Object.freeze([
	['Coin', 'left'],
	['Amount', 'center'],
	['Balance', 'center'],
	['Date', 'right'],
])
