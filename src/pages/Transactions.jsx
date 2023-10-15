import { useState, useEffect } from 'react'

import SearchBar from '@/components/SearchBar'
import TransactionsTable from '@/components/Table/TransactionsTable'

import Loading from '@/components/Loading'

export default function Transactions() {
	const [input, setInput] = useState('')
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const transactions_req = await fetch('http://localhost:8000/v1/dapp/transactions', { 
        credentials: "include",
        mode: "cors", 
      })
      let transactions_data = await transactions_req.json();
      setData(transactions_data)
		})()
	}, [])

  if (!data || data.length === 0)
    return <Loading />

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
 m="t-10" 
			>
				<TransactionsTable input={input} w="full" transactions={data} />
			</div>
		</div>
	)
}
