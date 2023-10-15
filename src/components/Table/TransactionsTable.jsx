import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import TransitionsTableRow from '@/components/Table/TransactionsTableRow'
import WalletTableSkeletonLoading from '@/components/Table/WalletTableSkeletonLoading'

/**
 * Pre-styled table for the market data
 *
 * @component
 */
export default function TransactionsTable(props) {
	const { input, transactions } = props

	let processedDataChunks = arrayChunks(transactions, 10)
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
              {(processedDataChunks[chunkId] ?? []).map((transaction) => (
									<TransitionsTableRow
										transaction={transaction}
										loading={transactions.length === 0}
									/>
								))
              }
						</tbody>
					</table>
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
	['Type', 'left'],
	['From', 'center'],
	['To', 'center'],
	['Total', 'right'],
])
