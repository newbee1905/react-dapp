import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import useCoinStore from '@/stores/coins'

import { arrayChunks } from '@/utils'

import MarketTableFooter from '@/components/Table/MarketTableFooter'
import WalletTableRow from '@/components/Table/WalletTableRow'
import WalletTableSkeletonLoading from '@/components/Table/WalletTableSkeletonLoading'


/**
 * Pre-styled table for the wallet data
 *
 * @component
 */
export default function WalletTable(props) {
	const { input, processedData } = props

	let processedDataChunks = arrayChunks(processedData, 10)
	const [chunkId, setChunkId] = useState(0)

	return (
		<div p="x-3" {...props}>
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
