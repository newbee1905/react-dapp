import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import WalletTableRow from '@/components/Table/WalletTableRow'
import WalletTableSkeletonLoading from '@/components/Table/WalletTableSkeletonLoading'

import WalletData from '@/wallet.json'

/**
 * Pre-styled table for the wallet data
 *
 * @component
 */
export default function WalletTable(props) {
	const data = useCoinStore((state) => Object.entries(state.data))
	const walletKeys = useMemo(() => Object.keys(WalletData))

	const { input } = props

	let processedData = data
		.filter(
			([key, _]) => {
				return key.toLowerCase().includes(input.toLowerCase()) &&
				walletKeys.indexOf(key) !== -1
			}
		)
		.map((d) => {
			return [
				d[0],
				{
					...d[1],
					total: WalletData[d[0]].total,
				},
			]
		})

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
								{WalletTable.tableHeaders.map((header) => (
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
									<WalletTableRow
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

WalletTable.propTypes = {
	/**
	 * input's value of search filter
	 */
	input: PropTypes.string.isRequired,
}

WalletTable.tableHeaders = Object.freeze([
	['Coin', 'left'],
	['Balance', 'center'],
	['Value', 'center'],
	['Changes', 'right'],
])
