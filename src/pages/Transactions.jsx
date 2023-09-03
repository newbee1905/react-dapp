import { useState } from 'react'

import SearchBar from '@/components/SearchBar'
import TransactionsTable from '@/components/Table/TransactionsTable'

export default function Transactions() {
	const [input, setInput] = useState('')

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
