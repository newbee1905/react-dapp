import { useState, useMemo } from 'react'

import useCoinStore from '@/stores/coins'

import SearchBar from '@/components/SearchBar'
import TransactionsTable from '@/components/Table/TransactionsTable'

export default function Transactions() {
	const [input, setInput] = useState('')
	const data = useCoinStore((state) => state.data)

	/**
	 * using use memo here so that the value of these value only update
	 * the value of data
	 * -> updating input will not affect this
	 */

	return (
		<div w="full" h="full">
			<SearchBar input={input} setInput={setInput} />
			<div
				p="md:x-10 y-4 x-2"
				display="flex"
				flex="row"
				w="full"
				h="full"
				justify="between"
			>
				<TransactionsTable input={input} w="full" />
			</div>
		</div>
	)
}
